import React from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Phone, MapPin, X, Siren } from 'lucide-react';
import { CONTACT_INFO } from '../constants';
import Button from './ui/Button';

const STORAGE_KEY = 'fath_emergency_popup_dismissed_until';
const ONE_DAY = 1000 * 60 * 60 * 24;

function canShow() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return true;
    const until = Number(raw);
    if (!Number.isFinite(until)) return true;
    return Date.now() > until;
  } catch {
    return true;
  }
}

export default function EmergencyPopup() {
  const reduceMotion = useReducedMotion();
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    if (!canShow()) return;

    let opened = false;
    const open = () => {
      if (opened) return;
      opened = true;
      setIsOpen(true);
    };

    const timer = window.setTimeout(open, 9000);

    const onScroll = () => {
      const y = window.scrollY || 0;
      const h = document.documentElement.scrollHeight || 1;
      const p = y / h;
      if (y > 650 || p > 0.22) open();
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const dismiss = React.useCallback(() => {
    try {
      localStorage.setItem(STORAGE_KEY, String(Date.now() + ONE_DAY));
    } catch {
      // ignore
    }
    setIsOpen(false);
  }, []);

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.aside
          key="emergency"
          initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-4 sm:bottom-6 left-4 right-4 sm:left-auto sm:right-4 z-[90] max-w-sm sm:w-[24rem] overflow-hidden rounded-2xl border border-slate-200/70 bg-white/85 shadow-[0_30px_80px_-55px_rgba(15,23,42,0.85)] backdrop-blur pointer-events-auto"
          role="dialog"
          aria-label="Emergency assistance"
        >
          <div className="relative p-5">
            <div className="absolute -top-10 -right-10 h-28 w-28 rounded-full bg-red-500/10 blur-2xl" />

            <button
              onClick={dismiss}
              className="absolute right-3 top-3 rounded-full p-2 text-slate-500 hover:bg-slate-100"
              aria-label="Dismiss"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="flex items-start gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-red-50 text-red-600 ring-1 ring-red-100">
                <Siren className="h-6 w-6" />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-slate-900">Need emergency help?</p>
                <p className="mt-1 text-xs text-slate-600">
                  Call our 24/7 emergency line or get directions to the hospital.
                </p>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <a href={`tel:${CONTACT_INFO.emergency}`} className="block">
                <Button
                  size="md"
                  className="w-full bg-gradient-to-b from-red-500 to-red-600 shadow-[0_18px_40px_-25px_rgba(239,68,68,0.85)] hover:brightness-[1.02]"
                >
                  <Phone className="h-4 w-4" />
                  Call
                </Button>
              </a>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT_INFO.address)}`}
                target="_blank"
                rel="noreferrer"
                className="block"
              >
                <Button variant="outline" size="md" className="w-full">
                  <MapPin className="h-4 w-4" />
                  Directions
                </Button>
              </a>
            </div>

            <div className="mt-4 rounded-xl bg-slate-50 p-3 text-xs text-slate-600 ring-1 ring-slate-200/60">
              <span className="font-semibold text-slate-900">Emergency:</span> {CONTACT_INFO.emergency}
            </div>
          </div>
        </motion.aside>
      ) : null}
    </AnimatePresence>
  );
}