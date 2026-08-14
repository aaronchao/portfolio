import Image from "next/image";

/**
 * Professional presentation for a web-app screenshot — a browser-chrome
 * frame reads as "intentional design object" rather than "raw screenshot,"
 * regardless of how busy the underlying UI is. Traffic-light dots only —
 * no fake address bar, which would need to lie about a URL.
 */
export function BrowserFrame({ src, alt, priority = false }: { src: string; alt: string; priority?: boolean }) {
  return (
    <div className="h-full w-full overflow-hidden rounded-lg bg-[#1c1c1f] shadow-xl">
      <div className="flex items-center gap-1.5 px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
      </div>
      <div className="relative aspect-[16/10] w-full">
        <Image src={src} alt={alt} fill sizes="100vw" className="object-cover object-top" priority={priority} />
      </div>
    </div>
  );
}
