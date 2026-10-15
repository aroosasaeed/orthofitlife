import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";

export const metadata: Metadata = {
  title: "Returns",
  description: "Planned 7-day returns process for OrthofitLife orders.",
  alternates: { canonical: "/returns" },
};

export default function ReturnsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Returns" }]} />
      <h1 className="mt-4 font-display text-3xl font-medium tracking-tight text-navy">Returns &amp; Exchange</h1>
      <div className="mt-8 space-y-4 text-sm leading-relaxed text-navy/85">
        <p><strong>Planned policy at launch:</strong> 7 days for unused items in original packaging.</p>
        <ul className="list-inside list-disc space-y-2">
          <li>Hygiene products (insoles, pillows opened beyond trial) are exchange-only.</li>
          <li>Manufacturing defects: full replacement within the return window.</li>
          <li>Return shipping is free for defective items; customer-paid otherwise (planned).</li>
        </ul>
        <p className="rounded-xl border border-navy/10 bg-beige/50 px-4 py-3 text-xs text-slate-soft">
          Prototype note: no live orders yet — the final policy will be confirmed before checkout
          launches and, once live, will supersede this outline.
        </p>
      </div>
    </div>
  );
}
