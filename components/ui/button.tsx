import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

type Variant = "primary" | "secondary" | "ghost" | "light";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-navy text-white hover:bg-navy-700 active:bg-ink shadow-soft hover:shadow-lift",
  secondary:
    "bg-sage text-navy hover:bg-sage-600 hover:text-white active:bg-sage-600 shadow-soft hover:shadow-lift",
  ghost:
    "bg-transparent text-navy border border-navy/20 hover:border-navy/50 hover:bg-navy/5",
  light:
    "bg-white text-navy border border-navy/10 hover:border-navy/25 shadow-soft hover:shadow-lift",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm gap-1.5",
  md: "h-11 px-6 text-sm",
  lg: "h-13 px-8 text-base",
};

interface ButtonBaseProps {
  variant?: Variant;
  size?: Size;
  arrow?: boolean;
  className?: string;
  children: ReactNode;
}

const buttonClass = cn(
  "group/btn inline-flex select-none items-center justify-center rounded-full font-medium transition-all duration-300 ease-(--ease-out-expo) will-change-transform",
  "hover:-translate-y-px active:translate-y-0",
  "disabled:pointer-events-none disabled:opacity-50",
);

export function Button({
  variant = "primary",
  size = "md",
  arrow = false,
  className,
  children,
  ...rest
}: ButtonBaseProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(buttonClass, variants[variant], sizes[size], className)}
      {...rest}
    >
      {children}
      {arrow && <ArrowRight className="size-4 transition-transform duration-300 group-hover/btn:translate-x-0.5" aria-hidden />}
    </button>
  );
}

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  arrow = false,
  className,
  children,
  ...rest
}: ButtonBaseProps & { href: string; rel?: string; target?: string }) {
  return (
    <Link
      href={href}
      className={cn(buttonClass, variants[variant], sizes[size], className)}
      {...rest}
    >
      {children}
      {arrow && <ArrowRight className="size-4 transition-transform duration-300 group-hover/btn:translate-x-0.5" aria-hidden />}
    </Link>
  );
}
