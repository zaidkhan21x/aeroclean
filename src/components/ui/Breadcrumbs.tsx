import Link from "next/link";
import { absoluteUrl } from "@/config/site";
import { JsonLd } from "./JsonLd";

export function Breadcrumbs({ items }: { items: { label: string; href: string }[] }) {
  const all = [{ label: "Home", href: "/" }, ...items];
  return (
    <>
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex flex-wrap items-center gap-2 font-mono text-[0.72rem] tracking-[0.1em] text-white/50 uppercase">
          {all.map((item, i) => (
            <li key={item.href} className="flex items-center gap-2">
              {i > 0 ? <span aria-hidden="true">/</span> : null}
              {i === all.length - 1 ? (
                <span aria-current="page" className="text-white/80">
                  {item.label}
                </span>
              ) : (
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: all.map((item, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: item.label,
            item: absoluteUrl(item.href),
          })),
        }}
      />
    </>
  );
}
