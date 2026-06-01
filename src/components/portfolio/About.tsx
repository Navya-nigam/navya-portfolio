import { Section } from "./Section";
import { Brain, LineChart, Sparkles, GraduationCap } from "lucide-react";

const highlights = [
  { icon: GraduationCap, label: "B.Tech CS Student", note: "PSIT, 2022 – 2026" },
  { icon: Brain, label: "Research Intern", note: "IIT Kanpur" },
  { icon: LineChart, label: "Deep Learning & Analytics", note: "DNN, CV, EDA" },
  { icon: Sparkles, label: "Analytical Mindset", note: "Always learning" },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="Behind the Data"
      title={
        <>
          Shaping models that turn{" "}
          <span className="italic font-display font-normal">numbers</span> into
          decisions.
        </>
      }
    >
      <div className="grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-7 space-y-6 text-lg leading-relaxed text-foreground/80">
          <p>
            I'm a Computer Science undergraduate with a deep curiosity for{" "}
            <span className="text-foreground font-medium">
              Data Science, Machine Learning, and Deep Learning
            </span>
            . I love the moment when raw, messy data starts to reveal a pattern —
            and the engineering challenge of turning that pattern into something
            useful.
          </p>
          <p>
            Through a research internship at IIT Kanpur and projects across
            computer vision, forecasting, and analytics, I've built a habit of
            asking sharp questions, iterating on models, and shipping work that
            holds up in the real world.
          </p>
          <p className="text-muted-foreground">
            Continuously learning, occasionally over-caffeinated, always
            building.
          </p>
        </div>

        <div className="lg:col-span-5 grid grid-cols-2 gap-3">
          {highlights.map(({ icon: Icon, label, note }) => (
            <div
              key={label}
              className="rounded-2xl border bg-card p-5 shadow-card hover:-translate-y-1 transition-transform"
            >
              <Icon className="h-5 w-5 text-accent" />
              <p className="mt-4 font-medium text-sm">{label}</p>
              <p className="text-xs text-muted-foreground mt-1">{note}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
