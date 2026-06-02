import { Section } from "./Section";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    year: "2026",
    title: "Customer Churn Analysis Dashboard",
    desc: "Cloud-based customer churn analysis using Google BigQuery for SQL querying, Python for ML churn prediction modeling, and an interactive Power BI dashboard for business insights.",
    tags: ["Python", "BigQuery", "Power BI", "Scikit-learn", "SQL"],
    accent: "from-emerald-400/80 to-teal-400/60",
    link: "https://github.com/Navya-nigam/customer-churn-analysis-dashboard",
  },
  {
    year: "2025",
    title: "Rear-End ADAS System",
    desc: "Real-time vehicle detection and collision-alert generation system to enhance road safety, trained on a custom annotated dataset.",
    tags: ["Python", "YOLOv11", "Roboflow", "Colab"],
    accent: "from-orange-400/80 to-rose-400/60",
  },
  {
    year: "2024",
    title: "Real-Time Sign Language Recognition",
    desc: "CNN-based system translating hand gestures into letters and sentences at 10–15 FPS with ~95% validation accuracy on a custom dataset.",
    tags: ["TensorFlow", "OpenCV", "CNN", "Python"],
    accent: "from-amber-300/80 to-orange-400/60",
  },
  {
    year: "2023",
    title: "Amazon Sales Analysis",
    desc: "EDA on 128k+ Amazon sales records — cleaning, transformation, trend analysis, and business insight reporting across categories.",
    tags: ["Pandas", "NumPy", "Matplotlib", "Seaborn"],
    accent: "from-yellow-300/80 to-amber-500/60",
  },
];

export function Projects() {
  return (
    <Section
      id="work"
      eyebrow="Selected Work"
      title={<>Projects I've <span className="italic">shipped.</span></>}
    >
      <div className="grid gap-5">
        {projects.map((p, i) => (
          <a
            key={p.title}
            href={p.link || "#"}
            target={p.link ? "_blank" : undefined}
            rel={p.link ? "noopener noreferrer" : undefined}
            className="group relative grid md:grid-cols-12 gap-6 md:gap-8 items-stretch rounded-3xl border bg-card p-5 md:p-6 shadow-card hover:-translate-y-1 hover:shadow-soft transition-all"
          >
            <div
              className={`md:col-span-4 relative h-48 md:h-full rounded-2xl overflow-hidden bg-gradient-to-br ${p.accent}`}
            >
              <div className="absolute inset-0 grid-pattern opacity-30" />
              <div className="absolute inset-0 flex items-end p-5">
                <span className="font-display text-7xl md:text-8xl text-background/90 leading-none">
                  0{i + 1}
                </span>
              </div>
              <span className="absolute top-4 right-4 font-mono text-xs text-background/80">
                {p.year}
              </span>
            </div>

            <div className="md:col-span-8 flex flex-col justify-between gap-5">
              <div>
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-3xl md:text-4xl leading-tight">
                    {p.title}
                  </h3>
                  <ArrowUpRight className="h-6 w-6 shrink-0 text-muted-foreground group-hover:text-foreground group-hover:rotate-45 transition-all" />
                </div>
                <p className="mt-3 text-foreground/75 leading-relaxed max-w-2xl">
                  {p.desc}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border px-3 py-1 text-xs font-mono text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}
