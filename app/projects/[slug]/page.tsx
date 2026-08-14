import Link from "next/link";
import { notFound } from "next/navigation";
import { Nav } from "@/src/components/Nav";
import { PROJECTS, projectBySlug } from "@/src/data/projects";
import { BrowserFrame } from "@/src/components/BrowserFrame";
import { PhoneFrame } from "@/src/components/PhoneFrame";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projectBySlug(slug);
  if (!project) notFound();

  const sections = [
    { id: "gap", label: "The gap" },
    { id: "built", label: "What got built" },
    { id: "highlights", label: "Highlights" },
  ];

  return (
    <main>
      <Nav />
      <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr]">
        {/* Fixed sidebar, after the reference site's project-detail layout. */}
        <aside className="border-t border-black/10 px-4 py-8 sm:px-8 lg:sticky lg:top-0 lg:h-screen lg:overflow-y-auto lg:border-r">
          <Link href="/" data-cursor="link" className="text-[12px] uppercase tracking-widest opacity-60">
            ← All projects
          </Link>
          <h1 className="font-display mt-4 text-5xl leading-[0.9] tracking-tight sm:text-6xl">
            {project.name}
          </h1>
          <p className="mt-4 text-[15px] leading-relaxed opacity-70">{project.tagline}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noreferrer"
                data-cursor="link"
                className="rounded-full bg-[#0b0b0e] px-4 py-2 text-[12px] font-medium uppercase tracking-widest text-[#f0efe9]"
              >
                Live site ↗
              </a>
            )}
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noreferrer"
                data-cursor="link"
                className="rounded-full border border-black/20 px-4 py-2 text-[12px] font-medium uppercase tracking-widest"
              >
                View code ↗
              </a>
            )}
            {!project.links.live && !project.links.github && (
              <p className="text-[12px] uppercase tracking-widest opacity-50">Private repo</p>
            )}
          </div>

          <nav className="mt-16 flex flex-col gap-2">
            {sections.map((s) => (
              <a key={s.id} href={`#${s.id}`} data-cursor="link" className="text-[13px] uppercase tracking-widest opacity-50 hover:opacity-100">
                # {s.label}
              </a>
            ))}
          </nav>
        </aside>

        {/* Content column. */}
        <div className="border-t border-black/10 px-4 py-8 sm:px-8 lg:py-16">
          {project.screenshot && (
            <div
              className={`mb-16 flex ${
                project.screenshotType === "mobile" ? "h-[560px] max-w-xs" : "aspect-[16/10] max-w-3xl"
              }`}
            >
              {project.screenshotType === "mobile" ? (
                <PhoneFrame src={project.screenshot} alt={`${project.name} screenshot`} priority />
              ) : (
                <BrowserFrame src={project.screenshot} alt={`${project.name} screenshot`} priority />
              )}
            </div>
          )}

          <section id="gap" className="max-w-[65ch] scroll-mt-8">
            <p className="text-[12px] uppercase tracking-widest opacity-50"># The gap</p>
            <p className="mt-3 text-xl leading-relaxed sm:text-2xl">{project.gap}</p>
          </section>

          <section id="built" className="mt-16 max-w-[65ch] scroll-mt-8">
            <p className="text-[12px] uppercase tracking-widest opacity-50"># What got built</p>
            <p className="mt-3 text-[15px] leading-relaxed opacity-80 sm:text-base">{project.built}</p>
          </section>

          <section id="highlights" className="mt-16 max-w-[65ch] scroll-mt-8">
            <p className="text-[12px] uppercase tracking-widest opacity-50"># Highlights</p>
            <div className="mt-3 flex flex-col gap-6">
              {project.highlights.map((h) => (
                <div key={h.label}>
                  <p className="text-[15px] font-semibold">{h.label}</p>
                  <p className="mt-1 text-[14px] leading-relaxed opacity-70">{h.body}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="mt-20 flex flex-wrap gap-3 border-t border-black/10 pt-8">
            {PROJECTS.filter((p) => p.slug !== project.slug)
              .slice(0, 3)
              .map((p) => (
                <Link
                  key={p.slug}
                  href={`/projects/${p.slug}`}
                  data-cursor="link"
                  className="rounded-full border border-black/20 px-4 py-2 text-[12px] uppercase tracking-widest"
                >
                  {p.name} →
                </Link>
              ))}
          </div>
        </div>
      </div>
    </main>
  );
}
