import Link from "next/link";
import { footerNav } from "@/lib/constants/navigation";
import { socialConfig, medicalDisclaimer } from "@/lib/constants/site";
import { Logo } from "@/components/layout/logo";
import { Instagram, Facebook, Youtube, Music2 } from "lucide-react";

export function Footer() {
  const socials = [
    { href: socialConfig.instagram, label: "Instagram", Icon: Instagram },
    { href: socialConfig.facebook, label: "Facebook", Icon: Facebook },
    { href: socialConfig.youtube, label: "YouTube", Icon: Youtube },
    { href: socialConfig.tiktok, label: "TikTok", Icon: Music2 },
  ].filter((s) => s.href);

  return (
    <footer className="border-t border-navy/10 bg-navy text-white/80">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div className="max-w-sm">
            <Logo tone="light" />
            <p className="mt-5 text-sm leading-relaxed text-white/60">
              Everyday Comfort. Better Support. Better Living.
              <br />
              Orthopedic and ergonomic products for Pakistan, with research-informed guidance for everyday life.
            </p>
            {socials.length > 0 && (
              <div className="mt-6 flex gap-3">
                {socials.map(({ href, label, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="flex size-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-sage hover:text-sage"
                  >
                    <Icon className="size-4" aria-hidden />
                  </a>
                ))}
              </div>
            )}
          </div>

          <FooterColumn title="Shop" links={footerNav.shop} />
          <FooterColumn title="Learn" links={footerNav.learn} />
          <FooterColumn title="Company" links={footerNav.company} />
          <FooterColumn title="Policies" links={footerNav.policies} />
        </div>

        <div className="mt-14 border-t border-white/10 pt-8">
          <p className="text-xs leading-relaxed text-white/40">
            <strong className="font-semibold text-white/60">Health note:</strong> {medicalDisclaimer}
          </p>
          <div className="mt-6 flex flex-col items-start justify-between gap-4 text-xs text-white/40 sm:flex-row sm:items-center">
            <p>© {new Date().getFullYear()} OrthofitLife · orthofitlife.com · Made in Pakistan</p>
            <p>
              This site is a prototype; product ratings and reviews are{" "}
              <Link href="/about" className="underline decoration-white/30 underline-offset-2 transition-colors hover:text-white/70">
                demonstration content
              </Link>{" "}
              .
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <nav aria-label={title}>
      <h3 className="text-xs font-semibold tracking-[0.18em] text-sage uppercase">{title}</h3>
      <ul className="mt-5 space-y-3">
        {links.map((link) => (
          <li key={link.label + link.href}>
            <Link href={link.href} className="text-sm text-white/65 transition-colors hover:text-sage">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
