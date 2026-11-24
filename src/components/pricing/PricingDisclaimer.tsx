import { Info } from "@/components/ui/icons";
import { pricingDisclaimer } from "@/data/packages";

export function PricingDisclaimer({ className = "" }: { className?: string }) {
  return (
    <p className={`flex gap-3 rounded-md border border-line bg-white p-4 text-sm leading-relaxed text-ink-500 ${className}`}>
      <Info className="mt-0.5 size-4 shrink-0 text-navy-600" aria-hidden="true" />
      <span>
        <strong className="font-semibold text-ink-700">Pricing note: </strong>
        {pricingDisclaimer}
      </span>
    </p>
  );
}
