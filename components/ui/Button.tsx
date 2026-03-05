import React from 'react';
import { cn } from './cn';

type Variant = 'primary' | 'outline' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

const base =
  'inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-medical-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:opacity-60 disabled:pointer-events-none';

const variants: Record<Variant, string> = {
  primary:
    'text-white bg-gradient-to-b from-medical-600 to-medical-700 shadow-[0_10px_30px_-14px_rgba(2,132,199,0.7)] hover:shadow-[0_18px_40px_-18px_rgba(2,132,199,0.75)] hover:brightness-[1.02] active:translate-y-[1px]',
  outline:
    'text-slate-900 bg-white border border-slate-200 shadow-sm hover:border-slate-300 hover:bg-slate-50 active:translate-y-[1px]',
  ghost:
    'text-slate-700 hover:text-slate-900 hover:bg-slate-100 active:translate-y-[1px]',
};

const sizes: Record<Size, string> = {
  sm: 'h-9 px-3 text-sm',
  md: 'h-11 px-4 text-sm',
  lg: 'h-12 px-5 text-base',
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', type = 'button', ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        className={cn(base, variants[variant], sizes[size], className)}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export default Button;
