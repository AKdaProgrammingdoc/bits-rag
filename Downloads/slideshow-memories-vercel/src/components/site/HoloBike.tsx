import { useEffect, useState } from "react";
import galleryFz from "@/assets/gallery-fz.jpg";
import galleryPulsar from "@/assets/gallery-pulsar.jpg";
import galleryKarizma from "@/assets/gallery-karizma.jpg";
import galleryScooter from "@/assets/gallery-scooter.jpg";
import galleryAvenger from "@/assets/gallery-avenger.jpg";

const slides = [
  { src: galleryFz, alt: "Yamaha FZ orange full body restoration at SK Motors" },
  { src: galleryPulsar, alt: "Bajaj Pulsar 125 oil change & engine service" },
  { src: galleryKarizma, alt: "Hero Karizma serviced at SK Motors" },
  { src: galleryScooter, alt: "TVS Jupiter scooter air filter & deep cleaning" },
  { src: galleryAvenger, alt: "Bajaj Avenger full engine overhaul" },
];

export function HoloBike() {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % slides.length), 4500);
    return () => clearInterval(t);
  }, [paused]);

  return (
    <div
      className="relative w-full max-w-md mx-auto perspective-1000"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Floor glow */}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-12 rounded-[50%] bg-primary/40 blur-2xl" />

      <div className="relative h-[420px] flex items-center justify-center preserve-3d">
        {slides.map((s, i) => {
          const offset = (i - idx + slides.length) % slides.length;
          const rel = offset > slides.length / 2 ? offset - slides.length : offset;
          const abs = Math.abs(rel);
          const isActive = rel === 0;
          return (
            <div
              key={i}
              className="absolute w-[320px] sm:w-[360px] aspect-[3/4] transition-all duration-700 ease-out"
              style={{
                transform: `translateX(${rel * 180}px) rotateY(${rel * -28}deg) scale(${isActive ? 1 : 0.82})`,
                zIndex: 10 - abs,
                opacity: isActive ? 1 : 0.45,
              }}
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-primary/40 shadow-[0_0_45px_oklch(0.72_0.19_45_/_0.45)] bg-black/40">
                <img
                  src={s.src}
                  alt={s.alt}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Scanline */}
      <div className="absolute inset-x-0 top-0 h-[420px] overflow-hidden rounded-2xl pointer-events-none">
        <div className="absolute left-0 right-0 h-px bg-primary/60 blur-[1px] animate-scanline" />
      </div>

      {/* Dots */}
      <div className="relative z-20 mt-8 flex justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Show slide ${i + 1}`}
            onClick={() => setIdx(i)}
            className={`h-2 rounded-full transition-all ${
              i === idx ? "w-8 bg-primary" : "w-3 bg-primary/40 hover:bg-primary/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
