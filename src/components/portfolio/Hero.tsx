import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, ArrowUpRight, Download, Sparkles } from "lucide-react";
import heroImg from "@/assets/navya-hero.jpg";

const titles = [
  "Data Science Enthusiast",
  "Machine Learning Practitioner",
  "Computer Science Undergraduate",
];

function useTyping() {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const current = titles[i];
    const speed = del ? 35 : 65;
    const t = setTimeout(() => {
      if (!del && text === current) {
        setTimeout(() => setDel(true), 1400);
        return;
      }
      if (del && text === "") {
        setDel(false);
        setI((i + 1) % titles.length);
        return;
      }
      setText(
        del ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1),
      );
    }, speed);
    return () => clearTimeout(t);
  }, [text, del, i]);

  return text;
}

const services = [
  { n: "01", label: "Data Analysis" },
  { n: "02", label: "Machine Learning" },
  { n: "03", label: "Deep Learning" },
  { n: "04", label: "AI Research" },
];

const marquee = [
  "Python",
  "TensorFlow",
  "PyTorch",
  "Pandas",
  "NumPy",
  "OpenCV",
  "YOLOv11",
  "Power BI",
  "SQL",
  "Scikit-learn",
  "Matplotlib",
  "Seaborn",
];

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const typed = useTyping();
  return (
    <section id="top" className="px-3 md:px-5 pt-3 md:pt-5">
      <div className="relative overflow-hidden rounded-[28px] md:rounded-[40px] bg-forest-gradient text-[oklch(0.97_0.012_90)]">
        {/* layered backdrops */}
        <div className="absolute inset-0 grid-pattern opacity-[0.07] pointer-events-none" />
        <div
          className="absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full opacity-30 blur-3xl pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, oklch(0.85 0.2 130 / 0.5), transparent 70%)",
          }}
        />
        <div
          className="absolute -bottom-32 -left-32 h-[420px] w-[420px] rounded-full opacity-25 blur-3xl pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, oklch(0.5 0.12 155 / 0.6), transparent 70%)",
          }}
        />

        {/* Portrait — absolute, behind text on desktop */}
        <div className="absolute inset-x-0 top-0 flex justify-center pointer-events-none">
          {/* soft halo ring */}
          <div className="absolute top-16 md:top-20 h-[460px] w-[460px] md:h-[640px] md:w-[640px] rounded-full border border-white/10" />
          <div className="absolute top-24 md:top-32 h-[360px] w-[360px] md:h-[520px] md:w-[520px] rounded-full border border-white/[0.06]" />

          <motion.img
            src={heroImg}
            alt="Navya Nigam — Data Scientist"
            width={1024}
            height={1024}
            fetchPriority="high"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease }}
            className="relative w-[120%] max-w-none md:w-auto md:h-[660px] lg:h-[740px] object-cover object-top"
            style={{
              maskImage:
                "radial-gradient(ellipse 70% 80% at 50% 38%, black 55%, transparent 92%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 70% 80% at 50% 38%, black 55%, transparent 92%)",
            }}
          />
        </div>

        {/* Floating availability badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease }}
          className="absolute top-24 md:top-28 right-6 md:right-12 hidden sm:flex items-center gap-2 rounded-full backdrop-blur-md bg-white/10 border border-white/15 px-3 py-1.5 text-[11px] font-mono text-white/90"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inset-0 rounded-full bg-lime animate-ping opacity-75" style={{ background: "var(--lime)" }} />
            <span className="relative h-2 w-2 rounded-full" style={{ background: "var(--lime)" }} />
          </span>
          Open to opportunities — 2026
        </motion.div>

        {/* Content */}
        <div className="relative px-5 md:px-10 lg:px-14 pt-24 md:pt-32 pb-8 md:pb-10 min-h-[680px] md:min-h-[760px] lg:min-h-[820px] flex flex-col">
          <div className="grid grid-cols-12 gap-6 flex-1">
            {/* LEFT: name + title */}
            <div className="col-span-12 md:col-span-7 flex flex-col justify-start md:justify-center">
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease }}
                className="font-display italic text-2xl md:text-3xl lg:text-4xl text-lime flex items-center gap-2"
              >
                <Sparkles className="h-4 w-4 md:h-5 md:w-5" />
                Hey, I'm Navya,
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.1, ease }}
                className="mt-3 md:mt-4 font-sans font-extrabold tracking-[-0.04em] leading-[0.86] text-[20vw] md:text-[8.2rem] lg:text-[10.5rem] text-white"
              >
                Data
                <br />
                Scien
                <span className="italic font-display font-normal text-lime">t</span>
                ist
              </motion.h1>

              {/* stat row */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.35, ease }}
                className="mt-6 hidden md:flex items-center gap-5 text-white/70"
              >
                <div>
                  <div className="text-2xl font-semibold text-white">200<span className="text-lime">+</span></div>
                  <div className="text-[11px] font-mono uppercase tracking-wider">DSA Solved</div>
                </div>
                <div className="h-8 w-px bg-white/15" />
                <div>
                  <div className="text-2xl font-semibold text-white">IIT-K</div>
                  <div className="text-[11px] font-mono uppercase tracking-wider">Research Intern</div>
                </div>
                <div className="h-8 w-px bg-white/15" />
                <div>
                  <div className="text-2xl font-semibold text-white">95<span className="text-lime">%</span></div>
                  <div className="text-[11px] font-mono uppercase tracking-wider">Model Accuracy</div>
                </div>
              </motion.div>
            </div>

            {/* RIGHT: tagline + description (desktop) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease }}
              className="hidden md:flex md:col-span-5 flex-col justify-end pb-12 lg:pb-20 self-end lg:pl-6"
            >
              <p className="font-display text-2xl lg:text-3xl leading-snug max-w-xs ml-auto text-right">
                Turning complex data into
                <br />
                <span className="italic">decisions that matter.</span>
              </p>
              <p className="mt-4 text-sm text-white/70 max-w-xs ml-auto text-right">
                From raw datasets to deployed models, I build ML
                systems that drive real outcomes.
              </p>
              <div className="mt-5 font-mono text-[11px] text-white/60 text-right">
                <span className="text-lime">›</span> {typed}
                <span className="inline-block w-[1px] h-3 bg-white/60 ml-0.5 animate-pulse align-middle" />
              </div>
            </motion.div>
          </div>

          {/* Bottom strip: services + remix */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease }}
            className="mt-auto pt-10"
          >
            <div className="grid grid-cols-2 md:grid-cols-5 gap-x-4 gap-y-5 items-end">
              {services.map((s) => (
                <div key={s.n} className="group">
                  <p className="text-lime font-mono text-xs mb-1.5 transition-transform group-hover:-translate-y-0.5">
                    #{s.n}
                  </p>
                  <p className="text-sm md:text-[15px] text-white/95 font-medium">
                    {s.label}
                  </p>
                </div>
              ))}
              <div className="col-span-2 md:col-span-1 flex md:justify-end">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground pl-5 pr-1.5 py-1.5 text-sm font-semibold hover:gap-3 transition-all"
                >
                  Get in touch
                  <span className="grid place-items-center h-8 w-8 rounded-full bg-[oklch(0.18_0.03_155)] text-white transition-transform group-hover:rotate-45">
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Marquee strip */}
        <div className="relative border-t border-white/10 bg-[oklch(0.14_0.025_155)] overflow-hidden py-3">
          <div className="flex gap-10 whitespace-nowrap animate-[marquee_36s_linear_infinite]">
            {[...marquee, ...marquee].map((m, i) => (
              <span
                key={i}
                className="font-mono text-xs uppercase tracking-[0.25em] text-white/40 flex items-center gap-10"
              >
                {m}
                <span className="h-1 w-1 rounded-full bg-lime" style={{ background: "var(--lime)" }} />
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile sub-CTAs under hero */}
      <div className="mx-auto max-w-6xl px-2 mt-6 md:hidden">
        <p className="font-display text-xl">
          Turning complex data into{" "}
          <span className="italic">decisions that matter.</span>
        </p>
        <div className="mt-4 font-mono text-[11px] text-muted-foreground">
          <span className="text-lime">›</span> {typed}
          <span className="inline-block w-[1px] h-3 bg-foreground/60 ml-0.5 animate-pulse align-middle" />
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          <a
            href="#work"
            className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background"
          >
            View Projects
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-5 py-3 text-sm font-medium"
          >
            <Download className="h-4 w-4" />
            Resume
          </a>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
