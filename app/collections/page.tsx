import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { needs } from "@/lib/data/needs";
import { personas } from "@/lib/data/personas";
import { categories } from "@/lib/data/categories";
import { SEO_KEYWORDS } from "@/lib/constants/site";

export const metadata: Metadata = {
  title: "Shop by Need — Collections",
  description: "Work, sleep, back, feet, active, mobility and travel collections — plus persona and category shopping for orthopedic comfort in Pakistan.",
  keywords: SEO_KEYWORDS,
  alternates: { canonical: "/collections" },
};

export default function CollectionsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Shop by Need" }]} />
      <h1 className="mt-4 font-display text-3xl font-medium tracking-tight text-navy md:text-4xl">
        Start from your day, not our catalogue
      </h1>
      <p className="mt-3 max-w-2xl text-slate-soft">
        Collections built around what you&apos;re doing — or who you are. Same small catalogue, friendlier doors.
      </p>

      <Section title="By need" description="The everyday scenario first.">
        {needs.map((need, i) => (
          <CollectionTile key={need.slug} href={`/collections/${need.slug}`} title={need.name} body={need.description} delay={i * 0.05} tone={i % 2 === 0 ? "sage" : "beige"} />
        ))}
      </Section>

      <Section title="By person" description="Respectful, useful groupings — never stereotypes.">
        {personas.map((p, i) => (
          <CollectionTile key={p.slug} href={`/collections/${p.slug}`} title={p.name} body={p.headline} delay={i * 0.05} tone={i % 2 === 0 ? "beige" : "sage"} />
        ))}
      </Section>

      <Section title="By category" description="Classic catalogue organisation.">
        {categories.map((c, i) => (
          <CollectionTile key={c.slug} href={`/collections/${c.slug}`} title={c.name} body={c.tagline} delay={i * 0.05} tone={i % 2 === 0 ? "teal" : "navy"} />
        ))}
      </Section>
    </div>
  );
}

import { Reveal } from "@/components/animations/reveal";
import type { ReactNode } from "react";

function Section({ title, description, children }: { title: string; description: string; children: ReactNode }) {
  return (
    <section className="mt-12" aria-label={title}>
      <h2 className="font-display text-2xl font-medium text-navy">{title}</h2>
      <p className="mt-1 text-sm text-slate-soft">{description}</p>
      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{children}</div>
    </section>
  );
}

function CollectionTile({
  href,
  title,
  body,
  delay,
  tone,
}: {
  href: string;
  title: string;
  body: string;
  delay: number;
  tone: "sage" | "beige" | "teal" | "navy";
}) {
  const tones = {
    sage: "bg-sage-100 hover:border-sage-600/40",
    beige: "bg-beige hover:border-teal/40",
    teal: "bg-teal text-white hover:border-sage",
    navy: "bg-navy text-white hover:border-sage",
  };
  return (
    <Reveal delay={delay}>
      <Link
        href={href}
        className={`group flex h-full flex-col justify-between rounded-2xl border border-transparent p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift ${tones[tone]}`}
      >
        <div>
          <h3 className="font-display text-xl font-medium">{title}</h3>
          <p className={`mt-2 text-sm leading-relaxed ${tone === "teal" || tone === "navy" ? "opacity-80" : "text-slate-soft"}`}>{body}</p>
        </div>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-current opacity-90">
          Browse collection
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
        </span>
      </Link>
    </Reveal>
  );
}
