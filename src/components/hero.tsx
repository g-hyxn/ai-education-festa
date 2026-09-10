const INFO_PILLS = [
  { label: "일시", value: "2026.10.31(토) – 11.1(일)" },
  { label: "장소", value: "추후 공지" },
  { label: "대상", value: "학생·학부모·교원·일반" },
  { label: "참가비", value: "무료" },
];

export function Hero() {
  return (
    <section id="top" className="hero-mesh relative text-white">
      <div className="hero-grid absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-6 pt-20 pb-28">
        <h1 className="max-w-3xl text-4xl leading-[1.18] font-extrabold tracking-tight sm:text-6xl">
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
            className="rounded-full bg-sky px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-[#1a52c4]"
          >
            사전신청 안내 보기
          </a>
          <a
            href="#schedule"
            className="rounded-full border border-white/25 px-7 py-3.5 text-sm font-bold text-white/90 transition-colors hover:border-white/50"
          >
            전체 타임라인 보기
          </a>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 pb-0">
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-line shadow-lg sm:translate-y-10 sm:grid-cols-4">
          {INFO_PILLS.map((item) => (
            <div key={item.label} className="bg-white px-6 py-5">
              <dt className="text-xs font-semibold tracking-wide text-sky">
                {item.label}
              </dt>
              <dd className="mt-1.5 text-[15px] font-bold text-ink">
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
