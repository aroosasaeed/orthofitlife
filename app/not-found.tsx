import Link from "next/link";
import { ButtonLink } from "@/components/ui/button";
import { ProductVisual } from "@/components/visuals/product-visual";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-24 text-center">
      <div className="mx-auto aspect-square w-40 overflow-hidden rounded-2xl bg-beige opacity-80">
        <ProductVisual kind="seat" />
      </div>
      <h1 className="mt-8 font-display text-3xl font-medium text-navy md:text-4xl">
        This page could use better support.
      </h1>
      <p className="mt-3 text-slate-soft">
        The link you followed doesn't exist (yet). Let's get you somewhere comfortable.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <ButtonLink href="/" arrow>Back to home</ButtonLink>
        <ButtonLink href="/shop" variant="ghost">Browse the shop</ButtonLink>
      </div>
      <p className="mt-8 text-xs text-slate-soft">
        Or use the search — try <Link href="/search" className="text-teal hover:underline">&ldquo;back support&rdquo;</Link>
      </p>
    </div>
  );
}
