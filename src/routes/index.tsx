import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  ArrowLeft,
  ArrowUpRight,
  Award,
  BarChart3,
  Handshake,
  Lightbulb,
  Pause,
  Play,
  Briefcase,
  Leaf,
  Network,
  RefreshCw,
  Route as RouteIcon,
  ShieldCheck,
  Sprout,
  Sun,
  type LucideIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { ContactStrip, Eyebrow, SectionHeading } from "@/components/site/content-ui";
import { SiteLayout } from "@/components/site/site-layout";
import { company, deliveryStages, projects, services, team, values } from "@/lib/company-content";
import localImage from "@/assets/hero/local.jpeg";
import vegetablesImage from "@/assets/hero/vegg.jpeg";
import solutionsImage from "@/assets/hero/solutions.jpeg";
import samburuImage from "@/assets/hero/samburu-climate-resilience.jpg";

const serviceIcons = {
  sun: Sun,
  leaf: Leaf,
  network: Network,
  briefcase: Briefcase,
  route: RouteIcon,
  sprout: Sprout,
  chart: BarChart3,
} satisfies Record<(typeof services)[number]["icon"], LucideIcon>;

const valueIcons = {
  Integrity: ShieldCheck,
  Innovation: Lightbulb,
  Sustainability: Leaf,
  Resilience: RefreshCw,
  Partnership: Handshake,
  Excellence: Award,
} satisfies Record<(typeof values)[number]["name"], LucideIcon>;

