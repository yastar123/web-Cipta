"use client";

import { memo, useEffect, useRef, useState } from "react";

const LOGO_STRIP = "/client-logos-strip.webp";

function ClientLogoCarouselView() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    if (!("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { rootMargin: "100px 0px" },
    );
    observer.observe(carousel);

    return () => observer.disconnect();
  }, []);

  const renderTrack = (reverse: boolean) => (
    <div
      className={`flex h-full w-max shrink-0 whitespace-nowrap ${
        reverse ? "animate-marquee-rev" : "animate-marquee"
      }`}
      style={{
        animationDuration: "35s",
        animationPlayState: isVisible ? "running" : "paused",
      }}
      aria-hidden="true"
    >
      <img
        src={LOGO_STRIP}
        alt=""
        className="h-14 w-auto max-w-none shrink-0 select-none sm:h-16"
        loading="lazy"
        decoding="async"
        draggable={false}
      />
      <img
        src={LOGO_STRIP}
        alt=""
        className="h-14 w-auto max-w-none shrink-0 select-none sm:h-16"
        loading="lazy"
        decoding="async"
        draggable={false}
      />
    </div>
  );

  return (
    <div id="client-logo-carousel" ref={carouselRef}>
      <div
        className="-mx-4 flex h-20 items-center overflow-hidden border-t border-border/10 bg-white/30 sm:-mx-8 sm:h-24 lg:-mx-14 xl:-mx-20"
        aria-hidden="true"
      >
        {renderTrack(true)}
      </div>
      <div
        className="-mx-4 flex h-20 items-center overflow-hidden border-t border-border/10 bg-white/30 sm:-mx-8 sm:h-24 lg:-mx-14 xl:-mx-20"
        aria-hidden="true"
      >
        {renderTrack(false)}
      </div>
    </div>
  );
}

export const ClientLogoCarousel = memo(ClientLogoCarouselView);
