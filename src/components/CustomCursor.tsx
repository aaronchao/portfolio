"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Global custom cursor, after buenasuerte.cl's reference — a small dot by
 * default, growing into a ring with a diagonal arrow over anything
 * interactive. Hidden entirely on touch devices (globals.css) since
 * there's no real cursor there to replace.
 *
 * Position is applied via a ref + direct style mutation, not React state,
 * so mousemove doesn't trigger a re-render on every pixel — only the
 * boolean "am I over a link" state actually re-renders.
 */
export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onMove(e: MouseEvent) {
      if (!visible) setVisible(true);
      const el = dotRef.current;
      if (el) el.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
    }
    function onOver(e: MouseEvent) {
      const target = e.target as HTMLElement;
      setHovering(Boolean(target.closest('[data-cursor="link"]')));
    }
    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
    };
  }, [visible]);

  return (
    <div
      ref={dotRef}
      className="custom-cursor pointer-events-none fixed left-0 top-0 z-[999] -translate-x-1/2 -translate-y-1/2"
      style={{ opacity: visible ? 1 : 0 }}
    >
      <div
        className={`flex items-center justify-center rounded-full bg-[#0b0b0e] transition-all duration-200 ease-out ${
          hovering ? "h-14 w-14" : "h-3 w-3"
        }`}
      >
        {hovering && (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-[#f0efe9]">
            <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </div>
    </div>
  );
}
