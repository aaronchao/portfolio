import Link from "next/link";

export function Nav() {
  return (
    <nav className="flex items-center justify-between px-4 py-6 text-[13px] font-medium uppercase tracking-widest sm:px-8">
      <Link href="/" data-cursor="link">
        Aaron Chao
      </Link>
      <div className="flex gap-6 sm:gap-10">
        <a href="#projects" data-cursor="link">
          Projects
        </a>
        <a href="https://github.com/aaronchao" target="_blank" rel="noreferrer" data-cursor="link">
          GitHub
        </a>
      </div>
    </nav>
  );
}
