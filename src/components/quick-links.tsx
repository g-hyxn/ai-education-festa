import Link from "next/link";

function IconGroup({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="8.5" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="16" cy="9" r="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3.5 18.5c.6-2.7 2.6-4.3 5-4.3s4.4 1.6 5 4.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M14 18.5c.4-2 1.9-3.3 3.5-3.3s3.1 1.3 3.5 3.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function IconGraduationCap({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M12 5l9 4.5-9 4.5-9-4.5 9-4.5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M6.5 11.5v4c0 1.4 2.5 2.5 5.5 2.5s5.5-1.1 5.5-2.5v-4" stroke="currentColor" strokeWidth="1.5" />
      <path d="M21 9.5v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function IconPresentation({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3.5" y="4.5" width="17" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M9 19.5h6M12 15.5v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M7 12l3-3 2.5 2.5L17 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const CARDS = [
  {
    tag: "전체",
    Icon: IconGroup,
    accent: "bg-ink-2",
    headline: "누구나 참여할 수 있는 특별한 프로그램",
    items: [
      {
        name: "특별 강연",
        detail: "AI가 바꾸는 우리의 일상, 미래를 만나는 시간",
      },
    ],
  },
  {
    tag: "학생",
    Icon: IconGraduationCap,
    accent: "bg-sky",
    headline: "AI·SW로 꿈을 키우는 미래의 주인공",
    items: [
      { name: "AI·SW 골든벨", detail: "도전하고, 배우고, 성장하는 AI·SW 퀴즈 대회" },
      { name: "오디세이 투어", detail: "보고, 체험하고, 상상하는 AI·SW 체험 투어" },
    ],
  },
  {
    tag: "교사",
    Icon: IconPresentation,
    accent: "bg-secondary",
    headline: "함께 만들어가는 더 나은 미래교육",
    items: [{ name: "교사 연수", detail: "AI 시대, 교사의 성장을 지원하는 전문 연수" }],
  },
];

export function QuickLinks() {
  return (
    <section className="bg-paper py-20">
      <div className="mx-auto max-w-6xl px-6">
        <p className="border-l-2 border-sky pl-3 text-sm font-bold text-sky-2">
          지금, 미래를 만나보세요!
        </p>
        <h2 className="mt-3 text-2xl font-bold text-ink sm:text-3xl">
          빠른 신청 바로가기
        </h2>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink-2">
          학생, 교사, 지역사회가 함께 만드는 특별한 경험에 지금 참여하세요.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {CARDS.map((card) => (
            <div key={card.tag} className="overflow-hidden rounded-md border border-line bg-white">
              <div className={`flex h-28 items-center justify-center ${card.accent} text-white`}>
                <card.Icon className="h-9 w-9" />
              </div>
              <div className="p-6">
                <p className="text-xs font-bold text-ink-2">{card.tag}</p>
                <p className="mt-1 text-sm font-semibold text-ink">{card.headline}</p>

                <ul className="mt-5 divide-y divide-line border-t border-line">
                  {card.items.map((item) => (
                    <li key={item.name} className="py-4">
                      <Link href="/#apply" className="group flex items-start justify-between gap-3">
                        <span>
                          <span className="block text-sm font-bold text-ink">{item.name}</span>
                          <span className="mt-0.5 block text-xs text-ink-2">{item.detail}</span>
                        </span>
                        <span
                          aria-hidden="true"
                          className="mt-0.5 shrink-0 text-ink-2 transition-colors group-hover:text-sky"
                        >
                          →
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
