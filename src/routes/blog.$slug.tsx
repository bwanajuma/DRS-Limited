import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

import { PageFrame } from "@/components/site/content-ui";
import { SiteLayout } from "@/components/site/site-layout";
import { company, insights } from "@/lib/company-content";

export const Route = createFileRoute("/blog/$slug")({
  head: () => ({ meta: [{ title: `Insight | ${company.name}` }] }),
  component: InsightPage,
});

function InsightPage() {
  const { slug } = Route.useParams();
  const insight = insights.find((item) => item.slug === slug);

  if (!insight) {
    return (
      <SiteLayout>
        <PageFrame>
          <div className="py-10">
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-blue">
              Insight not found
            </p>
            <Link
              to="/blog"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue"
            >
              <ArrowLeft aria-hidden="true" className="size-4" />
              Back to insights
            </Link>
          </div>
        </PageFrame>
      </SiteLayout>
    );
  }

  return (
    <SiteLayout>
      <article className="mx-auto max-w-3xl px-5 pb-20 pt-12 sm:px-8 sm:pt-16 lg:px-12 lg:pt-20">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-sm font-semibold text-brand-blue hover:text-brand-navy"
        >
          <ArrowLeft aria-hidden="true" className="size-4" />
          All insights
        </Link>
        <p className="mt-10 text-xs font-semibold uppercase tracking-wide text-brand-blue">
          {insight.category} <span className="px-2 text-brand-orange">/</span> {insight.readTime}
        </p>
        <h1 className="type-display mt-4 text-4xl leading-tight text-brand-navy sm:text-5xl">
          {insight.title}
        </h1>
        <p className="mt-6 border-b border-line pb-8 text-lg leading-8 text-ink-soft">
          {insight.excerpt}
        </p>
        <div className="space-y-6 pt-8 text-base leading-8 text-ink-soft">
          {insight.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </article>
    </SiteLayout>
  );
}
