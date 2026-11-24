import type { ReactNode } from "react";

export function Container({
  children,
  className = "",
  size = "default",
}: {
  children: ReactNode;
  className?: string;
  size?: "default" | "narrow" | "wide";
}) {
  const max = size === "narrow" ? "max-w-3xl" : size === "wide" ? "max-w-[88rem]" : "max-w-7xl";
  return <div className={`mx-auto w-full ${max} px-5 sm:px-8 lg:px-10 ${className}`}>{children}</div>;
}
