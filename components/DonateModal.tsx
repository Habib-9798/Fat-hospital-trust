import React from 'react';
import { X, Copy, CheckCircle2 } from 'lucide-react';
import { BANK_DETAILS } from '../constants';

interface DonateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DonateModal: React.FC<DonateModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = React.useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  };

  const DetailRow = ({ label, value }: { label: string; value: string }) => (
    <div className="bg-slate-50 p-3 sm:p-4 rounded-lg flex items-center justify-between group hover:bg-slate-100 transition-colors">
      <div>
        <p className="text-xs text-slate-500 uppercase font-semibold tracking-wider mb-1">
          {label}
        </p>
        <p className="font-mono text-slate-900 font-medium md:text-base break-all">
          {value}
        </p>
      </div>
      <button
        onClick={() => handleCopy(value, label)}
        className="ml-4 p-2 text-slate-400 hover:text-medical-600 hover:bg-white rounded-full transition-all"
        title="Copy to clipboard"
      >
        {copied === label ? (
          <CheckCircle2 className="w-5 h-5 text-green-500" />
        ) : (
          <Copy className="w-5 h-5" />
        )}
      </button>
    </div>
  );

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in-95 duration-200 max-h-[85vh] flex flex-col">
        {/* Header */}
        <div className="bg-medical-600 p-5 sm:p-6 flex justify-between items-start text-white shrink-0">
          <div>
            <h2 className="text-2xl font-bold">Make a Donation</h2>
            <p className="text-medical-100 mt-1">Your contribution saves lives.</p>
          </div>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white hover:bg-white/20 p-1 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Body */}
        <div className="p-5 sm:p-6 space-y-4 overflow-y-auto">
          <p className="text-sm text-slate-600 mb-4">
            Direct bank transfers are safe and secure. Please use the details below to transfer your zakat,Sadqah or General donation.
          </p>

          <div className="space-y-3">
            <DetailRow label="Bank Name" value={BANK_DETAILS.bankName} />
            <DetailRow label="Account Title" value={BANK_DETAILS.accountTitle} />
            <DetailRow label="Account Number" value={BANK_DETAILS.accountNumber} />
            <DetailRow label="IBAN" value={BANK_DETAILS.iban} />
          </div>

          <div className="mt-6 bg-medical-50 border border-medical-100 rounded-xl p-4">
            <h3 className="font-bold text-medical-900 text-base mb-2">
              How your donation is used
            </h3>

            <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <span className="mt-1 w-2 h-2 rounded-full bg-medical-600 shrink-0"></span>
                Free indoor treatment for admitted patients
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 w-2 h-2 rounded-full bg-medical-600 shrink-0"></span>
                Emergency support and basic life-saving care (BLS)
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 w-2 h-2 rounded-full bg-medical-600 shrink-0"></span>
                50% off medicines and pharmacy support for patients
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 w-2 h-2 rounded-full bg-medical-600 shrink-0"></span>
                Diagnostics support (ECG, ultrasound, X-ray)
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 w-2 h-2 rounded-full bg-medical-600 shrink-0"></span>
                Clean water projects (installing pumps and wells in water-scarce areas)
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 w-2 h-2 rounded-full bg-medical-600 shrink-0"></span>
                Girls education support (school and Islamic education)
              </li>
            </ul>

            <p className="text-xs text-slate-600 mt-3">
              <span className="font-semibold text-slate-900">100% donations are used</span> for patient support and community projects.
              <span className="mx-2 text-slate-300">•</span>
              <span className="font-semibold text-slate-900">Monthly report</span> available on request.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-100 text-center">
            <p className="text-sm text-slate-500">
              For payment confirmation or queries, please contact:
              <br />
              <span className="font-semibold text-medical-700">0300-1070309</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonateModal;