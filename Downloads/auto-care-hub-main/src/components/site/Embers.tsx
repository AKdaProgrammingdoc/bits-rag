import { useEffect, useState } from "react";

export function Embers({ count = 30 }: { count?: number }) {
  const [particles, setParticles] = useState<{ left: number; delay: number; dur: number; size: number }[]>([]);

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 640px)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const n = isMobile ? Math.min(count, 18) : count;
    setParticles(
      Array.from({ length: n }).map(() => ({
        left: Math.random() * 100,
        delay: Math.random() * 8,
        dur: 8 + Math.random() * 10,
        size: 2 + Math.random() * 3,
      }))
    );
  }, [count]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden -z-0">
      {particles.map((p, i) => (
        <span
          key={i}
          className="ember"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.dur}s`,
          }}
        />
      ))}
    </div>
  );
}
