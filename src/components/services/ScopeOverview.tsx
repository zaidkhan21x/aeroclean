import Link from "next/link";
import { Ban, Check, Minus } from "@/components/ui/icons";
import { includedServices, optionalServices, outOfScope } from "@/data/services";
import { notIncludedInPackages } from "@/data/packages";

export function ScopeOverview() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <ScopeColumn tone="included" title="Included in packages" note="Within the scope of the package you book.">
        {includedServices.map((s) => (
          <li key={s.slug} className="flex gap-3">
            <Check className="mt-0.5 size-4.5 shrink-0 text-cyan-600" aria-hidden="true" strokeWidth={2.25} />
            <Link href={`#${s.slug}`} className="hover:text-navy-600">
              {s.name}
            </Link>
          </li>
        ))}
      </ScopeColumn>

      <ScopeColumn tone="optional" title="Optional · quoted separately" note="Ask when you book — priced before work starts.">
        {optionalServices.map((s) => (
          <li key={s.slug} className="flex gap-3">
            <Minus className="mt-0.5 size-4.5 shrink-0 text-ink-400" aria-hidden="true" />
            <Link href={`#${s.slug}`} className="hover:text-navy-600">
              {s.name}
            </Link>
          </li>
        ))}
        <li className="flex gap-3">
          <Minus className="mt-0.5 size-4.5 shrink-0 text-ink-400" aria-hidden="true" />
          Extra vents, main trunk lines or hard-to-reach areas beyond your package
        </li>
      </ScopeColumn>

      <ScopeColumn tone="excluded" title="Not included in any package" note="Unless separately agreed in writing.">
        {notIncludedInPackages.map((x) => (
          <li key={x} className="flex gap-3">
            <Ban className="mt-0.5 size-4 shrink-0 text-ink-400" aria-hidden="true" />
            {x}
          </li>
        ))}
      </ScopeColumn>

      <div className="lg:col-span-3">
        <h3 className="mt-8 text-xl font-semibold tracking-tight text-ink-900">Specialist services we don&rsquo;t provide</h3>
        <p className="mt-2 max-w-3xl leading-relaxed text-ink-500">
          Normal vent cleaning never automatically includes any of the following. These need specialists with the right
          training, licensing and equipment. If we come across one of these issues, we stop work in the affected area, show
          you what we found and explain who to contact.
        </p>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {outOfScope.map((item) => (
            <li key={item.title} className="rounded-[var(--radius-card)] border border-line bg-white p-5">
              <p className="flex items-center gap-2 font-semibold text-ink-900">
                <Ban className="size-4 shrink-0 text-ink-400" aria-hidden="true" />
                {item.title}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">{item.detail}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function ScopeColumn({
  tone,
  title,
  note,
  children,
}: {
  tone: "included" | "optional" | "excluded";
  title: string;
  note: string;
  children: React.ReactNode;
}) {
  const style =
    tone === "included"
      ? "border-cyan-500/40 bg-white"
      : tone === "optional"
        ? "border-dashed border-ink-400/50 bg-white/70"
        : "border-line bg-mist";
  return (
    <div className={`rounded-[var(--radius-card)] border p-6 ${style}`}>
      <h3 className="font-semibold text-ink-900">{title}</h3>
      <p className="mt-1 text-sm text-ink-500">{note}</p>
      <ul className="mt-5 space-y-3 text-[0.95rem] text-ink-700">{children}</ul>
    </div>
  );
}
