import type { Metadata } from "next";
import { Hero } from "@/components/hero/hero";
import { DayCards } from "@/components/hero/day-cards";
import { ShopByNeed } from "@/components/hero/shop-by-need";
import { FindYourSupport } from "@/components/discovery/find-your-support";
import { DaySupportStory } from "@/components/discovery/day-support-story";
import { BestSellers } from "@/components/home/best-sellers";
import { TrustSection } from "@/components/home/trust-section";
import { ResearchTeaser, BlogTeaser, ReviewsSection } from "@/components/home/content-sections";
import { NewsletterSection } from "@/components/forms/newsletter";
import { DeskArtifact } from "@/components/case-studies/desk-artifact";
import { ProductGrid } from "@/components/products/product-grid";
import { SectionHeading } from "@/components/ui/section-heading";
import { ButtonLink } from "@/components/ui/button";
import { getProducts } from "@/lib/api";
import { researchArticles } from "@/lib/data/research";
import { blogPosts } from "@/lib/data/blog";
import { medicalDisclaimer } from "@/lib/constants/site";

export const metadata: Metadata = {
  title: "OrthofitLife — Orthopedic & Ergonomic Comfort, Made for Pakistan",
  description:
    "Thoughtfully selected orthopedic and ergonomic products for everyday comfort, work, sleep, movement and recovery — plus research-informed guidance in plain language.",
  alternates: { canonical: "/" },
};

export default async function HomePage() {
  const bestSellers = await getProducts({ sort: "best" });
  const featured = await getProducts({ sort: "featured", limit: 1 });

  return (
    <>
      <Hero />
      <DayCards />
      <ShopByNeed />
      <FindYourSupport id="find-your-support" />
      <BestSellers products={bestSellers.slice(0, 4)} />
      <DaySupportStory />

      {/* Problem → Solution artifact */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24" aria-labelledby="artifact-heading">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            kicker="The problem behind the product"
            title={<span id="artifact-heading">A Day at the Desk</span>}
            description="Most 'desk problems' are five smaller problems wearing one lanyard. Explore them on the body where they actually surface."
          />
          <ButtonLink href="/case-studies" variant="ghost" arrow>
            Explore the case studies
          </ButtonLink>
        </div>
        <div className="mt-10">
          <DeskArtifact />
        </div>
        <p className="mt-4 text-xs leading-relaxed text-slate-soft">{medicalDisclaimer}</p>
      </section>

      <TrustSection />
      <ResearchTeaser articles={researchArticles.slice(0, 3)} />

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8" aria-labelledby="featured-heading">
        <SectionHeading kicker="Featured" title={<span id="featured-heading">This month&apos;s featured range</span>} />
        <div className="mt-8">
          <ProductGrid products={featured} />
        </div>
      </section>

      <ReviewsSection />
      <BlogTeaser posts={blogPosts.slice(0, 4)} products={featured} />
      <NewsletterSection />
    </>
  );
}
