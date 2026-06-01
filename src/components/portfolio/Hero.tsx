import { useEffect, useState } from "react";
import { ArrowRight, ArrowUpRight, Download } from "lucide-react";
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

export function Hero() {
  const typed = useTyping();
  return (
    <section id="top" className="px-3 md:px-5 pt-3 md:pt-5">
      <div className="relative overflow-hidden rounded-[28px] md:rounded-[40px] bg-forest-gradient text-[oklch(0.97_0.012_90)]">
        {/* subtle grid */}
        <div className="absolute inset-0 grid-pattern opacity-[0.07] pointer-events-none" />

        {/* Portrait — absolute, centered, behind text on desktop */}
        <div className="absolute inset-x-0 top-0 flex justify-center pointer-events-none">
          <img
            src={heroImg}
            alt="Navya Nigam — Data Scientist"
            width={1024}
            height={1024}
            fetchPriority="high"
            className="w-[120%] max-w-none md:w-auto md:h-[640px] lg:h-[720px] object-cover object-top opacity-90 md:opacity-100"
            style={{
              maskImage:
                "radial-gradient(ellipse 70% 80% at 50% 38%, black 55%, transparent 92%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 70% 80% at 50% 38%, black 55%, transparent 92%)",
            }}
          />
        </div>

        {/* Content */}
        <div className="relative px-5 md:px-10 lg:px-14 pt-24 md:pt-28 pb-8 md:pb-10 min-h-[640px] md:min-h-[720px] lg:min-h-[780px] flex flex-col">
          {/* Top row: greeting + right column */}
          <div className="grid grid-cols-12 gap-6 flex-1">
            {/* LEFT: name + title */}
            <div className="col-span-12 md:col-span-7 lg:col-span-7 flex flex-col justify-start md:justify-center">
              <p className="font-display italic text-2xl md:text-3xl lg:text-4xl text-lime">
                Hey, I'm Navya,
              </p>
              <h1 className="mt-3 md:mt-4 font-sans font-extrabold tracking-[-0.04em] leading-[0.88] text-[20vw] md:text-[8rem] lg:text-[10rem] text-white">
                Data
                <br />
                Scientist
              </h1>
            </div>

            {/* RIGHT: tagline + description (desktop) */}
            <div className="hidden md:flex md:col-span-5 lg:col-span-5 flex-col justify-end pb-12 lg:pb-20 self-end md:self-end md:text-left lg:pl-6">
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
            </div>
          </div>

          {/* Bottom strip: services + remix */}
          <div className="mt-auto pt-10">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-x-4 gap-y-5 items-end">
              {services.map((s) => (
                <div key={s.n}>
                  <p className="text-lime font-mono text-xs mb-1.5">#{s.n}</p>
                  <p className="text-sm md:text-[15px] text-white/95 font-medium">
                    {s.label}
                  </p>
                </div>
              ))}
              <div className="col-span-2 md:col-span-1 flex md:justify-end">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-5 py-3 text-sm font-semibold hover:gap-3 transition-all"
                >
                  Get in touch
                  <span className="grid place-items-center h-6 w-6 rounded-full bg-[oklch(0.18_0.03_155)] text-white">
                    <ArrowRight className="h-3 w-3" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sub CTAs under hero (mobile shows tagline here) */}
      <div className="mx-auto max-w-6xl px-2 md:px-5 mt-6 md:hidden">
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
    </section>
  );
}
