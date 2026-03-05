import React from 'react';
import { cn } from './cn';

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  tone = 'light',
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  tone?: 'light' | 'dark';
  className?: string;
}) {
  const styles = tone === 'dark'
    ? {
        eyebrow: 'text-white/70',
        title: 'text-white',
        description: 'text-white/80',
      }
    : {
        eyebrow: 'text-medical-700',
        title: 'text-slate-900',
        description: 'text-slate-600',
      };

  return (
    <div
      className={cn(
        'max-w-3xl',
        align === 'center' ? 'mx-auto text-center' : '',
        className,
      )}
    >
      {eyebrow ? (
        <p className={cn('text-xs font-semibold tracking-[0.26em] uppercase', styles.eyebrow)}>{eyebrow}</p>
      ) : null}
      <h2 className={cn('mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight', styles.title)}>{title}</h2>
      {description ? (
        <p className={cn('mt-4 text-base leading-relaxed', styles.description)}>{description}</p>
      ) : null}
    </div>
  );
}
