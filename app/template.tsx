"use client";

import { motion } from "framer-motion";

/**
 * Next.js re-mounts `template.tsx` on every navigation (unlike layout.tsx,
 * which persists) — that's what makes a per-page enter animation possible
 * without a router event listener. Kept deliberately simple (fade + rise)
 * rather than a heavier branded loader: App Router navigations are
 * typically near-instant, and an elaborate loading sequence would be
 * fighting the framework rather than working with it.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
