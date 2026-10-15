import { cn } from "@/lib/utils/cn";
import { discountPercent } from "@/lib/utils/format";

export function Badge({
  children,
  tone = "sage",
  className,
}: {
  children: React.ReactNode;
  tone?: "sage" | "teal" | "navy" | "beige";
  className?: string;
}) {
  const tones = {
    sage: "bg-sage-100 text-navy",
    teal: "bg-teal text-white",
    navy: "bg-navy text-white",
    beige: "bg-beige text-navy",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold tracking-wide",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}

export function DiscountPill({ price, compareAtPrice }: { price: number; compareAtPrice?: number }) {
  const pct = discountPercent(price, compareAtPrice);
  if (pct === null) return null;
  return <Badge tone="teal">-{pct}%</Badge>;
}
