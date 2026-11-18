import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";

import { PageFrame, PageIntro } from "@/components/site/content-ui";
import { SiteLayout } from "@/components/site/site-layout";
import { company } from "@/lib/company-content";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: `Contact | ${company.name}` }] }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteLayout>
      <PageFrame>
        <PageIntro
          eyebrow="Contact"
          title="Let’s make the next step a practical one."
          description="Tell us what you’re working on. Our team will be glad to hear about it."
        />
        <div className="mt-9 grid gap-5 md:grid-cols-3">
          <a
            href={`mailto:${company.email}`}
            className="border border-line p-6 transition-colors hover:bg-paper-soft"
          >
            <Mail aria-hidden="true" className="size-5 text-brand-blue" />
            <h2 className="mt-5 font-semibold text-brand-navy">Email</h2>
            <p className="mt-2 break-all text-sm text-ink-soft">{company.email}</p>
          </a>
          <a
            href={`tel:${company.telephone}`}
            className="border border-line p-6 transition-colors hover:bg-paper-soft"
          >
            <Phone aria-hidden="true" className="size-5 text-brand-blue" />
            <h2 className="mt-5 font-semibold text-brand-navy">Call us</h2>
            <p className="mt-2 text-sm text-ink-soft">{company.displayTelephone}</p>
          </a>
          <div className="border border-line p-6">
            <MapPin aria-hidden="true" className="size-5 text-brand-blue" />
            <h2 className="mt-5 font-semibold text-brand-navy">Visit us</h2>
            <p className="mt-2 text-sm leading-6 text-ink-soft">{company.address}</p>
          </div>
        </div>
      </PageFrame>
    </SiteLayout>
  );
}
