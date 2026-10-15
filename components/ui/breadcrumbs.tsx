import Link from "next/link";
import { ChevronRight } from "lucide-react";

export interface Crumb {
  label: string;
  href?: string;
}

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-xs text-slate-soft">
      <ol
        itemScope
        itemType="https://schema.org/BreadcrumbList"
        className="flex flex-wrap items-center gap-1.5"
      >
        {items.map((crumb, i) => {
          const isLast = i === items.length - 1;
          return (
            <li
              key={crumb.label}
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
              className="flex items-center gap-1.5"
            >
              {crumb.href && !isLast ? (
                <Link href={crumb.href} itemProp="item" className="transition-colors hover:text-teal">
                  <span itemProp="name">{crumb.label}</span>
                </Link>
              ) : (
                <span itemProp="name" className={isLast ? "font-medium text-navy" : ""} aria-current={isLast ? "page" : undefined}>
                  {crumb.label}
                </span>
              )}
              <meta itemProp="position" content={String(i + 1)} />
              {!isLast && <ChevronRight className="size-3 text-navy/25" aria-hidden />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
