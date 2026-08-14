"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/src/data/projects";
import { BrowserFrame } from "./BrowserFrame";
import { PhoneFrame } from "./PhoneFrame";

/**
 * Two tile behaviours, matching buenasuerte.cl's actual mixed pattern
 * (verified live, not assumed): tiles with a real photo show it by
 * default and it fades OUT on hover to reveal a flat-colour card
 * underneath — not a zoom/scale. Tiles with no photo are flat-colour
 * always, same as their "Los Colonos" logotype tile.
 *
 * Screenshots render inside a device frame (BrowserFrame/PhoneFrame),
 * padded and centred on the tile's own colour, rather than force-cropped
 * with object-cover — a portrait phone screenshot stretched into a
 * landscape box was the actual cause of "messy."
 */
export function ProjectTile({ project, large = false }: { project: Project; large?: boolean }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      data-cursor="link"
      className={`group relative flex flex-col justify-between overflow-hidden border border-black/10 p-6 sm:p-8 ${
        large ? "min-h-[460px] sm:col-span-2" : "min-h-[340px]"
      }`}
      style={{ backgroundColor: project.color, color: project.textColor }}
    >
      {project.screenshot && (
        <div className="absolute inset-0 flex items-center justify-center p-8 pt-16 opacity-100 transition-opacity duration-300 ease-out group-hover:opacity-0 sm:p-10 sm:pt-20">
          {project.screenshotType === "mobile" ? (
            <PhoneFrame src={project.screenshot} alt={`${project.name} screenshot`} priority={large} />
          ) : (
            <BrowserFrame src={project.screenshot} alt={`${project.name} screenshot`} priority={large} />
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
        } ${large ? "text-6xl sm:text-7xl" : "text-4xl sm:text-5xl"}`}
      >
        {project.name}
      </h3>
    </Link>
  );
}
