import type { Metadata } from "next";
import { SearchClient } from "@/components/layout/search-client";

export const metadata: Metadata = {
  title: "Search Products",
  description: "Search OrthofitLife products by name, category, lifestyle and everyday use case.",
  alternates: { canonical: "/search" },
  robots: { index: false },
};

export default function SearchPage() {
  return <SearchClient />;
}
