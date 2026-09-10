import Link from "next/link";

const CARDS = [
  {
    tag: "전체",
    icon: "👥",
    accent: "from-violet to-[#7c4fe0]",
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
    icon: "🎓",
    accent: "from-sky to-sky-deep",
    headline: "AI·SW로 꿈을 키우는 미래의 주인공",
    items: [
      { name: "AI·SW 골든벨", detail: "도전하고, 배우고, 성장하는 AI·SW 퀴즈 대회" },
      { name: "오디세이 투어", detail: "보고, 체험하고, 상상하는 AI·SW 체험 투어" },
    ],
  },
  {
    tag: "교사",
    icon: "🧑‍🏫",
    accent: "from-teal to-[#0c7f76]",
    headline: "함께 만들어가는 더 나은 미래교육",
    items: [{ name: "교사 연수", detail: "AI 시대, 교사의 성장을 지원하는 전문 연수" }],
  },
];

export function QuickLinks() {
  return (
    <section className="bg-paper py-20">
      <div className="mx-auto max-w-6xl px-6">
        <p className="border-l-2 border-sky pl-3 text-sm font-bold text-sky">
          지금, 미래를 만나보세요!
        </p>
        <h2 className="mt-3 text-2xl font-bold text-ink sm:text-3xl">
          빠른 신청 바로가기
        </h2>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink/60">
          학생, 교사, 지역사회가 함께 만드는 특별한 경험에 지금 참여하세요.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {CARDS.map((card) => (
            <div key={card.tag} className="overflow-hidden rounded-2xl border border-line bg-white">
              <div className={`flex h-28 items-center justify-center bg-gradient-to-br ${card.accent} text-4xl text-white`}>
                {card.icon}
              </div>
              <div className="p-6">
                <p className="text-xs font-bold text-ink/40">{card.tag}</p>
                <p className="mt-1 text-sm font-semibold text-ink">{card.headline}</p>

                <ul className="mt-5 divide-y divide-line border-t border-line">
                  {card.items.map((item) => (
                    <li key={item.name} className="py-4">
                      <Link href="/#apply" className="group flex items-start justify-between gap-3">
                        <span>
                          <span className="block text-sm font-bold text-ink">{item.name}</span>
                          <span className="mt-0.5 block text-xs text-ink/55">{item.detail}</span>
                        </span>
                        <span
                          aria-hidden="true"
                          className="mt-0.5 shrink-0 text-ink/30 transition-colors group-hover:text-sky"
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
