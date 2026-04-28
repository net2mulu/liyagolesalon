"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

const IMAGES = [
  { src: "/space/home1.webp", alt: "Liya Gole Salon interior – view 1" },
  { src: "/space/6.JPG", alt: "Liya Gole Salon interior – view 2" },
  { src: "/space/7.JPG", alt: "Liya Gole Salon interior – view 3" },
  { src: "/space/ha.webp", alt: "Liya Gole Salon interior – view 3" },
  { src: "/space/home4.webp", alt: "Liya Gole Salon interior – view 4" },
];

const AUTO_INTERVAL = 4000; // ms between auto-slides

export default function SpaceCarousel() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setCurrent((index + IMAGES.length) % IMAGES.length);
      setTimeout(() => setIsTransitioning(false), 600);
    },
    [isTransitioning]
  );

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  /* Auto-advance */
  useEffect(() => {
    const timer = setInterval(next, AUTO_INTERVAL);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="relative aspect-square rounded-[40px] overflow-hidden shadow-2xl group select-none">

      {/* ── Slides ───────────────────────────────────────── */}
      {IMAGES.map((img, i) => (
        <div
          key={img.src}
          className="absolute inset-0 transition-opacity duration-700 ease-in-out"
          style={{ opacity: i === current ? 1 : 0 }}
          aria-hidden={i !== current}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            priority={i === 0}
            className="object-cover"
          />
        </div>
      ))}

      {/* ── Subtle dark gradient at bottom for dots contrast ─ */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />

      {/* ── Arrow buttons (visible on hover) ──────────────── */}
      <button
        onClick={prev}
        aria-label="Previous image"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10
                   w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm
                   flex items-center justify-center text-white
                   opacity-0 group-hover:opacity-100
                   transition-opacity duration-300
                   hover:bg-white/35"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      <button
        onClick={next}
        aria-label="Next image"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10
                   w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm
                   flex items-center justify-center text-white
                   opacity-0 group-hover:opacity-100
                   transition-opacity duration-300
                   hover:bg-white/35"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* ── Dot indicators ────────────────────────────────── */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to image ${i + 1}`}
            className={`rounded-full transition-all duration-400
              ${i === current
                ? "w-6 h-2 bg-white"
                : "w-2 h-2 bg-white/50 hover:bg-white/80"
              }`}
          />
        ))}
      </div>
    </div>
  );
}
