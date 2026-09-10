function IconOpenBook({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 6.5c-1.6-1.2-4-1.7-6.5-1.5v11.5c2.5-.2 4.9.3 6.5 1.5M12 6.5c1.6-1.2 4-1.7 6.5-1.5v11.5c-2.5-.2-4.9.3-6.5 1.5M12 6.5v11.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconMortarboard({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 5.5L2.5 10 12 14.5 21.5 10 12 5.5z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M6 12v4.5c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5V12" stroke="currentColor" strokeWidth="1.6" />
      <path d="M21 10.5v5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function IconCalendar({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3.5" y="5.5" width="17" height="15" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3.5 10h17M8 3v4M16 3v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M8 14h2M14 14h2M8 17h2M14 17h2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

const LINKS = [
  {
    Icon: IconOpenBook,
    accent: "bg-teal",
    title: "학생·학부모 사전신청",
    detail: "체험 부스, 골든벨, 오디세이 투어",
    href: "#apply",
  },
  {
    Icon: IconMortarboard,
    accent: "bg-amber",
    title: "교원 사전신청",
    detail: "연수, 부스 안내, 특강",
    href: "#apply",
  },
  {
    Icon: IconCalendar,
    accent: "bg-sky-deep",
    title: "전체 프로그램 일정",
    detail: "개막식부터 폐막식까지 한눈에",
    href: "#schedule",
  },
];

export function QuickLinks() {
  return (
    <section className="bg-paper">
      <div className="mx-auto grid max-w-6xl gap-5 px-6 py-14 sm:grid-cols-3">
        {LINKS.map((link) => (
          <a
            key={link.title}
            href={link.href}
            className={`group flex flex-col justify-between rounded-3xl ${link.accent} p-7 text-white shadow-sm transition-transform hover:-translate-y-1`}
          >
            <div>
              <link.Icon className="h-9 w-9" />
              <p className="mt-4 text-lg font-bold">{link.title}</p>
              <p className="mt-1 text-sm text-white/85">{link.detail}</p>
            </div>
            <span className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-white/20 py-1.5 pr-1.5 pl-4 text-sm font-semibold">
              바로가기
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-xs text-ink transition-transform group-hover:translate-x-0.5">
                ›
              </span>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
