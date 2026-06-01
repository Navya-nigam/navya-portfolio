import { Section } from "./Section";
import { BarChart3, Brain, LineChart, FlaskConical } from "lucide-react";

const services = [
  {
    icon: BarChart3,
    title: "Data Analysis",
    desc: "Turning raw datasets into clear, decision-ready insights through cleaning, EDA, and visualization.",
  },
  {
    icon: Brain,
    title: "Machine Learning",
    desc: "Designing and training predictive models — from classical ML to deep neural networks.",
  },
  {
    icon: LineChart,
    title: "Data Visualization",
    desc: "Dashboards and reports that make trends, anomalies, and KPIs immediately obvious.",
  },
  {
    icon: FlaskConical,
    title: "AI Research & Dev",
    desc: "Applied deep learning and computer vision experiments for real-world problems.",
  },
];

export function Services() {
  return (
    <Section
      id="services"
      eyebrow="What I Do"
      title={<>Services <span className="italic">on offer.</span></>}
    >
      <div className="grid md:grid-cols-2 gap-4">
        {services.map(({ icon: Icon, title, desc }, i) => (
          <div
            key={title}
            className="group relative rounded-3xl border bg-card p-7 md:p-9 overflow-hidden hover:bg-cream transition-colors"
          >
            <span className="absolute top-6 right-7 font-mono text-xs text-muted-foreground">
              0{i + 1}
            </span>
            <Icon className="h-7 w-7 text-accent" strokeWidth={1.4} />
            <h3 className="mt-6 font-display text-3xl">{title}</h3>
            <p className="mt-3 text-foreground/75 leading-relaxed max-w-md">
              {desc}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
