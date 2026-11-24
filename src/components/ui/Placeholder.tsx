/**
 * Clearly identifiable stand-in for business details that have not been
 * supplied yet. It is plain text — never a link — so nothing broken or
 * misleading is shown to visitors.
 */
export function Placeholder({ label, tone = "light" }: { label: string; tone?: "light" | "dark" }) {
  return (
    <span
      className={`inline-flex items-center rounded border border-dashed px-1.5 py-0.5 font-mono text-[0.78em] leading-tight ${
        tone === "dark" ? "border-ember-300/60 bg-ember-300/10 text-ember-300" : "border-amber-500/70 bg-amber-50 text-amber-900"
      }`}
      data-placeholder="true"
    >
      [{label}]
    </span>
  );
}

/** Renders a configured value, or a Placeholder when it is null. */
export function ConfigValue({ value, label }: { value: string | null | undefined; label: string }) {
  return value ? <>{value}</> : <Placeholder label={label} />;
}
