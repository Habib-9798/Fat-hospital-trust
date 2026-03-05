import React from 'react';

type DonateContextValue = {
  isOpen: boolean;
  source?: string;
  open: (source?: string) => void;
  close: () => void;
};

const DonateContext = React.createContext<DonateContextValue | null>(null);

export function DonateProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [source, setSource] = React.useState<string | undefined>(undefined);

  const open = React.useCallback((nextSource?: string) => {
    setSource(nextSource);
    setIsOpen(true);
  }, []);

  const close = React.useCallback(() => {
    setIsOpen(false);
  }, []);

  const value = React.useMemo(
    () => ({ isOpen, source, open, close }),
    [isOpen, source, open, close]
  );

  return <DonateContext.Provider value={value}>{children}</DonateContext.Provider>;
}

export function useDonate() {
  const ctx = React.useContext(DonateContext);
  if (!ctx) {
    throw new Error('useDonate must be used within DonateProvider');
  }
  return ctx;
}
