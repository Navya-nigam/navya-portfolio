import { Section } from "./Section";
import { useEffect, useRef, useState } from "react";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          const start = performance.now();
          const dur = 1400;
          const tick = (t: number) => {
            const p = Math.min(1, (t - start) / dur);
            setN(Math.floor(p * to));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          obs.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [to]);

  return (
    <span ref={ref} className="font-display text-6xl md:text-7xl">
      {n}
      {suffix}
    </span>
  );
}

const certs = [
  "Infosys Springboard — Python",
  "Infosys Springboard — DBMS",
  "Infosys Springboard — HTML",
  "Infosys Springboard — CSS",
  "AI Tools Workshop — B10X",
];

export function Achievements() {
  return (
    <Section
      id="achievements"
      eyebrow="Certifications & Wins"
      title={<>A few <span className="italic">milestones.</span></>}
    >
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        <div className="rounded-3xl border bg-card p-7 shadow-card">
          <Counter to={200} suffix="+" />
          <p className="mt-3 text-sm text-muted-foreground">
            DSA problems solved on LeetCode
          </p>
        </div>
        <div className="rounded-3xl border bg-card p-7 shadow-card">
          <Counter to={3} suffix="★" />
          <p className="mt-3 text-sm text-muted-foreground">
            HackerRank problem-solving rating
          </p>
        </div>
        <div className="rounded-3xl border bg-card p-7 shadow-card">
          <Counter to={5} suffix="" />
          <p className="mt-3 text-sm text-muted-foreground">
            Professional certifications earned
          </p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {certs.map((c) => (
          <div
            key={c}
            className="rounded-2xl border bg-card px-5 py-4 flex items-center gap-3 hover:border-accent transition-colors"
          >
            <span className="h-2 w-2 rounded-full bg-accent" />
            <span className="text-sm">{c}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}
