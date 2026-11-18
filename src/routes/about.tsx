import { createFileRoute } from "@tanstack/react-router";

import { ContactStrip, PageFrame, PageIntro } from "@/components/site/content-ui";
import { SiteLayout } from "@/components/site/site-layout";
import { company, deliveryStages, values } from "@/lib/company-content";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [{ title: `About | ${company.name}` }] }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <PageFrame>
        <PageIntro
          eyebrow="About DRS"
          title="Local understanding. Lasting solutions."
          description={`${company.name} is a Kenyan advisory and development firm helping people and institutions respond to change with confidence.`}
        />
        <section className="grid gap-8 py-12 md:grid-cols-[0.7fr_1.3fr] md:py-16">
          <h2 className="type-display text-3xl leading-tight text-brand-navy">
            Resilience is built together.
          </h2>
          <div className="max-w-3xl space-y-4 leading-7 text-ink-soft">
            <p>
              We bring multidisciplinary expertise and practical experience to the challenges
              communities, businesses, and institutions face. Our work is grounded in local context
              and shaped by the people closest to each challenge.
            </p>
            <p>
              From research and planning through implementation and learning, we help turn evidence
              into clear next steps and sustainable results.
            </p>
          </div>
        </section>
        <section className="border-y border-line py-10 md:py-14">
          <h2 className="type-display text-3xl text-brand-navy">What guides us</h2>
          <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <article key={value.name} className="border-t border-line pt-4">
                <h3 className="font-semibold text-brand-navy">{value.name}</h3>
                <p className="mt-2 text-sm leading-6 text-ink-soft">{value.description}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="py-12 md:py-16">
          <h2 className="type-display text-3xl text-brand-navy">How we deliver</h2>
          <ol className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {deliveryStages.map((stage, index) => (
              <li key={stage.name} className="border-t border-line pt-4">
                <span className="font-mono text-xs text-brand-orange">0{index + 1}</span>
                <h3 className="mt-2 font-semibold text-brand-navy">{stage.name}</h3>
                <p className="mt-2 text-sm leading-6 text-ink-soft">{stage.description}</p>
              </li>
            ))}
          </ol>
        </section>
      </PageFrame>
      <ContactStrip />
    </SiteLayout>
  );
}
