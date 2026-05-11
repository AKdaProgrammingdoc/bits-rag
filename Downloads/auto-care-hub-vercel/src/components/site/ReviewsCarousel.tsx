import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import reviewBike from "@/assets/review-bike.jpg";
import reviewScooter from "@/assets/review-scooter.jpg";
import reviewEngine from "@/assets/review-engine.jpg";
import reviewShanmugavel from "@/assets/review-shanmugavel.png";
import reviewNiba from "@/assets/review-niba.png";
import reviewBalaji from "@/assets/review-balaji.png";

type Review = { name: string; text: string; image: string };

const reviews: Review[] = [
  { name: "Sathiya Moorthy", image: reviewBike, text: "The mechanics are experts; my bike feels brand new after the service. Excellent, honest service — fixed my bike perfectly, used genuine parts, and returned it on time." },
  { name: "Meenakshi Rajagopalan", image: reviewScooter, text: "Got my scooter serviced here and the result was amazing. Very transparent pricing, friendly staff and they explain every issue clearly. Highly recommend SK Motors for women riders too." },
  { name: "Nates San", image: reviewEngine, text: "They test drive, analyse root cause and then suggest solutions. Even authorised service centres lack this depth of knowledge. Kudos to mechanic Mani and team!" },
  { name: "SHANMUGAVEL R", image: reviewShanmugavel, text: "Mr. Salim did an outstanding job fixing my fork issue. I've finally found the best motorcycle technician for bike servicing." },
  { name: "Niba", image: reviewNiba, text: "Extremely satisfied with the overall experience. The engine runs smoothly, brakes are responsive and gears shift seamlessly — clearly well taken care of. Professional, transparent and prompt throughout. Highly recommend SK Motors as a trustworthy and reliable service." },
  { name: "Balaji CP", image: reviewBalaji, text: "Very passionate & knowledgeable service man. Trustworthy. Recommended to all. Cheers 👏👏👏👍" },
];

export function ReviewsCarousel() {
  const [idx, setIdx] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % reviews.length), 4500);
    return () => clearInterval(t);
  }, [paused]);

  const go = (dir: number) =>
    setIdx((i) => (i + dir + reviews.length) % reviews.length);

  return (
    <div
      className="relative perspective-1000"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="hidden md:flex h-[460px] items-center justify-center preserve-3d relative">
        {reviews.map((r, i) => {
          const offset = ((i - idx + reviews.length) % reviews.length);
          const rel = offset > reviews.length / 2 ? offset - reviews.length : offset;
          const abs = Math.abs(rel);
          if (abs > 2) return null;
          const isActive = rel === 0;
          return (
            <div
              key={i}
              className="absolute w-[380px] transition-all duration-500 ease-out"
              style={{
                transform: `translateX(${rel * 220}px) rotateY(${rel * -25}deg) scale(${isActive ? 1 : 0.85})`,
                zIndex: 10 - abs,
                opacity: isActive ? 1 : 0.5,
              }}
            >
              <ReviewCard {...r} active={isActive} />
            </div>
          );
        })}
      </div>

      <div className="md:hidden">
        <div
          ref={trackRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-4 -mx-4 px-4 pb-4 scroll-smooth"
          style={{ scrollbarWidth: "none" }}
          onScroll={(e) => {
            const el = e.currentTarget;
            const i = Math.round(el.scrollLeft / el.clientWidth);
            if (i !== idx) setIdx(i);
          }}
        >
          {reviews.map((r, i) => (
            <div key={i} className="snap-center shrink-0 w-full">
              <ReviewCard {...r} active />
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center gap-3 mt-6">
        <button onClick={() => go(-1)} aria-label="Previous" className="hidden md:grid place-items-center w-10 h-10 rounded-full border border-border hover:border-primary hover:text-primary transition">
          <ChevronLeft size={18} />
        </button>
        <div className="flex gap-1.5">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              aria-label={`Review ${i + 1}`}
              className={`h-2 rounded-full transition-all ${i === idx ? "w-6 bg-primary" : "w-2 bg-border"}`}
            />
          ))}
        </div>
        <button onClick={() => go(1)} aria-label="Next" className="hidden md:grid place-items-center w-10 h-10 rounded-full border border-border hover:border-primary hover:text-primary transition">
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}

function ReviewCard({ name, text, image, active }: Review & { active?: boolean }) {
  const initial = name.trim()[0].toUpperCase();
  return (
    <div className={`bg-surface border rounded-2xl overflow-hidden h-full ${active ? "border-primary/60 shadow-glow" : "border-border"}`}>
      {image && (
        <div className="relative w-full h-48 overflow-hidden bg-black">
          <img src={image} alt={`${name}'s vehicle`} className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent pointer-events-none" />
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-glow grid place-items-center text-primary-foreground font-bold text-lg shrink-0">
            {initial}
          </div>
          <div>
            <div className="font-semibold">{name}</div>
            <div className="flex text-primary">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={14} fill="currentColor" />
              ))}
            </div>
          </div>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">"{text}"</p>
      </div>
    </div>
  );
}
