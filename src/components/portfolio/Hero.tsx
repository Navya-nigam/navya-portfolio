import { useEffect, useState } from "react";
import { ArrowUpRight, Download, Mail } from "lucide-react";
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

export function Hero() {
  const typed = useTyping();
  return (
    <section id="top" className="relative overflow-hidden bg-warm-gradient pt-28 md:pt-32">
      {/* Subtle grid */}
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />

      {/* Floating geometric accents */}
      <div className="absolute top-32 left-8 h-2 w-2 rounded-full bg-accent animate-pulse" />
      <div className="absolute top-1/2 right-10 h-3 w-3 rounded-full border border-foreground/30" />
      <div className="absolute bottom-40 left-1/4 h-1.5 w-1.5 rounded-full bg-foreground/40" />

      <div className="relative mx-auto max-w-6xl px-5">
        {/* Serif greeting */}
        <h1 className="font-display text-[14vw] md:text-[10rem] leading-[0.95] text-center text-balance">
          <span className="italic">Hey,</span>{" "}
          <span className="italic">there</span>
        </h1>

        {/* Portrait + flanking copy */}
        <div className="relative mt-[-6vw] md:mt-[-5rem] grid grid-cols-12 items-end gap-4">
          {/* Left side info */}
          <div className="col-span-12 md:col-span-3 order-2 md:order-1 z-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-card/80 backdrop-blur px-3 py-1.5 text-xs shadow-soft">
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-75" />
                <span className="relative rounded-full bg-accent h-2 w-2" />
              </span>
              Available for opportunities
            </div>
            <div className="mt-6 font-mono text-xs text-muted-foreground">
              <span className="text-accent">›</span> {typed}
              <span className="inline-block w-[1px] h-3 bg-foreground/60 ml-0.5 animate-pulse align-middle" />
            </div>
          </div>

          {/* Portrait */}
          <div className="col-span-12 md:col-span-6 order-1 md:order-2 flex justify-center">
            <div className="relative">
              <img
                src={heroImg}
                alt="Navya Nigam — Data Science enthusiast"
                width={1024}
                height={1024}
                fetchPriority="high"
                className="w-[78vw] max-w-[520px] md:w-[440px] aspect-square object-cover object-top rounded-t-[40%] rounded-b-3xl"
                style={{ maskImage: "linear-gradient(to bottom, black 88%, transparent)" }}
              />
            </div>
          </div>

          {/* Right side info */}
          <div className="col-span-12 md:col-span-3 order-3 md:text-right z-10">
            <p className="text-sm leading-relaxed text-foreground/80 max-w-xs md:ml-auto">
              Specialized in Data Science, Machine Learning, Deep Learning, and Data Analytics.
            </p>
          </div>
        </div>

        {/* Bottom giant name */}
        <div className="relative grid grid-cols-12 gap-4 -mt-2 md:-mt-10 pb-16 md:pb-24">
          <div className="col-span-12 md:col-span-8">
            <h2 className="font-sans font-black tracking-tight text-[14vw] md:text-[9.5rem] leading-[0.85]">
              I AM
              <br />
              NAVYA
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 md:text-right flex md:flex-col md:items-end gap-4 md:gap-2 self-end">
            <h3 className="font-sans font-black tracking-tight leading-[0.9] text-3xl md:text-[2.6rem]">
              DATA
              <br className="hidden md:inline" /> SCIENCE
              <br className="hidden md:inline" /> ENTHUSIAST
            </h3>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap gap-3 pb-20 md:pb-28">
          <a
            href="#work"
            className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background hover:opacity-90 transition"
          >
            View Projects
            <ArrowUpRight className="h-4 w-4 group-hover:rotate-45 transition-transform" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-6 py-3.5 text-sm font-medium hover:bg-foreground/5 transition"
          >
            <Mail className="h-4 w-4" />
            Contact Me
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-6 py-3.5 text-sm font-medium hover:bg-foreground/5 transition"
          >
            <Download className="h-4 w-4" />
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}
