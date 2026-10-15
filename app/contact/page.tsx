import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { ContactForm } from "@/components/forms/contact-form";
import { Reveal } from "@/components/animations/reveal";
import { Accordion } from "@/components/ui/accordion";
import { MessageCircle, Mail, Phone, MapPin } from "lucide-react";
import { contactConfig } from "@/lib/constants/site";

export const metadata: Metadata = {
  title: "Contact OrthofitLife",
  description:
    "Questions about sizing, products or an order? Contact OrthofitLife — with WhatsApp support for customers across Pakistan.",
  alternates: { canonical: "/contact" },
};

const FAQS = [
  {
    question: "Do you deliver across Pakistan?",
    answer:
      "Nationwide delivery is planned for launch — Karachi, Lahore, Islamabad and every city between. The exact service areas will be confirmed here when live operations begin.",
  },
  {
    question: "How do I know which product suits me?",
    answer:
      "Use the Find Your Support tool on the homepage — three short questions give product suggestions (guidance, not diagnosis). The guides and case studies also explain how people choose between them.",
  },
  {
    question: "Are your ratings and reviews real?",
    answer:
      "Not yet — this is a prototype, and all ratings and reviews are clearly labelled demonstration content. Reviews will be marked as verified once real feedback is collected.",
  },
  {
    question: "Do your products treat medical conditions?",
    answer:
      "No. OrthofitLife products are comfort and positioning aids, described by what they're designed to do — never by what they cure. For persistent pain or diagnosed conditions, consult a healthcare professional.",
  },
  {
    question: "What is your return policy?",
    answer:
      "A 7-day return window on unused, originally-packaged items is planned for launch. Final terms will be published on the Policies pages before checkout goes live.",
  },
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
      <header className="mt-4 max-w-2xl">
        <h1 className="font-display text-3xl font-medium tracking-tight text-navy md:text-4xl">
          Talk to us
        </h1>
        <p className="mt-3 leading-relaxed text-slate-soft">
          Product questions, sizing help, order support — or just to tell us what your Tuesday
          looks like. Contact details below are placeholders until launch; the form is ready.
        </p>
      </header>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1.2fr_1fr]">
        {/* Form */}
        <Reveal>
          <div className="rounded-2xl border border-navy/8 bg-white p-6 md:p-8">
            <h2 className="font-display text-xl font-medium text-navy">Send a message</h2>
            <p className="mt-1 text-sm text-slate-soft">We reply within one working day (planned).</p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </Reveal>

        {/* Contact channels */}
        <Reveal delay={0.08}>
          <div className="space-y-4">
            {contactConfig.whatsapp && (
              <a
                href={`https://wa.me/${contactConfig.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-sage-600/25 bg-sage-100 p-5 transition-all hover:-translate-y-0.5 hover:shadow-soft"
              >
                <span className="flex size-11 items-center justify-center rounded-full bg-sage text-navy">
                  <MessageCircle className="size-5" aria-hidden />
                </span>
                <span>
                  <span className="block font-display text-lg font-medium text-navy">WhatsApp us</span>
                  <span className="text-sm text-slate-soft">Fastest replies during working hours</span>
                </span>
              </a>
            )}
            <ContactChannel
              Icon={Mail}
              title="Email"
              body={contactConfig.email || "To be announced at launch — see env placeholders in .env.local"}
            />
            <ContactChannel
              Icon={Phone}
              title="Phone"
              body={contactConfig.phone || "To be announced at launch"}
            />
            <ContactChannel
              Icon={MapPin}
              title="Serving"
              body="Nationwide delivery across Pakistan (planned for launch)"
            />

            <div className="rounded-2xl border border-navy/8 bg-beige/50 p-5">
              <p className="text-sm leading-relaxed text-navy/80">
                Not sure which product fits your day? The <Link href="/#find-your-support" className="font-medium text-teal hover:underline">Find Your Support tool</Link>{" "}
                suggests a starting point in three questions.
              </p>
            </div>
          </div>
        </Reveal>
      </div>

      {/* FAQs */}
      <section id="faq" className="mt-14 scroll-mt-24" aria-labelledby="contact-faq-heading">
        <h2 id="contact-faq-heading" className="font-display text-2xl font-medium text-navy">
          Frequently asked questions
        </h2>
        <div className="mt-4 max-w-3xl">
          <Accordion items={FAQS} />
        </div>
      </section>
    </div>
  );
}

function ContactChannel({
  Icon,
  title,
  body,
}: {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  body: string;
}) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-navy/8 bg-white p-5">
      <span className="flex size-11 items-center justify-center rounded-full bg-beige text-teal">
        <Icon className="size-5" aria-hidden />
      </span>
      <span>
        <span className="block font-medium text-navy">{title}</span>
        <span className="text-sm text-slate-soft">{body}</span>
      </span>
    </div>
  );
}
