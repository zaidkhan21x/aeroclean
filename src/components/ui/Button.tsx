import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghostDark" | "dark" | "link";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-md font-semibold tracking-[-0.005em] transition-[background-color,color,border-color,box-shadow,transform] duration-200 ease-out select-none disabled:pointer-events-none disabled:opacity-50 active:translate-y-px";

const variants: Record<Variant, string> = {
  primary: "bg-cyan-500 text-ink-950 shadow-[inset_0_-2px_0_rgb(0_0_0/0.12)] hover:bg-cyan-400",
  secondary: "border border-ink-700/20 bg-white text-ink-800 hover:border-ink-700/45 hover:bg-mist",
  ghostDark: "border border-white/25 bg-white/[0.03] text-white hover:border-white/55 hover:bg-white/[0.08]",
  dark: "bg-ink-800 text-white hover:bg-ink-700",
  link: "px-0 text-navy-600 underline decoration-cyan-500/70 underline-offset-4 hover:decoration-navy-600",
};

const sizes: Record<Size, string> = {
  md: "min-h-11 px-4.5 text-[0.95rem]",
  lg: "min-h-12 px-6 text-base",
};

export function buttonClasses(variant: Variant = "primary", size: Size = "md", extra = "") {
  return `${base} ${variants[variant]} ${variant === "link" ? "" : sizes[size]} ${extra}`.trim();
}

interface ButtonLinkProps extends Omit<ComponentPropsWithoutRef<"a">, "href"> {
  href: string;
  variant?: Variant;
  size?: Size;
  children: ReactNode;
}

/** Internal routes use next/link; tel:, mailto:, hash and external URLs use a plain anchor. */
export function ButtonLink({ href, variant = "primary", size = "md", className = "", children, ...rest }: ButtonLinkProps) {
  const cls = buttonClasses(variant, size, className);
  const isInternal = href.startsWith("/") && !href.startsWith("//");
  if (isInternal) {
    return (
      <Link href={href} className={cls} {...rest}>
        {children}
      </Link>
    );
  }
  const isExternal = /^https?:\/\//.test(href);
  return (
    <a href={href} className={cls} {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})} {...rest}>
      {children}
    </a>
  );
}
