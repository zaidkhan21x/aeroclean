import type { ReactNode } from "react";
import { legal } from "@/config/site";
import { TriangleAlert } from "./icons";

/**
 * Internal "review before publishing" note for the business owner.
 * Rendered only while `legal.showReviewNotes` is true in src/config/site.ts.
 */
export function ReviewNote({ children, title = "Owner / legal review required" }: { children: ReactNode; title?: string }) {
  if (!legal.showReviewNotes) return null;
  return (
    <aside
      className="not-prose my-6 flex gap-3 rounded-md border border-amber-300 bg-amber-50 px-4 py-3 text-sm leading-relaxed text-amber-950"
      aria-label="Note for the website owner"
    >
      <TriangleAlert className="mt-0.5 size-4 shrink-0 text-amber-700" aria-hidden="true" />
      <div>
        <p className="font-semibold">{title}</p>
        <div className="mt-1 [&_code]:rounded [&_code]:bg-amber-100 [&_code]:px-1 [&_code]:font-mono [&_code]:text-[0.8em]">{children}</div>
      </div>
    </aside>
  );
}
