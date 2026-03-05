import React from 'react';
import { cn } from './cn';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const base =
  'w-full rounded-xl border border-slate-200/70 bg-white/70 px-4 py-3 text-sm text-slate-900 shadow-sm backdrop-blur transition-all placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-medical-500/30 focus:border-medical-500/50 disabled:opacity-60';

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => {
  return <input ref={ref} className={cn(base, className)} {...props} />;
});

Input.displayName = 'Input';

export default Input;
