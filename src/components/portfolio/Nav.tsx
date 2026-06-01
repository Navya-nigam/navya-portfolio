import { useEffect, useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [dark, setDark] = useState(false);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const prefers = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const stored = localStorage.getItem("theme");
    const isDark = stored ? stored === "dark" : prefers;
    document.documentElement.classList.toggle("dark", isDark);
    setDark(isDark);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleDark = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-6 md:py-8"
      }`}
    >
      <div
        className={`mx-auto flex items-center justify-between transition-all ${
          scrolled
            ? "max-w-5xl glass rounded-full py-2.5 px-4 md:px-6"
            : "max-w-[1400px] px-8 md:px-14"
        }`}
      >
        <a
          href="#top"
          className={`font-display text-2xl md:text-[1.6rem] tracking-tight ${
            scrolled ? "" : "text-white"
          }`}
        >
          Navya<sup className="text-[0.55em] ml-0.5">®</sup>
        </a>

        <nav
          className={`hidden md:flex items-center gap-9 text-sm ${
            scrolled ? "text-foreground/80" : "text-white/80"
          }`}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hover:text-lime transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleDark}
            aria-label="Toggle theme"
            className={`grid place-items-center h-10 w-10 rounded-full transition-colors ${
              scrolled ? "hover:bg-muted" : "text-white hover:bg-white/10"
            }`}
          >
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-white text-[oklch(0.18_0.03_155)] pl-5 pr-1.5 py-1.5 text-sm font-semibold hover:gap-3 transition-all"
          >
            Get in touch
            <span className="grid place-items-center h-8 w-8 rounded-full bg-accent text-[oklch(0.18_0.03_155)]">
              <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </a>
          <button
            onClick={() => setOpen(!open)}
            className={`md:hidden grid place-items-center h-10 w-10 rounded-full ${
              scrolled ? "hover:bg-muted" : "text-white hover:bg-white/10"
            }`}
            aria-label="Menu"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden mx-5 mt-2 glass rounded-2xl p-5 flex flex-col gap-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-2 text-base"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex justify-center items-center rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background"
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
}
