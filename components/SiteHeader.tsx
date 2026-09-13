import { siteConfig } from "@/lib/site-data";

export default function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-40">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 md:px-8 lg:px-10">
        <a href="#top" className="group flex flex-col">
          <span className="text-[11px] font-semibold tracking-wide text-brand md:text-xs">
            {siteConfig.school}
          </span>
          <span className="font-[family-name:var(--font-display)] text-xl font-extrabold tracking-tight text-slate-900 md:text-2xl">
            {siteConfig.brand}
            <span className="ml-2 text-sm font-bold text-accent-deep md:text-base">
              {siteConfig.yearLabel}
            </span>
          </span>
        </a>
        <nav className="hidden items-center gap-5 text-sm font-medium text-slate-600 lg:flex">
          <a href="#about" className="hover:text-brand">
            학과소개
          </a>
          <a href="#curriculum" className="hover:text-brand">
            교육과정
          </a>
          <a href="#specials" className="hover:text-brand">
            특별함
          </a>
          <a href="#admissions" className="hover:text-brand">
            모집요강
          </a>
          <a href="#contact" className="hover:text-brand">
            상담
          </a>
        </nav>
      </div>
    </header>
  );
}