const heroSlides = [
  {
    image: localImage,
    alt: "Community members and facilitators discussing local priorities around a map",
    eyebrow: "Community-led development",
    title: "Grounded in local context.",
    link: "/about",
    linkLabel: "How we work",
    imagePosition: "center",
  },
  {
    image: samburuImage,
    alt: "Dryland farms and acacia trees beneath the hills of Samburu",
    eyebrow: "Climate resilience · Northern Kenya",
    title: "Building resilience for a changing climate.",
    link: "/projects",
    linkLabel: "Explore our projects",
    imagePosition: "center 32%",
  },
  {
    image: vegetablesImage,
    alt: "A farmer tending a thriving vegetable garden in a dryland landscape",
    eyebrow: "Agribusiness · Climate-smart agriculture",
    title: "Growing sustainable livelihoods.",
    link: "/projects",
    linkLabel: "Explore our projects",
    imagePosition: "center 28%",
  },
  {
    image: solutionsImage,
    alt: "Field researchers speaking with community members in a rural village",
    eyebrow: "Research · Policy · Community insight",
    title: "Evidence shaped with the people it serves.",
    link: "/blog",
    linkLabel: "Read our insights",
    imagePosition: "center",
  },
] as const;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${company.name} | ${company.tagline}` },
      {
        name: "description",
        content:
          "DRS works with communities, businesses, and institutions to build resilient systems and sustainable development across Kenya and East Africa.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      <main id="main-content">
        <section className="mx-auto grid max-w-7xl gap-10 px-5 pb-16 pt-12 sm:px-8 sm:pb-20 sm:pt-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-14 lg:px-12 lg:pb-24 lg:pt-20">
          <div className="max-w-2xl">
            <Eyebrow>{company.region}</Eyebrow>
            <h1 className="type-display mt-6 text-5xl leading-[1.05] text-brand-navy sm:text-6xl lg:text-7xl">
              Resilience in our toil.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-ink-soft sm:text-lg sm:leading-8">
              We work alongside communities, businesses, and institutions to turn complex
              development challenges into practical, lasting progress.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="gap-2">
                <a href={`mailto:${company.email}`}>
                  Start a conversation <ArrowUpRight aria-hidden="true" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="gap-2 border-brand-blue/25 text-brand-blue"
              >
                <a href="#our-work">
                  Explore our work <ArrowRight aria-hidden="true" />
                </a>
              </Button>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 border-t border-line pt-6">
              {[
                { value: services.length, label: "Areas of expertise" },
                { value: projects.length, label: "Selected engagements" },
                { value: team.length, label: "Specialist team members" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="type-display text-2xl text-brand-navy">{item.value}</p>
                  <p className="mt-1 text-xs text-ink-soft">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <HeroShowcase />
        </section>

        <section className="bg-paper-soft">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 sm:px-8 sm:py-18 md:grid-cols-[0.7fr_1.3fr] md:items-start lg:px-12 lg:py-24">
            <div>
              <Eyebrow>Who we are</Eyebrow>
              <h2 className="type-display mt-4 text-3xl leading-tight text-brand-navy sm:text-4xl">
                Local understanding. Lasting solutions.
              </h2>
            </div>
            <div className="max-w-3xl">
              <p className="text-lg leading-8 text-brand-navy">
                {company.name} is a Kenyan advisory and development firm helping people and
                institutions respond to change with confidence.
              </p>
              <p className="mt-4 leading-7 text-ink-soft">
                Our multidisciplinary team brings together experience in climate resilience,
                research, enterprise, policy, and project delivery. We pair rigorous evidence with
                practical knowledge of the places and systems where change happens.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {values.map((value) => {
                  const Icon = valueIcons[value.name];

                  return (
                    <div
                      key={value.name}
                      className="border border-line bg-background/50 p-4 transition-colors hover:border-brand-blue/50"
                    >
                      <div className="flex items-center gap-3">
                        <span className="grid size-9 shrink-0 place-items-center rounded-full bg-paper-soft text-brand-blue">
                          <Icon aria-hidden="true" className="size-4" />
                        </span>
                        <h3 className="font-semibold text-brand-navy">{value.name}</h3>
                      </div>
                      <p className="mt-1 text-sm leading-6 text-ink-soft">{value.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section
          id="services"
          className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
        >
          <SectionHeading
            eyebrow="What we do"
            title="Expertise built around real-world challenges."
          />
          <div className="grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = serviceIcons[service.icon];
              return (
                <article key={service.number} className="bg-background p-6 sm:p-7">
                  <div className="flex items-start justify-between">
                    <span className="grid size-11 place-items-center bg-paper-soft text-brand-blue">
                      <Icon aria-hidden="true" className="size-5" />
                    </span>
                    <span className="font-mono text-xs text-ink-soft">{service.number}</span>
                  </div>
                  <h3 className="mt-6 text-lg font-semibold text-brand-navy">{service.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-ink-soft">{service.description}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section id="our-work" className="bg-paper-soft">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
            <SectionHeading
              eyebrow="Selected engagements"
              title="Evidence and delivery, shaped for the people they serve."
            />
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {projects.slice(0, 3).map((project) => (
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
                  <h3 className="type-display mt-7 text-2xl leading-snug text-brand-navy">
                    {project.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-6 text-ink-soft">
                    {project.description}
                  </p>
                  <p className="mt-5 border-t border-line pt-4 text-xs font-medium text-brand-green-dark">
                    {project.result}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <Eyebrow>How we work</Eyebrow>
              <h2 className="type-display mt-4 text-3xl leading-tight text-brand-navy sm:text-4xl">
                From understanding to measurable progress.
              </h2>
              <p className="mt-4 max-w-md leading-7 text-ink-soft">
                We bring people, evidence, and implementation together at every stage of a project.
              </p>
            </div>
            <ol className="divide-y divide-line border-y border-line">
              {deliveryStages.map((stage, index) => (
                <li key={stage.name} className="grid gap-2 py-5 sm:grid-cols-[3rem_1fr] sm:gap-4">
                  <span className="font-mono text-sm text-brand-orange">0{index + 1}</span>
                  <div>
                    <h3 className="font-semibold text-brand-navy">{stage.name}</h3>
                    <p className="mt-1 text-sm leading-6 text-ink-soft">{stage.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <ContactStrip
          heading="Let’s make the next step a practical one."
          text={`Tell us what you’re working on. The DRS team is based in ${company.region} and ready to listen.`}
        />
      </main>
    </SiteLayout>
  );
}

function HeroShowcase() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    if (
      paused ||
      hovered ||
      focused ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 6000);

    return () => window.clearInterval(intervalId);
  }, [focused, hovered, paused]);

  const showPrevious = () => {
    setActiveSlide((current) => (current - 1 + heroSlides.length) % heroSlides.length);
  };
  const showNext = () => {
    setActiveSlide((current) => (current + 1) % heroSlides.length);
  };

  return (
    <div
      className="relative min-h-[22rem] overflow-hidden bg-paper-soft sm:min-h-[30rem]"
      role="region"
      aria-label="Featured areas of DRS work"
      aria-roledescription="carousel"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setFocused(false);
        }
      }}
    >
      {heroSlides.map((slide, index) => {
        const isActive = index === activeSlide;

        return (
          <div
            key={slide.title}
            className={`absolute inset-0 transition-opacity duration-700 ${
              isActive ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
            aria-hidden={!isActive}
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${heroSlides.length}: ${slide.title}`}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className="absolute inset-0 size-full object-cover"
              style={{ objectPosition: slide.imagePosition }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/5" />
            <div className="absolute inset-x-0 bottom-0 p-6 pb-24 text-white sm:p-9 sm:pb-24">
              <p className="text-xs font-semibold uppercase tracking-wide text-white/80">
                {slide.eyebrow}
              </p>
              <h2 className="type-display mt-2 max-w-md text-3xl leading-tight sm:text-4xl">
                {slide.title}
              </h2>
              <Link
                to={slide.link}
                tabIndex={isActive ? 0 : -1}
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white underline decoration-brand-orange underline-offset-4 hover:text-white/80"
              >
                {slide.linkLabel} <ArrowRight aria-hidden="true" className="size-4" />
              </Link>
            </div>
          </div>
        );
      })}

      <div className="absolute inset-x-4 bottom-4 flex items-center justify-between sm:inset-x-6 sm:bottom-6">
        <div className="flex items-center gap-2" aria-label="Choose a featured slide">
          {heroSlides.map((slide, index) => (
            <button
              key={slide.title}
              type="button"
              aria-label={`Show slide ${index + 1}: ${slide.title}`}
              aria-pressed={index === activeSlide}
              onClick={() => setActiveSlide(index)}
              className={`h-1.5 rounded-full transition-all ${
                index === activeSlide ? "w-8 bg-brand-orange" : "w-4 bg-white/70 hover:bg-white"
              }`}
            />
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label={paused ? "Resume slideshow" : "Pause slideshow"}
            onClick={() => setPaused((value) => !value)}
            className="grid size-9 place-items-center rounded-full border border-white/40 bg-black/30 text-white transition-colors hover:bg-black/50"
          >
            {paused ? (
              <Play aria-hidden="true" className="size-4" />
            ) : (
              <Pause aria-hidden="true" className="size-4" />
            )}
          </button>
          <button
            type="button"
            aria-label="Previous slide"
            onClick={showPrevious}
            className="grid size-9 place-items-center rounded-full border border-white/40 bg-black/30 text-white transition-colors hover:bg-black/50"
          >
            <ArrowLeft aria-hidden="true" className="size-4" />
          </button>
          <button
            type="button"
            aria-label="Next slide"
            onClick={showNext}
            className="grid size-9 place-items-center rounded-full border border-white/40 bg-black/30 text-white transition-colors hover:bg-black/50"
          >
            <ArrowRight aria-hidden="true" className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
