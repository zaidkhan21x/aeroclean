import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "light",
  id,
  as: Tag = "h2",
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  id?: string;
  as?: "h1" | "h2";
}) {
  const dark = tone === "dark";
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow ? (
        <p className={`eyebrow ${dark ? "text-cyan-300" : "text-navy-600"}`}>
          <span aria-hidden="true" className={`h-px w-6 ${dark ? "bg-cyan-300/70" : "bg-cyan-500"}`} />
          {eyebrow}
        </p>
      ) : null}
      <Tag
        id={id}
        className={`mt-4 text-[1.85rem] leading-[1.12] font-semibold tracking-[-0.022em] sm:text-[2.35rem] ${dark ? "text-white" : "text-ink-900"}`}
      >
        {title}
      </Tag>
      {intro ? (
        <div className={`mt-4 text-[1.0625rem] leading-relaxed ${dark ? "text-white/70" : "text-ink-500"}`}>{intro}</div>
      ) : null}
    </div>
  );
}
