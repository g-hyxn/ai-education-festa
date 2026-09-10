const FLOATERS = [
  {
    side: "left" as const,
    tag: "학생·학부모",
    title: "사전등록",
    period: "2026.10.19.(월) 10:00 – 10.28.(수)",
  },
  {
    side: "right" as const,
    tag: "교원",
    title: "사전등록",
    period: "2026.10.19.(월) 10:00 – 10.28.(수)",
  },
];

export function Hero() {
  return (
    <section id="top" className="hero-mesh relative overflow-hidden text-white">
      <div className="hero-grid absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 pt-24 pb-28 text-center">
        {FLOATERS.map((f) => (
          <div
            key={f.side}
            className={`float-slow absolute top-[4.5rem] hidden w-64 border border-white/15 bg-white/10 p-5 text-left backdrop-blur-md lg:block ${
              f.side === "left" ? "left-4" : "right-4"
            }`}
          >
            <p className="text-xs font-semibold text-sky-light">{f.tag}</p>
            <p className="mt-1 text-base font-bold">{f.title}</p>
            <p className="mt-3 text-xs text-white/60">신청기간</p>
            <p className="text-sm font-medium text-white/90">{f.period}</p>
            <a
              href="#apply"
              className="mt-4 flex items-center justify-between rounded-full bg-white px-4 py-2 text-sm font-bold text-ink"
            >
              사전신청 하기
              <span aria-hidden="true">›</span>
            </a>
          </div>
        ))}

        <p className="inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-sm font-medium backdrop-blur-sm">
          학생과 교사가 함께 만드는
        </p>

        <h1 className="glow-text mt-6 text-7xl leading-none font-black tracking-tight sm:text-8xl">
          AI 배움
        </h1>
        <p className="mt-4 text-2xl font-bold text-white sm:text-3xl">
          2026 AI미래교육박람회
        </p>

        <div className="mt-8 flex items-center gap-3">
          <span className="rounded-full bg-white px-4 py-1.5 text-sm font-bold text-ink">
            10.31 토
          </span>
          <span className="text-white/50">–</span>
          <span className="rounded-full bg-white px-4 py-1.5 text-sm font-bold text-ink">
            11.1 일
          </span>
        </div>
        <p className="mt-4 text-sm text-white/70">장소 추후 공지</p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href="#apply"
            className="flex items-center justify-center gap-2 rounded-full bg-mint px-8 py-3.5 text-sm font-bold text-ink shadow-lg shadow-mint/30 transition-transform hover:scale-105"
          >
            행사 참여 등록
            <span aria-hidden="true">›</span>
          </a>
          <a
            href="#schedule"
            className="flex items-center justify-center gap-2 rounded-full border border-white/30 px-8 py-3.5 text-sm font-bold text-white/90 transition-colors hover:bg-white/10"
          >
            전체 타임라인 보기
          </a>
        </div>
      </div>
    </section>
  );
}
