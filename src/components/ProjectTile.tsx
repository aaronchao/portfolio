"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/src/data/projects";
import { BrowserFrame } from "./BrowserFrame";
import { PhoneFrame } from "./PhoneFrame";

/**
 * Sized by the parent bento grid (`gridArea: project.slug`, see
 * globals.css `.projects-grid`), not a `large` boolean — tile shape now
 * follows content type: tall for phone screenshots, wide for web ones.
 *
 * Hover behaviour matches buenasuerte.cl (verified live): a photo fades
 * OUT on hover to reveal a flat-colour card underneath, never a zoom.
 * Tiles with no photo (youtubify) are flat-colour always.
 */
export function ProjectTile({ project }: { project: Project }) {
  const isHero = project.slug === "fliqpop";
  const isTall = project.screenshotType === "mobile";

  return (
    <Link
      href={`/projects/${project.slug}`}
      data-cursor="link"
      className="group relative flex min-h-[220px] flex-col justify-between overflow-hidden p-6 sm:p-8"
      style={{ backgroundColor: project.color, color: project.textColor, gridArea: project.slug }}
    >
      {project.screenshot && (
        <div
          className={`absolute inset-0 flex items-center justify-center opacity-100 transition-opacity duration-300 ease-out group-hover:opacity-0 ${
            isTall ? "p-6 pt-16 sm:p-8 sm:pt-20" : "p-6 pt-14 sm:p-10 sm:pt-16"
          }`}
        >
          {isTall ? (
            <PhoneFrame src={project.screenshot} alt={`${project.name} screenshot`} priority={isHero} />
          ) : (
            <BrowserFrame src={project.screenshot} alt={`${project.name} screenshot`} priority={isHero} />
          )}
        </div>
      )}

      <div className="relative z-10 flex items-start justify-between">
        <div
          className="rounded px-2 py-1 -ml-2 -mt-1"
          style={{ backgroundColor: project.screenshot ? project.color : "transparent" }}
        >
          <p className="text-[11px] font-medium uppercase tracking-widest opacity-60">{project.year}</p>
          <p className="mt-1 max-w-[26ch] text-[13px] leading-snug opacity-80">{project.tagline}</p>
        </div>
        <motion.span
          initial={{ opacity: 0, x: -6, y: 6 }}
          whileHover={{ opacity: 1, x: 0, y: 0 }}
          className="opacity-0 transition-opacity group-hover:opacity-100"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.span>
      </div>

      <h3
        className={`relative z-10 font-display leading-[0.9] tracking-tight transition-opacity duration-300 ${
          project.screenshot ? "opacity-0 group-hover:opacity-100" : ""
        } ${isHero ? "text-6xl sm:text-7xl" : "text-4xl sm:text-5xl"}`}
      >
        {project.name}
      </h3>
    </Link>
  );
}
