import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { PageFrame, PageIntro } from "@/components/site/content-ui";
import { SiteLayout } from "@/components/site/site-layout";
import { company, insights } from "@/lib/company-content";

export const Route = createFileRoute("/blog")({
  head: () => ({ meta: [{ title: `Insights | ${company.name}` }] }),
  component: InsightsPage,
});

function InsightsPage() {
  return (
    <SiteLayout>
      <PageFrame>
        <PageIntro
          eyebrow="Insights"
          title="Ideas for more resilient communities and systems."
          description="Perspectives from our work in climate resilience, research, policy, and sustainable livelihoods."
        />
        <div className="mt-9 grid gap-5 lg:grid-cols-3">
          {insights.map((insight) => (
            <article
              key={insight.slug}
              className="flex min-h-80 flex-col border border-line bg-background p-6 sm:p-7"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs font-semibold uppercase tracking-wide text-brand-blue">
                  {insight.category}
                </span>
                <span className="font-mono text-xs text-ink-soft">{insight.readTime}</span>
              </div>
              <h2 className="type-display mt-7 text-2xl leading-snug text-brand-navy">
                {insight.title}
              </h2>
              <p className="mt-3 flex-1 text-sm leading-6 text-ink-soft">{insight.excerpt}</p>
              <Link
                to="/blog/$slug"
                params={{ slug: insight.slug }}
                className="mt-6 inline-flex items-center gap-2 border-t border-line pt-4 text-sm font-semibold text-brand-blue hover:text-brand-navy"
              >
                Read insight <ArrowRight aria-hidden="true" className="size-4" />
              </Link>
            </article>
          ))}
        </div>
      </PageFrame>
    </SiteLayout>
  );
}
