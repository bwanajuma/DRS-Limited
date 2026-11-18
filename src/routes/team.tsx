import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import { ContactStrip, Eyebrow, PageFrame, PageIntro } from "@/components/site/content-ui";
import { SiteLayout } from "@/components/site/site-layout";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { company, team } from "@/lib/company-content";

const teamPhotos = import.meta.glob<string>("../assets/team/*.{avif,gif,jpg,jpeg,png,webp}", {
  eager: true,
  import: "default",
});
const teamPhotosBySlug = new Map(
  Object.entries(teamPhotos).map(([path, url]) => [
    path
      .split("/")
      .pop()
      ?.replace(/\.[^.]+$/, "")
      .toLowerCase() ?? "",
    url,
  ]),
);

function getTeamPhotoSlug(name: string) {
  const names = name
    .replace(/^Dr\.\s*/i, "")
    .trim()
    .split(/\s+/)
    .filter(Boolean);
  const firstName = names[0];
  const lastName = names.at(-1);

  return firstName && lastName ? `${firstName}-${lastName}`.toLowerCase() : "";
}

export const Route = createFileRoute("/team")({
  head: () => ({ meta: [{ title: `Our Team | ${company.name}` }] }),
  component: TeamPage,
});

function TeamPage() {
  const leadership = team.filter(
    (member) => member.role === "Chief Executive Officer" || member.role.startsWith("Director,"),
  );
  const consultants = team.filter(
    (member) => member.role !== "Chief Executive Officer" && !member.role.startsWith("Director,"),
  );

  return (
    <SiteLayout>
      <PageFrame>
        <PageIntro
          eyebrow="Our team"
          title="Experience across disciplines. Commitment to shared progress."
          description="Our specialists bring complementary skills in development, climate, research, finance, policy, and delivery."
        />
        <section className="mt-12" aria-labelledby="leadership-heading">
          <div className="mb-6">
            <Eyebrow>Leadership</Eyebrow>
            <h2
              id="leadership-heading"
              className="type-display mt-3 text-3xl text-brand-navy sm:text-4xl"
            >
              Guiding our work
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-ink-soft">
              Meet the CEO and directors leading DRS’s strategy, programmes, and partnerships.
            </p>
          </div>
          <TeamProfileGrid members={leadership} featured />
        </section>
        <section className="mt-16 border-t border-line pt-10" aria-labelledby="consultants-heading">
          <div className="mb-6">
            <Eyebrow>Our specialists</Eyebrow>
            <h2
              id="consultants-heading"
              className="type-display mt-3 text-3xl text-brand-navy sm:text-4xl"
            >
              Consultant team
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-ink-soft">
              Experienced practitioners bringing specialist knowledge to each engagement.
            </p>
          </div>
          <TeamProfileGrid members={consultants} />
        </section>
      </PageFrame>
      <ContactStrip />
    </SiteLayout>
  );
}

export function TeamProfileGrid({
  members = team,
  featured = false,
}: {
  members?: readonly (typeof team)[number][];
  featured?: boolean;
}) {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {members.map((member) => {
        const photo = teamPhotosBySlug.get(getTeamPhotoSlug(member.name));
        const isCeo = member.role === "Chief Executive Officer";

        return (
          <Dialog key={member.initials}>
            <DialogTrigger asChild>
              <button
                type="button"
                className={`group w-full border border-line bg-background p-6 text-left transition duration-200 hover:-translate-y-1 hover:border-brand-blue/40 hover:shadow-lg focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2 sm:p-8 ${
                  featured
                    ? `border-t-2 border-t-brand-orange ${isCeo ? "bg-paper-soft md:col-span-2" : ""}`
                    : ""
                }`}
              >
                <span className="flex items-start gap-4">
                  <span
                    className={`grid shrink-0 place-items-center overflow-hidden rounded-full bg-paper-soft font-mono text-sm text-brand-blue transition-colors group-hover:bg-brand-blue group-hover:text-on-brand ${
                      featured ? (isCeo ? "size-24" : "size-20") : "size-16"
                    }`}
                  >
                    {photo ? (
                      <img src={photo} alt={member.name} className="size-full object-cover" />
                    ) : (
                      member.initials
                    )}
                  </span>
                  <span className="block">
                    <span
                      role="heading"
                      aria-level={2}
                      className="block text-lg font-semibold text-brand-navy"
                    >
                      {member.name}
                    </span>
                    <span className="mt-1 block text-sm font-medium text-brand-blue">
                      {member.role}
                    </span>
                  </span>
                </span>
                <span className="mt-5 block text-xs font-semibold uppercase tracking-wide text-brand-green-dark">
                  {member.focus}
                </span>
                <span className="mt-3 block text-sm leading-6 text-ink-soft">{member.summary}</span>
                <span className="mt-5 block border-t border-line pt-4 text-sm font-semibold text-brand-blue">
                  View full profile{" "}
                  <ArrowUpRight aria-hidden="true" className="ml-1 inline size-4" />
                </span>
              </button>
            </DialogTrigger>
            <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-2xl">
              <DialogHeader className="pr-8">
                <span className="grid size-20 place-items-center overflow-hidden rounded-full bg-paper-soft font-mono text-sm text-brand-blue">
                  {photo ? (
                    <img src={photo} alt={member.name} className="size-full object-cover" />
                  ) : (
                    member.initials
                  )}
                </span>
                <DialogTitle className="type-display pt-2 text-3xl text-brand-navy">
                  {member.name}
                </DialogTitle>
                <DialogDescription className="text-brand-blue">{member.role}</DialogDescription>
              </DialogHeader>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-green-dark">
                  {member.focus}
                </p>
                <p className="mt-4 leading-7 text-ink-soft">{member.summary}</p>
                <p className="mt-4 leading-7 text-ink-soft">{member.experience}</p>
              </div>
            </DialogContent>
          </Dialog>
        );
      })}
    </div>
  );
}
