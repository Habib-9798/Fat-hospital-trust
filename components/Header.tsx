import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Heart } from "lucide-react";
import { NAVIGATION_LINKS } from "../constants";
import { useDonate } from "./DonateContext";
import Button from "./ui/Button";

function Logo() {
  return (
    <Link to="/" className="inline-flex items-center">
      <img
        src="/images/logo.png"
        alt="FAT Hospital & Trust"
        className="h-14 w-auto sm:h-14 md:h-14"
        loading="eager"
      />
    </Link>
  );
}

export default function Header() {
  const donate = useDonate();
  const location = useLocation();

  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const isActive = (href: string) => location.pathname === href;

  React.useEffect(() => {
    const onScroll = () => setScrolled((window.scrollY || 0) > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  React.useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  return (
    <header
      className={
        "sticky top-0 z-[99999] bg-white transition-all " +
        (scrolled
          ? "border-b border-slate-200/60 bg-white/90 backdrop-blur shadow-[0_20px_50px_-45px_rgba(15,23,42,0.75)]"
          : "")
      }
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 md:h-20 items-center justify-between">
          <Logo />

          <nav className="hidden items-center gap-1 md:flex">
            {NAVIGATION_LINKS.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={
                    "relative px-4 py-2 text-sm font-semibold transition-colors " +
                    (active ? "text-slate-900" : "text-slate-600 hover:text-slate-900")
                  }
                >
                  {link.label}
                  {active ? (
                    <span className="absolute left-3 right-3 -bottom-0.5 h-0.5 rounded-full bg-medical-600" />
                  ) : null}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden md:block">
              <Button onClick={() => donate.open("navbar")} className="rounded-full" size="md">
                <Heart className="h-4 w-4 fill-white" />
                Donate
              </Button>
            </div>

            <button
              type="button"
              className="rounded-xl p-2 text-slate-700 hover:bg-slate-100 md:hidden"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((prev) => !prev)}
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen ? (
        <div className="md:hidden border-t border-slate-200/60 bg-white">
          <div className="container mx-auto px-4 py-4">
            <div className="grid gap-2">
              {NAVIGATION_LINKS.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={
                      "rounded-2xl px-4 py-3 text-base font-semibold transition-colors " +
                      (active ? "bg-slate-900 text-white" : "bg-slate-50 text-slate-800 hover:bg-slate-100")
                    }
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                );
              })}

              <div className="pt-2">
                <Button
                  onClick={() => {
                    donate.open("mobile-nav");
                    setMobileOpen(false);
                  }}
                  className="w-full rounded-2xl"
                  size="lg"
                >
                  <Heart className="h-5 w-5 fill-white" />
                  Donate
                </Button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}