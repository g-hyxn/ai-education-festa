function StudentMark() {
  return (
    <svg viewBox="0 0 120 120" className="h-16 w-16" aria-hidden="true">
      <defs>
        <linearGradient id="student-g" x1="0" y1="0" x2="120" y2="120">
          <stop offset="0%" stopColor="#7cb0fb" />
          <stop offset="100%" stopColor="#1d4fd1" />
        </linearGradient>
      </defs>
      <rect x="18" y="34" width="84" height="66" rx="18" fill="url(#student-g)" />
      <path
        d="M40 34c0-13 9-22 20-22s20 9 20 22"
        stroke="#ffffff"
        strokeOpacity="0.85"
        strokeWidth="6"
        fill="none"
        strokeLinecap="round"
      />
      <circle cx="60" cy="66" r="10" fill="#ffffff" fillOpacity="0.9" />
      <path
        d="M46 90c3-8 8-12 14-12s11 4 14 12"
        stroke="#ffffff"
        strokeOpacity="0.9"
        strokeWidth="6"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

function TeacherMark() {
  return (
    <svg viewBox="0 0 120 120" className="h-16 w-16" aria-hidden="true">
      <defs>
        <linearGradient id="teacher-g" x1="0" y1="0" x2="120" y2="120">
          <stop offset="0%" stopColor="#5fd6c8" />
          <stop offset="100%" stopColor="#0f9e93" />
        </linearGradient>
      </defs>
      <rect x="16" y="24" width="88" height="60" rx="10" fill="url(#teacher-g)" />
      <path
        d="M30 62l16-14 14 10 22-22"
        stroke="#ffffff"
        strokeOpacity="0.9"
        strokeWidth="6"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="82" cy="36" r="5" fill="#ffffff" />
      <rect x="46" y="90" width="28" height="8" rx="4" fill="#0f9e93" fillOpacity="0.4" />
      <rect x="54" y="84" width="12" height="10" fill="#ffffff" fillOpacity="0.9" />
    </svg>
  );
}

const TRACKS = [
  {
    id: "students",
    tag: "학생 · 학부모",
    title: "학생마당",
    lead: "체험하고, 겨루고, 둘러보는 하루",
    mark: <StudentMark />,
    panel: "from-[#eaf2ff] to-[#dbe9ff]",
    button: "from-sky-2 to-sky",
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
    title: "교사마당",
    lead: "현장에 바로 쓰는 미래교육 연수",
    mark: <TeacherMark />,
    panel: "from-[#e7f8f5] to-[#d7f1ec]",
    button: "from-[#5fd6c8] to-teal",
    items: [
      { name: "부스 안내", detail: "체험마당·에듀테크 부스 교사 대상 안내" },
      { name: "교사 연수", detail: "세부 일정은 추후 안내 예정" },
      { name: "AI전남광주 미래교육", detail: "지역 미래교육 방향 공유" },
    ],
  },
];

export function AudienceTracks() {
  return (
    <section className="bg-paper pt-24 pb-24 sm:pt-16">
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
              className="scroll-mt-20 overflow-hidden rounded-3xl bg-white shadow-[0_20px_45px_-24px_rgba(11,29,58,0.35)]"
            >
              <div className={`relative flex h-36 items-center justify-center bg-gradient-to-br ${track.panel}`}>
                {track.mark}
                <span className="absolute top-5 left-6 text-xs font-bold text-ink/50">
                  {track.tag}
                </span>
              </div>

              <div className="p-8">
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
                  className={`mt-7 inline-flex items-center gap-3 rounded-full bg-gradient-to-r ${track.button} py-2 pr-2 pl-5 text-sm font-bold text-white shadow-sm transition-transform hover:-translate-y-0.5`}
                >
                  사전신청 안내
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/90 text-sm text-ink">
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
