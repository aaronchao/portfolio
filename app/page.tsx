import { Nav } from "@/src/components/Nav";
import { ProjectTile } from "@/src/components/ProjectTile";
import { PROJECTS } from "@/src/data/projects";

export default function Home() {
  return (
    <main>
      <Nav />

      <header className="px-4 pb-10 pt-6 sm:px-8 sm:pb-16">
        <h1 className="font-display leading-[0.85] tracking-tight text-[15vw] sm:text-[9vw]">
          I BUILT
          <br />
          EVERYTHING
          <br />
          THAT DOESN&apos;T
          <br />
          EXIST
        </h1>
        <p className="mt-6 max-w-[52ch] text-[15px] leading-relaxed opacity-70 sm:text-base">
          Six products. Six gaps nothing else filled. Not concepts, not
          roadmap slides — live, shipped, solving problems that had no
          answer until they existed.
        </p>
      </header>

      {/*
        Deliberate bento grid, not auto-flowing masonry — six fixed items,
        hand-placed for precise control rather than approximated. Mobile-
        screenshot projects (PTVon, LyricsOn) get tall narrow slots that
        match a phone's own aspect ratio, so the device frame fills its
        tile instead of floating in empty space. Web-screenshot projects
        get wide slots. youtubify (no screenshot) gets the compact
        flat-colour slot, the role "Reel" plays on the reference site.
        Areas defined in globals.css (#projects-grid) since Tailwind has
        no arbitrary grid-template-areas utility.
      */}
      <section id="projects" className="projects-grid grid grid-cols-1 gap-px border-t border-black/10 bg-black/10 sm:grid-cols-3">
        {PROJECTS.map((p) => (
          <ProjectTile key={p.slug} project={p} />
        ))}
      </section>

      <footer className="flex items-center justify-between px-4 py-10 text-[12px] uppercase tracking-widest opacity-60 sm:px-8">
        <span>© {new Date().getFullYear()} Aaron Liu</span>
        <a href="mailto:aaronchao@gmail.com" data-cursor="link">
          aaronchao@gmail.com
        </a>
      </footer>
    </main>
  );
}
