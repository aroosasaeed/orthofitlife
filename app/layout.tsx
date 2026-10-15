import type { Metadata, Viewport } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import { Providers } from "@/app/providers";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ScrollIndicator } from "@/components/layout/scroll-indicator";
import { siteConfig, SEO_KEYWORDS } from "@/lib/constants/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — Orthopedic & Ergonomic Comfort, Pakistan`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: SEO_KEYWORDS,
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    locale: "en_PK",
    url: siteConfig.url,
    title: `${siteConfig.name} — Everyday Comfort. Better Support. Better Living.`,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — Orthopedic & Ergonomic Comfort`,
    description: siteConfig.description,
  },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#17212B",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-PK" className={`${inter.variable} ${fraunces.variable}`}>
      <body className="flex min-h-screen flex-col antialiased">
        <Providers>
          <Header />
          <main id="main" className="flex-1 pt-16 md:pt-20">
            {children}
          </main>
          <Footer />
          <ScrollIndicator />
        </Providers>
      </body>
    </html>
  );
}
