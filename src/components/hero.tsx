const INFO_PILLS = [
  { label: "일시", value: "2026.10.31(토) – 11.1(일)" },
  { label: "장소", value: "추후 공지" },
  { label: "대상", value: "학생·학부모·교원·일반" },
  { label: "참가비", value: "무료" },
];

export function Hero() {
  return (
    <section id="top" className="hero-mesh relative text-white">
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="hero-grid absolute inset-0" />

        <svg
          className="pointer-events-none absolute -top-24 right-[-8%] h-[36rem] w-[36rem] opacity-40 sm:right-[2%]"
          viewBox="0 0 400 400"
          fill="none"
        >
          <circle cx="200" cy="200" r="170" stroke="url(#ring1)" strokeWidth="1.5" />
          <circle cx="200" cy="200" r="130" stroke="url(#ring1)" strokeWidth="1" opacity="0.7" />
          <circle cx="200" cy="200" r="90" stroke="url(#ring1)" strokeWidth="1" opacity="0.5" />
          <defs>
            <linearGradient id="ring1" x1="0" y1="0" x2="400" y2="400">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#7cb0fb" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative mx-auto max-w-6xl px-6 pt-20 pb-28">
        <div className="inline-flex items-center gap-2 border border-white/15 bg-white/[0.06] px-4 py-1.5 text-sm font-medium text-white/80 backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-sky-2" />
          2026년 10월, 학생과 교사가 함께
        </div>

        <h1 className="text-gradient mt-7 max-w-3xl text-4xl leading-[1.18] font-extrabold tracking-tight sm:text-6xl">
          AI 배움의 하루,
          <br />
          AI미래교육박람회
        </h1>
        <p className="mt-6 max-w-lg text-base leading-relaxed text-white/70">
          AI·SW 한마당과 미래교육박람회가 하나로. 체험하고, 겨루고, 배우는
          이틀 동안 학생마당과 교사마당을 자유롭게 오가 보세요.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="#apply"
            className="rounded-full bg-gradient-to-r from-sky-2 to-sky px-7 py-3.5 text-sm font-bold text-white shadow-[0_8px_24px_-6px_rgba(37,99,235,0.6)] transition-transform hover:-translate-y-0.5"
          >
            사전신청 안내 보기
          </a>
          <a
            href="#schedule"
            className="rounded-full border border-white/25 bg-white/[0.04] px-7 py-3.5 text-sm font-bold text-white/90 backdrop-blur-sm transition-colors hover:bg-white/10"
          >
            전체 타임라인 보기
          </a>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 pb-0">
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/15 bg-white/10 shadow-[0_20px_60px_-20px_rgba(4,12,34,0.6)] backdrop-blur-md sm:translate-y-10 sm:grid-cols-4">
          {INFO_PILLS.map((item) => (
            <div key={item.label} className="bg-[#0d2c66]/40 px-6 py-5">
              <dt className="text-xs font-semibold tracking-wide text-sky-2">
                {item.label}
              </dt>
              <dd className="mt-1.5 text-[15px] font-bold text-white">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="h-10 sm:h-0" />
    </section>
  );
}
