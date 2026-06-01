import { Section } from "./Section";

const groups = [
  {
    label: "Languages",
    items: ["Python", "C", "SQL", "HTML", "CSS3"],
  },
  {
    label: "Data Science & ML",
    items: [
      "Data Analysis",
      "Machine Learning",
      "Deep Learning",
      "Feature Engineering",
      "Model Evaluation",
    ],
  },
  {
    label: "Libraries & Frameworks",
    items: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "TensorFlow", "OpenCV"],
  },
  {
    label: "Tools",
    items: ["Excel", "Power BI", "Jira", "Git", "Colab"],
  },
  {
    label: "Core CS",
    items: ["DSA", "OOP", "DBMS", "Operating Systems", "Web Tech"],
  },
];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Toolkit"
      title={<>The <span className="italic">stack</span> I build with.</>}
    >
      <div className="grid md:grid-cols-2 gap-4">
        {groups.map((g) => (
          <div
            key={g.label}
            className="rounded-3xl border bg-card p-6 md:p-8 shadow-card hover:bg-cream transition-colors"
          >
            <div className="flex items-baseline justify-between mb-5">
              <h3 className="font-display text-2xl">{g.label}</h3>
              <span className="font-mono text-xs text-muted-foreground">
                {String(g.items.length).padStart(2, "0")}
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {g.items.map((s) => (
                <span
                  key={s}
                  className="rounded-full border bg-background px-3.5 py-1.5 text-sm hover:border-accent hover:text-accent transition-colors"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
