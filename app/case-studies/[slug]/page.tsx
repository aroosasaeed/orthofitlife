import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Reveal } from "@/components/animations/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProductGrid } from "@/components/products/product-grid";
import { getProductsByIds, getCaseStudyBySlug } from "@/lib/api";
import { caseStudies } from "@/lib/data/case-studies";
import { medicalDisclaimer } from "@/lib/constants/site";
import { ArrowDown } from "lucide-react";

// Chain of narrative blocks rendered as an animated flow.

interface Params {
  slug: string;
}

export async function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const study = await getCaseStudyBySlug(slug);
  if (!study) return { title: "Case study not found" };
  return {
    title: `${study.title} — Case Study`,
    description: study.subtitle,
    alternates: { canonical: `/case-studies/${study.slug}` },
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const study = await getCaseStudyBySlug(slug);
  if (!study) notFound();
  const solutionProducts = await getProductsByIds(study.solution.productIds);

  const blocks = [
    { kicker: "The Problem", head: study.problem.headline, body: study.problem.body, tone: "bg-navy text-white" },
    { kicker: "The Everyday Scenario", head: study.scenario.headline, body: study.scenario.body, tone: "bg-white" },
    { kicker: "What They Need", head: study.needs.headline, body: study.needs.body, tone: "bg-white" },
    { kicker: "The Product Solution", head: study.solution.headline, body: study.solution.body, tone: "bg-sage-100/70" },
    { kicker: "How To Use", head: "Small steps, in a sensible order.", body: "", tone: "bg-white", steps: study.howToUse },
    { kicker: "Expected Benefit", head: study.expectedBenefit.headline, body: study.expectedBenefit.body, tone: "bg-beige/60" },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Case Studies", href: "/case-studies" }, { label: study.title }]} />

      <header className="mt-4 max-w-2xl">
        <p className="text-xs font-semibold tracking-[0.18em] text-teal uppercase">{study.persona}</p>
        <h1 className="mt-2 font-display text-3xl font-medium tracking-tight text-navy md:text-4xl">{study.title}</h1>
        <p className="mt-3 leading-relaxed text-slate-soft">{study.subtitle}</p>
      </header>

      <div className="mt-10 space-y-2">
        {blocks.map((block, i) => (
          <Reveal key={block.kicker} delay={i * 0.04}>
            <div className={`rounded-2xl border border-navy/8 p-6 md:p-8 ${block.tone}`}>
              <p className={`text-xs font-semibold tracking-[0.18em] uppercase ${block.tone.includes("navy") ? "text-sage" : "text-teal"}`}>
                {block.kicker}
              </p>
              <h2 className={`mt-2 font-display text-xl font-medium md:text-2xl ${block.tone.includes("navy") ? "text-white" : "text-navy"}`}>
                {block.head}
              </h2>
              {block.body && (
                <p className={`mt-3 max-w-2xl leading-relaxed ${block.tone.includes("navy") ? "text-white/75" : "text-slate-soft"}`}>
                  {block.body}
                </p>
              )}
              {block.steps && (
                <ol className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {block.steps.map((step, j) => (
                    <li key={step.title} className="relative rounded-xl border border-navy/10 bg-white p-4">
                      <span className="absolute -top-3 left-4 flex size-6 items-center justify-center rounded-full bg-teal text-xs font-bold text-white" aria-hidden>
                        {j + 1}
                      </span>
                      <p className="pt-1 text-sm font-medium text-navy">{step.title}</p>
                      <p className="mt-1 text-xs leading-relaxed text-slate-soft">{step.description}</p>
                    </li>
                  ))}
                </ol>
              )}
            </div>
          </Reveal>
        ))}
        <div className="flex justify-center py-2 text-slate-soft" aria-hidden>
          <ArrowDown className="size-5" />
        </div>
      </div>

      {/* Tips */}
      <Reveal>
        <div className="mt-8 rounded-2xl border border-teal/20 bg-teal/5 p-6 md:p-8">
          <h2 className="font-display text-lg font-medium text-navy">Everyday tips from this study</h2>
          <ul className="mt-3 space-y-2 text-sm text-navy/85">
            {study.tips.map((tip) => (
              <li key={tip} className="flex gap-2.5">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-teal" aria-hidden />
                {tip}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      {/* Solution products */}
      <section className="mt-12" aria-labelledby="case-products">
        <SectionHeading kicker="The solution, productised" title={<span id="case-products">Supports used in this scenario</span>} />
        <div className="mt-6">
          <ProductGrid products={solutionProducts} />
        </div>
      </section>

      <p className="mt-14 rounded-xl border border-navy/10 bg-beige/50 px-5 py-4 text-xs leading-relaxed text-slate-soft">
        {medicalDisclaimer}
      </p>
    </div>
  );
}
