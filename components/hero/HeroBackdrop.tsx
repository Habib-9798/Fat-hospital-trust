import React from "react";
import { useReducedMotion } from "framer-motion";

export default function HeroBackdrop({
  imageSrc = "/images/hospital-building.png",
  fallbackSrc = "/images/hero-fallback.svg",
}: {
  imageSrc?: string;
  fallbackSrc?: string;
}) {
  const reduceMotion = useReducedMotion();
  const [src, setSrc] = React.useState(imageSrc);

  React.useEffect(() => {
    setSrc(imageSrc);
  }, [imageSrc]);

  return (
    <div className="pointer-events-none absolute inset-0 z-0">
      <img
        src={src}
        onError={() => setSrc(fallbackSrc)}
        alt=""
        className={
          "h-full w-full object-cover " +
          // ✅ Mobile: focus a bit lower so building shows better
          "object-[center_70%] sm:object-center " +
          // ✅ Keep your subtle motion on desktop only
          (reduceMotion ? "" : "sm:scale-[1.04] ") +
          // ✅ Desktop keeps same look, mobile becomes clearer
          "sm:brightness-110 sm:contrast-105 sm:saturate-105"
        }
        loading="eager"
      />

      {/* ✅ Mobile: slightly darker overlay for clarity (text still readable) */}
      <div className="absolute inset-0 bg-slate-950/15 sm:bg-transparent" />

      {/* Existing overlays (keep for desktop, reduce for mobile) */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/25 via-slate-950/10 to-slate-950/20" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/15 via-transparent to-slate-950/20 sm:from-slate-950/10 sm:to-slate-950/15" />

      {/* ✅ This is what was washing out the image on mobile */}
      <div className="hidden sm:block absolute inset-0 bg-white/10 mix-blend-soft-light" />

      {/* ✅ Bottom fade: lighter on mobile so building stays visible */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/55 to-transparent sm:h-28 sm:from-white/85" />
    </div>
  );
}