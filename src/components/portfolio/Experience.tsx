import { Section } from "./Section";

const tech = ["Python", "TensorFlow", "Pandas", "NumPy"];

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title={<>Where I've been <span className="italic">building.</span></>}
    >
      <div className="relative pl-6 md:pl-10 border-l border-border">
        <div className="absolute -left-[7px] top-2 h-3.5 w-3.5 rounded-full bg-accent ring-4 ring-background" />
        <div className="space-y-2">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Aug 2024 — Oct 2024
          </p>
          <h3 className="font-display text-3xl md:text-4xl">
            Research Intern · <span className="italic">IIT Kanpur</span>
          </h3>
          <p className="text-foreground/80 max-w-2xl mt-3">
            <span className="font-medium text-foreground">
              Electricity Price Forecasting Using Deep Neural Networks.
            </span>{" "}
            Conducted research on price forecasting, performed extensive data
            preprocessing and feature engineering, trained and tuned deep neural
            networks, and evaluated predictive performance against benchmarks.
          </p>
          <ul className="grid sm:grid-cols-2 gap-2 mt-5 text-sm text-muted-foreground">
            {[
              "Data preprocessing & feature engineering",
              "DNN architecture design & training",
              "Hyperparameter tuning & model evaluation",
              "Time-series analysis on price data",
            ].map((r) => (
              <li key={r} className="flex gap-2">
                <span className="text-accent mt-1.5 h-1 w-1 rounded-full bg-accent shrink-0" />
                {r}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2 mt-6">
            {tech.map((t) => (
              <span
                key={t}
                className="rounded-full border px-3 py-1 text-xs font-mono text-muted-foreground"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
