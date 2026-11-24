"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { primaryNav } from "@/config/navigation";

export function isActive(pathname: string, href: string) {
  const norm = (p: string) => (p.endsWith("/") ? p : `${p}/`);
  return href === "/" ? pathname === "/" : norm(pathname).startsWith(href);
}

export function NavLinks() {
  const pathname = usePathname() ?? "/";
  return (
    <ul className="flex items-center gap-1">
      {primaryNav.map((item) => {
        const active = isActive(pathname, item.href);
        return (
          <li key={item.href}>
            <Link
              href={item.href}
              aria-current={active ? "page" : undefined}
              className={`relative inline-flex min-h-11 items-center rounded-md px-3.5 text-[0.95rem] font-medium transition-colors ${
                active ? "text-ink-900" : "text-ink-500 hover:text-ink-900"
              }`}
            >
              {item.label}
              <span
                aria-hidden="true"
                className={`absolute inset-x-3.5 -bottom-px h-0.5 rounded-full bg-cyan-500 transition-opacity ${active ? "opacity-100" : "opacity-0"}`}
              />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
