import { createFileRoute } from "@tanstack/react-router";

import { ContactStrip, PageFrame, PageIntro } from "@/components/site/content-ui";
import { SiteLayout } from "@/components/site/site-layout";
import { company } from "@/lib/company-content";

export const Route = createFileRoute("/testimonials")({
  head: () => ({ meta: [{ title: `Testimonials | ${company.name}` }] }),
  component: TestimonialsPage,
});

function TestimonialsPage() {
  return (
    <SiteLayout>
      <PageFrame>
        <PageIntro
          eyebrow="Testimonials"
          title="Partnership is at the heart of lasting work."
          description="We value the trust of the communities, organisations, and institutions we work alongside."
        />
        <section className="mt-10 border border-line bg-paper-soft p-7 sm:p-10">
          <p className="type-display max-w-3xl text-2xl leading-relaxed text-brand-navy sm:text-3xl">
            Client perspectives will be shared here once approved for publication.
          </p>
          <p className="mt-5 text-sm text-ink-soft">
            We only publish testimonials with permission.
          </p>
        </section>
      </PageFrame>
      <ContactStrip />
    </SiteLayout>
  );
}
