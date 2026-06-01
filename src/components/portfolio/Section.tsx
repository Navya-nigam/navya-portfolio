import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  children,
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative py-24 md:py-32 ${className}`}>
      <div className="mx-auto max-w-6xl px-5">
        {(eyebrow || title) && (
          <div className="mb-12 md:mb-16 flex flex-col gap-4">
            {eyebrow && (
              <p className="font-display italic text-2xl md:text-3xl text-lime">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="font-sans font-extrabold tracking-[-0.03em] text-4xl md:text-6xl lg:text-7xl leading-[0.95] text-balance max-w-4xl">
                {title}
              </h2>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
