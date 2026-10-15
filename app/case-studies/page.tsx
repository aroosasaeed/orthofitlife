import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { caseStudies } from "@/lib/data/case-studies";
import { Badge } from "@/components/ui/badges";
import { Reveal } from "@/components/animations/reveal";
import { ProductVisual } from "@/components/visuals/product-visual";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Case Studies — The Problem Behind the Product",
  description:
    "Problem-first stories: the desk worker's chair, the side sleeper's night, the standing professional's shift — each solved part by part with everyday supports.",
  alternates: { canonical: "/case-studies" },
};

const SCENE_TONES: Record<string, string> = {
  desk: "from-sage-100 to-beige",
  sleep: "from-beige to-sage-100",
  standing: "from-beige to-cream",
  driving: "from-cream to-sage-100",
  walking: "from-sage-100 to-cream",
};

export default function CaseStudiesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Case Studies" }]} />
      <header className="mt-4 max-w-2xl">
        <h1 className="font-display text-3xl font-medium tracking-tight text-navy md:text-4xl">
          The Problem Behind the Product
        </h1>
        <p className="mt-3 leading-relaxed text-slate-soft">
          We never start with “buy this cushion”. We start with the very Tuesday that made you
          search for one. Each case is an everyday scenario, solved part by part.
        </p>
      </header>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {caseStudies.map((study, i) => (
          <Reveal key={study.slug} delay={i * 0.05}>
            <Link
              href={`/case-studies/${study.slug}`}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-navy/8 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-teal/30 hover:shadow-lift"
            >
              <div className={`relative aspect-[16/8] overflow-hidden bg-gradient-to-br ${SCENE_TONES[study.scene]}`}>
                <div className="absolute inset-0 flex items-center justify-center transition-transform duration-700 group-hover:scale-105">
                  <ProductVisual kind={study.scene === "sleep" ? "knee" : study.scene === "desk" ? "lumbar" : study.scene === "driving" ? "travelNeck" : "insoleArch"} />
                </div>
                <span className="absolute top-3 left-3">
                  <Badge tone="navy">{study.persona}</Badge>
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h2 className="font-display text-xl font-medium text-navy transition-colors group-hover:text-teal">
                  {study.title}
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-soft">{study.subtitle}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-teal">
                  Read the study <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>

      <p className="mt-10 text-xs leading-relaxed text-slate-soft">
        Case studies describe illustrative everyday scenarios built for this prototype — not case
        histories of real individuals, and not medical guidance.
      </p>
    </div>
  );
}
