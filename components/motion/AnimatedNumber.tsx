import React from 'react';
import { animate, useInView, useReducedMotion } from 'framer-motion';

function parseNumeric(input: string) {
  const match = input.match(/(\d[\d,]*)\s*(\+?)/);
  if (!match) return { num: 0, suffix: '' };
  const num = Number(match[1].replace(/,/g, ''));
  const suffix = match[2] ?? '';
  return { num: Number.isFinite(num) ? num : 0, suffix };
}

export default function AnimatedNumber({
  value,
  className,
}: {
  value: string;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();
  const ref = React.useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });

  const { num: target, suffix } = React.useMemo(() => parseNumeric(value), [value]);
  const [display, setDisplay] = React.useState(0);

  React.useEffect(() => {
    if (!inView) return;
    if (reduceMotion) {
      setDisplay(target);
      return;
    }
    const controls = animate(0, target, {
      duration: 1.25,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });
    return () => controls.stop();
  }, [inView, reduceMotion, target]);

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  );
}
