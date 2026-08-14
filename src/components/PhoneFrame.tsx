import Image from "next/image";

/**
 * A portrait mobile screenshot forced into a landscape tile via
 * object-cover was the actual cause of "messy" — a sliver of the top of a
 * phone screen, stretched. A real bezel + object-contain shows the whole
 * screenshot, sized honestly, on the tile's own colour rather than fighting
 * its aspect ratio.
 */
export function PhoneFrame({ src, alt, priority = false }: { src: string; alt: string; priority?: boolean }) {
  return (
    <div className="relative mx-auto h-full aspect-[9/19.5] rounded-[2rem] border-[6px] border-[#1c1c1f] bg-[#1c1c1f] shadow-xl">
      <div className="absolute left-1/2 top-0 z-10 h-5 w-24 -translate-x-1/2 rounded-b-xl bg-[#1c1c1f]" />
      <div className="relative h-full w-full overflow-hidden rounded-[1.4rem]">
        <Image src={src} alt={alt} fill sizes="30vw" className="object-cover object-top" priority={priority} />
      </div>
    </div>
  );
}
