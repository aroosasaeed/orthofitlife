"use client";

import { useState } from "react";
import { ChevronDown, BookOpen } from "lucide-react";
import type { ResearchSource } from "@/types/content";
import { cn } from "@/lib/utils/cn";

/**
 * Research Source UI — expandable, non-academic-looking.
 * The article stays readable; credibility lives behind one click.
 */
export function LinkSourceList({ sources }: { sources: ResearchSource[] }) {
  const [open, setOpen] = useState(false);
  if (sources.length === 0) return null;

  return (
    <div className="rounded-xl border border-navy/10 bg-white">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="flex w-full items-center justify-between px-5 py-4 text-left"
      >
        <span className="flex items-center gap-2.5 font-medium text-navy">
          <BookOpen className="size-4 text-teal" aria-hidden />
          {sources.length === 1 ? "View research source" : `View research sources (${sources.length})`}
        </span>
        <ChevronDown className={cn("size-4 text-slate-soft transition-transform duration-300", open && "rotate-180")} aria-hidden />
      </button>
      <div
        className={cn(
          "grid transition-all duration-400 ease-(--ease-out-expo)",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="overflow-hidden">
          <ol className="divide-y divide-navy/8 border-t border-navy/10 px-5">
            {sources.map((source, i) => (
              <li key={`${source.title}-${i}`} className="py-4">
                <p className="text-sm font-medium leading-snug text-navy">{source.title}</p>
                <p className="mt-1 text-xs text-slate-soft">
                  {source.authors} — <em>{source.publication}</em>, {source.year}.
                  {source.kind === "systematic-review" && " (Systematic review)"}
                  {source.kind === "guideline" && " (Official guideline)"}
                </p>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-soft">
                  What it found: {source.summary}
                </p>
                {(source.doi || source.url) && (
                  <a
                    href={source.doi ? `https://doi.org/${source.doi}` : (source.url ?? "#")}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="mt-1.5 inline-block text-xs font-medium text-teal hover:underline"
                  >
                    {source.doi ? `doi:${source.doi}` : source.url} ↗
                  </a>
                )}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
