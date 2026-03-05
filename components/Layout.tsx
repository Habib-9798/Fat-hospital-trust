import React from 'react';
import Header from './Header';
import Footer from './Footer';
import DonateModal from './DonateModal';
import EmergencyPopup from './EmergencyPopup';
import { DonateProvider, useDonate } from './DonateContext';

function InnerLayout({ children }: { children: React.ReactNode }) {
  const donate = useDonate();

  return (
    <div className="min-h-[100dvh] overflow-x-hidden font-sans text-slate-900 bg-slate-50">
      <div aria-hidden="true" className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(60rem_40rem_at_10%_10%,rgba(2,132,199,0.12),transparent_60%),radial-gradient(50rem_30rem_at_90%_10%,rgba(20,184,166,0.10),transparent_55%),radial-gradient(60rem_40rem_at_50%_100%,rgba(15,23,42,0.05),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(248,250,252,0.6),rgba(248,250,252,0.92),rgba(248,250,252,1))]" />
      </div>

      {/* ✅ Mobile: fixed header wrapper (always visible) | Desktop: normal flow */}
      <div className="fixed top-0 left-0 right-0 z-[99999] md:static">
        <Header />
      </div>

      {/* ✅ Mobile: add top padding so content starts below fixed header */}
      <main className="flex-grow min-w-0 pt-16 md:pt-0">
        {children}
      </main>

      <Footer />

      <DonateModal isOpen={donate.isOpen} onClose={donate.close} />
      <EmergencyPopup />
    </div>
  );
}

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <DonateProvider>
      <InnerLayout>{children}</InnerLayout>
    </DonateProvider>
  );
};

export default Layout;