import React from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

/**
 * Premium, subtle reveal animation used across the site.
 *
 * Important behavior:
 * - Respects prefers-reduced-motion
 * - Uses a small blur + vertical lift (calm and professional)
 * - Includes a safety fallback so content never stays invisible (helps full-page screenshots and slow observers)
 */
export default function MotionReveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const ref = React.useRef<HTMLDivElement | null>(null);
  // Low threshold so above-the-fold content reveals immediately.
  const inView = useInView(ref, { once: true, amount: 0.12 });
  const [forceVisible, setForceVisible] = React.useState(false);

  React.useEffect(() => {
    // Safety fallback: never keep content hidden.
    // We keep this short so hero copy, headings, and images are always readable even on slow observers.
    const t = window.setTimeout(() => setForceVisible(true), 140 + delay * 140);
    return () => window.clearTimeout(t);
  }, [delay]);

  const show = inView || forceVisible;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={false}
      animate={show ? { opacity: 1, y: 0, filter: 'blur(0px)' } : { opacity: 0, y: 12, filter: 'blur(8px)' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
