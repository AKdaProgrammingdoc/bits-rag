import { Cog } from "lucide-react";

export function HoloBike() {
  return (
    <div className="relative w-full max-w-md aspect-square mx-auto perspective-1000">
      {/* Floor glow */}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-12 rounded-[50%] bg-primary/40 blur-2xl" />

      {/* Rotating ring */}
      <div className="absolute inset-6 rounded-full border border-primary/30 animate-spin-slow" />
      <div
        className="absolute inset-0 rounded-full border border-primary/20 animate-spin-slow"
        style={{ animationDirection: "reverse", animationDuration: "30s" }}
      />

      {/* Bike */}
      <div className="absolute inset-0 grid place-items-center animate-float">
        <div className="relative animate-bike-rotate" style={{ transformStyle: "preserve-3d" }}>
          <div className="absolute inset-0 blur-2xl bg-primary/40 rounded-full" />
          <Cog
            size={240}
            strokeWidth={1.2}
            className="relative text-primary drop-shadow-[0_0_25px_oklch(0.72_0.19_45_/_0.8)] animate-spin-slow"
          />
        </div>
      </div>

      {/* Scanline */}
      <div className="absolute inset-0 overflow-hidden rounded-full pointer-events-none">
        <div className="absolute left-0 right-0 h-px bg-primary/60 blur-[1px] animate-scanline" />
      </div>

      {/* Particles around bike */}
      {Array.from({ length: 8 }).map((_, i) => (
        <span
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-primary-glow shadow-[0_0_10px_oklch(0.78_0.2_55)] animate-float"
          style={{
            top: `${20 + Math.random() * 60}%`,
            left: `${10 + Math.random() * 80}%`,
            animationDelay: `${i * 0.4}s`,
            animationDuration: `${3 + (i % 3)}s`,
          }}
        />
      ))}
    </div>
  );
}
