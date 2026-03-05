import React from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Mail, ShieldCheck, X } from 'lucide-react';
import Button from './ui/Button';
import { CONTACT_INFO } from '../constants';

function useLockBodyScroll(lock: boolean) {
  React.useEffect(() => {
    if (!lock) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [lock]);
}

export default function TransparencyModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const reduceMotion = useReducedMotion();
  useLockBodyScroll(open);

  React.useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open, onClose]);

  const emailHref = `mailto:${CONTACT_INFO.email}?subject=Monthly%20Transparency%20Report%20Request`;

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[70] flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.18 }}
          aria-modal="true"
          role="dialog"
        >
          <button
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
            aria-label="Close modal"
            onClick={onClose}
          />

          <motion.div
            className="relative w-full max-w-2xl max-h-[85vh] overflow-hidden rounded-3xl border border-white/10 bg-white shadow-[0_30px_90px_-60px_rgba(15,23,42,0.95)] flex flex-col"
            initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: reduceMotion ? 0 : 0.22, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-gradient-to-b from-medical-400/25 to-trust-400/10 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-gradient-to-b from-trust-400/20 to-medical-400/10 blur-3xl" />

            {/* Scrollable content */}
            <div className="relative p-6 sm:p-8 overflow-y-auto">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-b from-trust-50 to-white text-trust-700 ring-1 ring-trust-100 shadow-sm">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold tracking-[0.22em] uppercase text-slate-500">Transparency</p>
                    <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900">Monthly impact notes</h2>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      We keep a simple reporting rhythm so donors can see what was funded, purchased, and delivered.
                    </p>
                  </div>
                </div>

                <button
                  onClick={onClose}
                  className="rounded-2xl p-2 text-slate-600 hover:bg-slate-100 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-medical-500"
                  aria-label="Close"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="mt-6 grid gap-3">
                <div className="rounded-2xl border border-slate-200/60 bg-slate-50 p-4">
                  <p className="text-sm font-bold text-slate-900">What you can request</p>
                  <ul className="mt-2 grid gap-2 text-sm text-slate-600">
                    <li>• Photos, receipts, and beneficiary summaries (where appropriate).</li>
                    <li>• Clear budgets and milestones for active projects.</li>
                    <li>• Follow-up notes after delivery and maintenance checks.</li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-slate-200/60 bg-white p-4">
                  <p className="text-sm font-bold text-slate-900">How we share it</p>
                  <p className="mt-2 text-sm text-slate-600">
                    Email our team and tell us which project (or month) you want. We will reply with a summary and links to supporting documents.
                  </p>
                </div>
              </div>

              <div className="mt-7 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
                <a href={emailHref} className="w-full sm:w-auto">
                  <Button size="lg" className="rounded-full w-full sm:w-auto">
                    <Mail className="h-5 w-5" />
                    Request via email
                  </Button>
                </a>
                <Button size="lg" variant="outline" className="rounded-full w-full sm:w-auto" onClick={onClose}>
                  Close
                </Button>
              </div>

              <p className="mt-5 text-xs text-slate-500">
                Note: To protect patient privacy, personal details are never shared in reports.
              </p>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}