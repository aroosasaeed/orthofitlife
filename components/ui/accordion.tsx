"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils/cn";

export interface AccordionItemData {
  question: string;
  answer: string;
}

export function Accordion({ items, defaultOpen = -1 }: { items: AccordionItemData[]; defaultOpen?: number }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="divide-y divide-navy/10 border-y border-navy/10">
      {items.map((item, i) => (
        <AccordionRow
          key={item.question}
          item={item}
          open={open === i}
          onToggle={() => setOpen(open === i ? -1 : i)}
        />
      ))}
    </div>
  );
}

function AccordionRow({
  item,
  open,
  onToggle,
}: {
  item: AccordionItemData;
  open: boolean;
  onToggle: () => void;
}) {
  const id = useId();
  return (
    <div>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={`${id}-panel`}
        className="flex w-full items-center justify-between gap-4 py-5 text-left font-medium text-navy transition-colors hover:text-teal"
      >
        <span>{item.question}</span>
        <ChevronDown
          className={cn(
            "size-4 shrink-0 text-slate-soft transition-transform duration-300",
            open && "rotate-180 text-teal",
          )}
          aria-hidden
        />
      </button>
      <div
        id={`${id}-panel`}
        className={cn(
          "grid transition-all duration-400 ease-(--ease-out-expo)",
          open ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="overflow-hidden">
          <p className="pr-8 text-sm leading-relaxed text-slate-soft">{item.answer}</p>
        </div>
      </div>
    </div>
  );
}
