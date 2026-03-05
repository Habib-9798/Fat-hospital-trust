import React from 'react';
import { cn } from './cn';

export function Card({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-slate-200/60 bg-white/70 shadow-[0_18px_45px_-30px_rgba(15,23,42,0.55)] backdrop-blur',
        className
      )}
    >
      {children}
    </div>
  );
}

export function CardHeader({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <div className={cn('p-6 pb-3', className)}>{children}</div>;
}

export function CardContent({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <div className={cn('p-6 pt-0', className)}>{children}</div>;
}
