import React from 'react';

type SmartImageProps = Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src'> & {
  src: string;
  fallbackSrc?: string;
};

/**
 * Image component with a graceful local fallback.
 * Helps when external image hosts are blocked or slow.
 */
export default function SmartImage({
  src,
  fallbackSrc = '/images/fallback-card.svg',
  onError,
  ...props
}: SmartImageProps) {
  const [currentSrc, setCurrentSrc] = React.useState(src);

  React.useEffect(() => {
    setCurrentSrc(src);
  }, [src]);

  return (
    <img
      {...props}
      src={currentSrc}
      onError={(e) => {
        if (currentSrc !== fallbackSrc) setCurrentSrc(fallbackSrc);
        onError?.(e);
      }}
    />
  );
}
