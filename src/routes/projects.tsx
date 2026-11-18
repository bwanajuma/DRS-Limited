import { createFileRoute } from "@tanstack/react-router";

import { ContactStrip, PageFrame, PageIntro } from "@/components/site/content-ui";
import { SiteLayout } from "@/components/site/site-layout";
import { company, projects } from "@/lib/company-content";

export const Route = createFileRoute("/projects")({
  head: () => ({ meta: [{ title: `Projects | ${company.name}` }] }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <SiteLayout>
      <PageFrame>
        <PageIntro
          eyebrow="Selected engagements"
          title="Evidence and delivery, shaped for the people they serve."
          description="A selection of research, evaluation, and advisory work across Northern Kenya and beyond."
        />
        <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.short}
              className="flex min-h-72 flex-col border border-line bg-background p-6 sm:p-7"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="text-xs font-semibold uppercase tracking-wide text-brand-blue">
                  {project.category}
                </span>
                <span className="font-mono text-xs text-ink-soft">{project.short}</span>
              </div>
              <p className="mt-5 text-xs text-ink-soft">{project.client}</p>
              <h2 className="type-display mt-2 text-2xl leading-snug text-brand-navy">
                {project.title}
              </h2>
              <p className="mt-3 flex-1 text-sm leading-6 text-ink-soft">{project.description}</p>
              <p className="mt-5 border-t border-line pt-4 text-xs font-medium text-brand-green-dark">
                {project.result}
              </p>
            </article>
          ))}
        </div>
      </PageFrame>
      <ContactStrip />
    </SiteLayout>
  );
}
