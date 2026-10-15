import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How OrthofitLife handles your data — honest, minimal, and currently in prototype form.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Privacy" }]} />
      <h1 className="mt-4 font-display text-3xl font-medium tracking-tight text-navy">Privacy Policy</h1>
      <p className="mt-6 rounded-xl border border-navy/10 bg-beige/50 px-5 py-4 text-sm text-slate-soft">
        <strong className="text-navy">Prototype notice:</strong> this policy is a placeholder to be
        finalised with legal review before launch. In the prototype no personal data is collected,
        stored or transmitted by any form.
      </p>
      <div className="mt-8 space-y-8 leading-relaxed text-navy/85">
        <section>
          <h2 className="font-display text-xl font-medium text-navy">1. What we plan to collect (at launch)</h2>
          <p className="mt-2 text-sm">
            Order details (products, quantities, delivery address), contact form content, and — with
            your consent — analytics events (page views, cart interactions). No payment card data
            will be stored on our servers.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-medium text-navy">2. What the prototype stores</h2>
          <p className="mt-2 text-sm">
            Cart and wishlist items are stored in your browser&apos;s localStorage only. They never
            leave your device and can be cleared by emptying your cart or clearing site data.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-medium text-navy">3. Analytics</h2>
          <p className="mt-2 text-sm">
            The analytics layer is event-based and provider-agnostic; no third-party analytics
            script loads in the prototype. At launch, any analytics tools will be disclosed here
            with their consent requirements.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-medium text-navy">4. Your rights</h2>
          <p className="mt-2 text-sm">
            At launch you will be able to request a copy of your data or its deletion via the
            contact page. We commit to responding within a reasonable timeframe.
          </p>
        </section>
      </div>
    </div>
  );
}
