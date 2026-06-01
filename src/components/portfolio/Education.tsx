import { Section } from "./Section";

const items = [
  {
    period: "2022 — 2026",
    title: "B.Tech, Computer Science",
    place: "Pranveer Singh Institute of Technology",
    score: "CGPA 7.5",
  },
  {
    period: "2021 — 2022",
    title: "Intermediate, CBSE",
    place: "Mariampur Senior Secondary School",
    score: "70%",
  },
  {
    period: "2019 — 2020",
    title: "High School, CBSE",
    place: "Mariampur Senior Secondary School",
    score: "85.2%",
  },
];

export function Education() {
  return (
    <Section id="education" eyebrow="Education" title="A timeline of learning.">
      <div className="space-y-4">
        {items.map((e) => (
          <div
            key={e.title}
            className="group grid grid-cols-12 gap-4 items-baseline rounded-2xl border bg-card p-5 md:p-7 hover:bg-cream transition-colors"
          >
            <div className="col-span-12 md:col-span-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
              {e.period}
            </div>
            <div className="col-span-12 md:col-span-7">
              <h3 className="font-display text-2xl md:text-3xl">{e.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{e.place}</p>
            </div>
            <div className="col-span-12 md:col-span-2 md:text-right font-mono text-sm">
              {e.score}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
