import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { medicalDisclaimer } from "@/lib/constants/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms governing use of the OrthofitLife website.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Terms" }]} />
      <h1 className="mt-4 font-display text-3xl font-medium tracking-tight text-navy">Terms of Use</h1>
      <p className="mt-6 rounded-xl border border-navy/10 bg-beige/50 px-5 py-4 text-sm text-slate-soft">
        <strong className="text-navy">Prototype notice:</strong> final terms require legal review
        before launch. The essentials we already commit to are below.
      </p>
      <div className="mt-8 space-y-8 leading-relaxed text-navy/85">
        <section>
          <h2 className="font-display text-xl font-medium text-navy">1. Purpose of this site</h2>
          <p className="mt-2 text-sm">
            OrthofitLife sells orthopedic and ergonomic comfort products, and publishes educational
            content about everyday comfort, posture and ergonomics.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-medium text-navy">2. No medical claims</h2>
          <p className="mt-2 text-sm">{medicalDisclaimer}</p>
        </section>
        <section>
          <h2 className="font-display text-xl font-medium text-navy">3. Sample content</h2>
          <p className="mt-2 text-sm">
            In this prototype, ratings, reviews and some statistics are clearly labelled
            demonstration content. They will be replaced with verifiable data before public launch.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-medium text-navy">4. Intellectual property</h2>
          <p className="mt-2 text-sm">
            All product copy, illustrations and guides on this site are original to OrthofitLife.
            They may not be reproduced without permission.
          </p>
        </section>
      </div>
    </div>
  );
}
