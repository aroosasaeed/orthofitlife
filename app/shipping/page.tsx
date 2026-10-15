import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { commerceConfig } from "@/lib/constants/site";
import { Reveal } from "@/components/animations/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "Shipping",
  description: "Planned nationwide delivery details for OrthofitLife orders across Pakistan.",
  alternates: { canonical: "/shipping" },
};

export default function ShippingPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Shipping" }]} />
      <h1 className="mt-4 font-display text-3xl font-medium tracking-tight text-navy">Shipping</h1>

      <Reveal className="mt-8">
        <SectionHeading kicker="Shipping" title="Planned launch terms" />
        <div className="mt-4 space-y-4 text-sm leading-relaxed text-navy/85">
          <p>
            <strong>Nationwide delivery:</strong> {commerceConfig.deliveryEstimate} for major cities;
            up to 7 working days for remote areas. Final carrier partnerships will be confirmed at
            launch.
          </p>
          <p>
            <strong>Free shipping threshold:</strong> orders above{" "}
            {commerceConfig.freeShippingThreshold.toLocaleString("en-PK")} PKR. Below that, a flat{" "}
            {commerceConfig.shippingFlatRate.toLocaleString("en-PK")} PKR applies.
          </p>
          <p>
            <strong>Compression-packed products:</strong> pillows and wedges are shipped
            roll-packed; allow 24–48 hours to fully expand after unpacking.
          </p>
          <p className="rounded-xl border border-navy/10 bg-beige/50 px-4 py-3 text-xs text-slate-soft">
            Prototype note: no live orders are processed yet. Terms above are the planned baseline
            and will be finalised before checkout launches.
          </p>
        </div>
      </Reveal>
    </div>
  );
}
