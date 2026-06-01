export function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-6xl px-5 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <p className="font-display text-3xl italic">Navya<span className="text-accent">.</span></p>
          <p className="mt-2 text-sm text-muted-foreground max-w-xs">
            Built with passion for Data Science and AI.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground md:justify-center">
          {["About", "Work", "Skills", "Experience", "Contact"].map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="hover:text-foreground transition">
              {l}
            </a>
          ))}
        </div>
        <div className="md:text-right text-xs text-muted-foreground space-y-1">
          <p>© {new Date().getFullYear()} Navya Nigam</p>
          <p>Designed & developed with care.</p>
        </div>
      </div>
    </footer>
  );
}
