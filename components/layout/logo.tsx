import Link from "next/link";
import { cn } from "@/lib/utils/cn";

export function Logo({ className, tone = "dark" }: { className?: string; tone?: "dark" | "light" }) {
  return (
    <Link
      href="/"
      aria-label="OrthofitLife — home"
      className={cn("inline-flex items-center gap-2.5", className)}
    >
      <svg viewBox="0 0 32 32" className="size-8" aria-hidden>
        <circle cx="16" cy="16" r="15" className="fill-teal" />
        <path
          d="M16 6 C 13 10, 12 14, 14 18 C 15.4 20.8, 17 22, 18 26 M14 18 C 11 18, 9 16.5, 9 13.5 M17 22 C 20 21, 21.5 19, 21.5 16"
          fill="none"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
      <span
        className={cn(
          "font-display text-lg font-medium tracking-tight",
          tone === "light" ? "text-white" : "text-navy",
        )}
      >
        Ortho<span className="text-teal">fit</span>Life
      </span>
    </Link>
  );
}
