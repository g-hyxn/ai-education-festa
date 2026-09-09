const NAV_ITEMS = [
  { href: "#students", label: "학생마당" },
  { href: "#teachers", label: "교사마당" },
  { href: "#schedule", label: "일정" },
  { href: "#apply", label: "사전신청" },
  { href: "#notice", label: "알림마당" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5">
        <a href="#top" className="text-base font-extrabold tracking-tight text-ink">
          AI미래교육박람회
        </a>
        <nav className="hidden gap-7 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink/65 transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#apply"
          className="rounded-md bg-sky px-5 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
        >
          사전신청
        </a>
      </div>
    </header>
  );
}
