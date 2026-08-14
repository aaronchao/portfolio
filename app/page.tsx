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
          Six products, six gaps nothing else filled — from a movie discovery
          app that actually weighs Douban, to a transit app whose API key
          never ships inside it. Below is what each one solves, and how.
        </p>
      </header>

      <section id="projects" className="grid grid-cols-1 border-t border-black/10 sm:grid-cols-2">
        {PROJECTS.map((p, i) => (
          <ProjectTile key={p.slug} project={p} large={i === 0} />
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
