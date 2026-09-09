const LINKS = [
  {
    icon: "🎒",
    color: "bg-sky",
    title: "학생·학부모 사전신청",
    detail: "체험 부스, 골든벨, 오디세이 투어",
    href: "#apply",
  },
  {
    icon: "🍎",
    color: "bg-teal",
    title: "교원 사전신청",
    detail: "연수, 부스 안내, 특강",
    href: "#apply",
  },
  {
    icon: "🗓️",
    color: "bg-amber",
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
            className={`group flex flex-col justify-between rounded-3xl ${link.color} p-6 text-white shadow-sm transition-transform hover:-translate-y-1`}
          >
            <div>
              <span className="text-3xl">{link.icon}</span>
              <p className="mt-4 text-lg font-bold">{link.title}</p>
              <p className="mt-1 text-sm text-white/85">{link.detail}</p>
            </div>
            <span className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-white/20 py-1.5 pr-1.5 pl-4 text-sm font-semibold">
              바로가기
              <span
                aria-hidden="true"
                className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-xs text-ink transition-transform group-hover:translate-x-0.5"
              >
                ›
              </span>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
