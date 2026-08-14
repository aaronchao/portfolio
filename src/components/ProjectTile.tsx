"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/src/data/projects";

export function ProjectTile({ project, large = false }: { project: Project; large?: boolean }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      data-cursor="link"
      className={`group relative flex flex-col justify-between overflow-hidden border border-black/10 p-6 sm:p-8 ${
        large ? "min-h-[420px] sm:col-span-2" : "min-h-[280px]"
      }`}
      style={{ backgroundColor: project.color, color: project.textColor }}
    >
      <div className="flex items-start justify-between">
        <div>
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
      <h3 className={`font-display leading-[0.9] tracking-tight ${large ? "text-6xl sm:text-7xl" : "text-4xl sm:text-5xl"}`}>
        {project.name}
      </h3>
    </Link>
  );
}
