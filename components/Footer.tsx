import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Facebook, Instagram, Twitter } from 'lucide-react';
import { APP_FULL_NAME, CONTACT_INFO, NAVIGATION_LINKS } from '../constants';
import TransparencyModal from './TransparencyModal';

const projectLinks = [
  { label: 'Darul Qura Madrasa', href: '/projects/darul-qura' },
  { label: 'Iqra Virtual School', href: '/projects/iqra-virtual-school' },
  { label: 'Clean Water Initiative', href: '/projects/water-projects' },
  { label: 'FAT Foundation', href: '/projects/trust-foundation' },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const [reportOpen, setReportOpen] = React.useState(false);

  return (
    <footer className="mt-14 md:mt-20 border-t border-slate-200/60 bg-white/70 backdrop-blur overflow-x-hidden">
      <div className="container mx-auto px-4 md:px-6 py-10 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5 min-w-0">
            <h3 className="text-lg font-extrabold tracking-tight text-slate-900">{APP_FULL_NAME}</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 max-w-md">
              A trust-based hospital and charitable foundation committed to dignity, transparency, and care that reaches everyone.
            </p>

            <button
              type="button"
              onClick={() => setReportOpen(true)}
              className="mt-6 inline-flex w-full sm:w-auto items-center gap-3 rounded-2xl border border-slate-200/60 bg-slate-50 px-4 py-3 text-left transition-all hover:-translate-y-0.5 hover:bg-white hover:shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-medical-500 focus-visible:ring-offset-2"
              aria-label="Request monthly transparency report"
            >
              <span className="text-xs font-semibold tracking-[0.18em] uppercase text-slate-500">Transparency</span>
              <span className="h-4 w-px bg-slate-200" />
              <span className="text-sm text-slate-700">
                Monthly report available on request.
                <span className="ml-2 text-medical-700 font-semibold">Open</span>
              </span>
            </button>

            <div className="mt-6 flex flex-wrap gap-3">
              {[Facebook, Twitter, Instagram].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="grid h-10 w-10 place-items-center rounded-2xl border border-slate-200/60 bg-white text-slate-600 shadow-sm transition-all hover:-translate-y-0.5 hover:text-slate-900"
                  aria-label="Social"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-sm font-bold tracking-tight text-slate-900">Explore</h4>
            <ul className="mt-4 space-y-2">
              {NAVIGATION_LINKS.map((l) => (
                <li key={l.href}>
                  <Link to={l.href} className="text-sm text-slate-600 hover:text-slate-900">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-sm font-bold tracking-tight text-slate-900">Projects</h4>
            <ul className="mt-4 space-y-2">
              {projectLinks.map((p) => (
                <li key={p.href}>
                  <Link to={p.href} className="text-sm text-slate-600 hover:text-slate-900">
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2 min-w-0">
            <h4 className="text-sm font-bold tracking-tight text-slate-900">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li className="flex items-start gap-3 min-w-0">
                <MapPin className="mt-0.5 h-5 w-5 text-medical-700 shrink-0" />
                <span className="leading-relaxed break-words">{CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3 min-w-0">
                <Phone className="h-5 w-5 text-medical-700 shrink-0" />
                <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-slate-900 break-words">
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 min-w-0">
                <Mail className="h-5 w-5 text-medical-700 shrink-0" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-slate-900 break-words">
                  {CONTACT_INFO.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 md:mt-12 flex flex-col gap-3 border-t border-slate-200/60 pt-6 md:pt-8 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
          <p>&copy; {year} {APP_FULL_NAME}. All rights reserved.</p>
          <p className="text-xs md:text-sm">
            Built with care for patients, families, and donors.
          </p>
        </div>
      </div>

      <TransparencyModal open={reportOpen} onClose={() => setReportOpen(false)} />
    </footer>
  );
}