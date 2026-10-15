import { Star, StarHalf } from "lucide-react";
import { cn } from "@/lib/utils/cn";

interface Props {
  rating: number;
  count?: number;
  className?: string;
  showCount?: boolean;
}

export function Rating({ rating, count, className, showCount = true }: Props) {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;
  return (
    <div className={cn("flex items-center gap-1.5", className)}>
      <div className="flex items-center" aria-label={`Rated ${rating} out of 5 (sample rating)`} role="img">
        {Array.from({ length: 5 }).map((_, i) => {
          if (i < full)
            return <Star key={i} className="size-3.5 fill-teal text-teal" aria-hidden />;
          if (i === full && half)
            return <StarHalf key={i} className="size-3.5 fill-teal text-teal" aria-hidden />;
          return <Star key={i} className="size-3.5 fill-navy/10 text-navy/10" aria-hidden />;
        })}
      </div>
      <span className="text-xs font-medium text-navy">
        {rating.toFixed(1)}
      </span>
      {showCount && count !== undefined && (
        <span className="text-xs text-slate-soft">({count})</span>
      )}
    </div>
  );
}
