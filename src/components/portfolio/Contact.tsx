import { Section } from "./Section";
import { useState } from "react";
import { Copy, Check, Linkedin, Mail, Phone, ArrowUpRight } from "lucide-react";

const EMAIL = "navya.nigam@example.com";
const PHONE = "+91 00000 00000";
const LINKEDIN = "https://linkedin.com/in/navya-nigam";

function CopyChip({ value, icon: Icon, label }: { value: string; icon: typeof Mail; label: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(value);
        setCopied(true);
        setTimeout(() => setCopied(false), 1600);
      }}
      className="group w-full flex items-center justify-between gap-4 rounded-2xl border bg-card px-5 py-4 hover:border-accent transition-colors"
    >
      <span className="flex items-center gap-3 min-w-0">
        <Icon className="h-4 w-4 text-accent shrink-0" />
        <span className="text-left min-w-0">
          <span className="block text-xs text-muted-foreground">{label}</span>
          <span className="block truncate text-sm font-medium">{value}</span>
        </span>
      </span>
      {copied ? (
        <Check className="h-4 w-4 text-accent" />
      ) : (
        <Copy className="h-4 w-4 text-muted-foreground group-hover:text-foreground" />
      )}
    </button>
  );
}

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Get in touch"
      title={
        <>
          Let's build something <span className="italic">data-driven.</span>
        </>
      }
    >
      <div className="grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5 space-y-3">
          <CopyChip value={EMAIL} icon={Mail} label="Email" />
          <CopyChip value={PHONE} icon={Phone} label="Phone" />
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noreferrer"
            className="group w-full flex items-center justify-between gap-4 rounded-2xl border bg-card px-5 py-4 hover:border-accent transition-colors"
          >
            <span className="flex items-center gap-3 min-w-0">
              <Linkedin className="h-4 w-4 text-accent" />
              <span className="text-left">
                <span className="block text-xs text-muted-foreground">LinkedIn</span>
                <span className="block text-sm font-medium">@navya-nigam</span>
              </span>
            </span>
            <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground group-hover:rotate-45 transition" />
          </a>
        </div>

        <form
          className="lg:col-span-7 rounded-3xl border bg-card p-6 md:p-8 shadow-card space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            window.location.href = `mailto:${EMAIL}`;
          }}
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <label className="block">
              <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                Name
              </span>
              <input
                required
                className="mt-2 w-full bg-transparent border-b border-border focus:border-foreground outline-none py-2 text-sm"
                placeholder="Your name"
              />
            </label>
            <label className="block">
              <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                Email
              </span>
              <input
                required
                type="email"
                className="mt-2 w-full bg-transparent border-b border-border focus:border-foreground outline-none py-2 text-sm"
                placeholder="you@company.com"
              />
            </label>
          </div>
          <label className="block">
            <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
              Message
            </span>
            <textarea
              required
              rows={5}
              className="mt-2 w-full bg-transparent border-b border-border focus:border-foreground outline-none py-2 text-sm resize-none"
              placeholder="Tell me about your project or idea…"
            />
          </label>
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background hover:opacity-90 transition"
          >
            Send Message
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </form>
      </div>
    </Section>
  );
}
