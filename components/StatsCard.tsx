import React from 'react';
import { LucideIcon } from 'lucide-react';
import AnimatedNumber from './motion/AnimatedNumber';
import { cn } from './ui/cn';

interface StatsCardProps {
  label: string;
  value: string;
  icon: LucideIcon;
  description?: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ label, value, icon: Icon, description }) => {
  return (
    <div
      className={cn(
        'group relative overflow-hidden rounded-2xl border border-slate-200/60 bg-white/70 p-6 shadow-[0_18px_45px_-30px_rgba(15,23,42,0.55)] backdrop-blur transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_-40px_rgba(15,23,42,0.75)]'
      )}
    >
      <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-b from-medical-400/20 to-trust-400/10 blur-2xl" />
      <div className="flex items-start gap-4">
        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-b from-medical-50 to-white text-medical-700 shadow-sm ring-1 ring-slate-200/60 transition-transform duration-300 group-hover:scale-105">
          <Icon className="h-6 w-6" />
        </div>
        <div className="min-w-0">
          <AnimatedNumber value={value} className="block text-3xl font-bold tracking-tight text-slate-900" />
          <p className="mt-1 text-sm font-semibold text-slate-700">{label}</p>
          {description ? <p className="mt-2 text-xs text-slate-500">{description}</p> : null}
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
