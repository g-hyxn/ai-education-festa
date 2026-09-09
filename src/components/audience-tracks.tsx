const TRACKS = [
  {
    id: "students",
    tag: "학생 · 학부모",
    panel: "bg-sky",
    button: "bg-sky",
    emoji: "🎒",
    title: "학생마당",
    lead: "체험하고, 겨루고, 둘러보는 하루",
    items: [
      {
        name: "체험 부스",
        detail: "AI·SW 교육 체험마당, AI코스웨어·에듀테크 체험 (2층)",
      },
      {
        name: "골든벨",
        detail: "초등 10.31 오후 · 중고등 11.1 오전 — 각 사전 50명",
      },
      {
        name: "오디세이 투어",
        detail: "10.31 진행, 팀당 8명 · 회차당 2팀",
      },
    ],
  },
  {
    id: "teachers",
    tag: "교원",
    panel: "bg-teal",
    button: "bg-teal",
    emoji: "🍎",
    title: "교사마당",
    lead: "현장에 바로 쓰는 미래교육 연수",
    items: [
      { name: "부스 안내", detail: "체험마당·에듀테크 부스 교사 대상 안내" },
      { name: "교사 연수", detail: "세부 일정은 추후 안내 예정" },
      { name: "AI전남광주 미래교육", detail: "지역 미래교육 방향 공유" },
    ],
  },
];

export function AudienceTracks() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          두 개의 트랙, 하나의 박람회
        </h2>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-ink/60">
          학생·학부모를 위한 학생마당과 교원을 위한 교사마당을 분리해
          운영합니다. 필요한 정보만 골라 확인하세요.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {TRACKS.map((track) => (
            <div
              key={track.id}
              id={track.id}
              className="scroll-mt-20 overflow-hidden rounded-3xl border border-line shadow-sm"
            >
              <div className={`relative flex h-32 items-center justify-center ${track.panel}`}>
                <span className="text-6xl drop-shadow-sm">{track.emoji}</span>
                <span className="absolute top-4 left-5 rounded-full bg-white/25 px-3 py-1 text-xs font-bold text-white">
                  {track.tag}
                </span>
              </div>

              <div className="bg-white p-8">
                <h3 className="text-xl font-bold text-ink">{track.title}</h3>
                <p className="mt-1 text-sm text-ink/60">{track.lead}</p>

                <ul className="mt-6 divide-y divide-line border-t border-line">
                  {track.items.map((item) => (
                    <li key={item.name} className="flex flex-col gap-1 py-4">
                      <span className="text-sm font-semibold text-ink">
                        {item.name}
                      </span>
                      <span className="text-sm text-ink/55">{item.detail}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#apply"
                  className={`mt-6 inline-flex items-center gap-2 rounded-full ${track.button} py-2 pr-2 pl-5 text-sm font-bold text-white`}
                >
                  {track.tag} 사전신청 안내
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-xs text-ink">
                    ›
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm text-ink/55">
          기조강연·특강은 학생·교사·일반 누구나 참여할 수 있어요. (10.31
          11:00, 선착순 300명)
        </p>
      </div>
    </section>
  );
}
