"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { contactHref, legalNav, primaryNav } from "@/config/navigation";
import { buttonClasses } from "@/components/ui/Button";
import { Menu, X } from "@/components/ui/icons";
import { isActive } from "./NavLinks";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const panelId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const [lastPath, setLastPath] = useState(pathname);

  // Close the menu whenever the route changes (adjusting state during render,
  // as recommended by React, instead of in an effect).
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panelRef.current?.querySelector<HTMLElement>("a")?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        ref={buttonRef}
        type="button"
        className="grid size-11 place-items-center rounded-md border border-line text-ink-800 hover:bg-mist"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
      </button>

      <div
        id={panelId}
        ref={panelRef}
        hidden={!open}
        className="fixed inset-x-0 top-[var(--header-h)] bottom-0 z-40 overflow-y-auto border-t border-line bg-white"
      >
        <nav aria-label="Mobile" className="px-5 pt-4 pb-10 sm:px-8">
          <ul className="divide-y divide-line">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(pathname ?? "/", item.href) ? "page" : undefined}
                  className="flex min-h-14 items-center justify-between text-lg font-medium text-ink-900 aria-[current=page]:text-navy-600"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                  <span aria-hidden="true" className="font-mono text-xs text-ink-400">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <a href={contactHref} onClick={() => setOpen(false)} className={buttonClasses("primary", "lg", "mt-8 w-full")}>
            Contact AERO CLEAN
          </a>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-500">
            {legalNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="underline-offset-4 hover:underline" onClick={() => setOpen(false)}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
