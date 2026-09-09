const TICKER_ITEMS = [
  "AI·SW 체험 부스",
  "골든벨",
  "오디세이 투어",
  "기조강연",
  "교사 연수",
  "특강",
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ink pt-28 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center px-6 pb-20 text-center">
        <p className="text-sm font-medium text-white/60">
          2026. 10. 31.(토) – 11. 1.(일) · 장소 추후 공지
        </p>
        <h1 className="mt-6 text-4xl leading-[1.15] font-extrabold tracking-tight sm:text-6xl">
          학생과 교사가
          <br />
          함께 만드는 AI미래교육박람회
        </h1>
        <p className="mt-6 max-w-lg text-base leading-relaxed text-white/70">
          AI·SW 한마당과 미래교육박람회가 하나로. 체험하고, 겨루고, 배우는
          이틀 동안 학생마당과 교사마당을 자유롭게 오가 보세요.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href="#apply"
            className="rounded-sm bg-coral px-7 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            사전신청 안내 보기
          </a>
          <a
            href="#schedule"
            className="rounded-sm border border-white/25 px-7 py-3 text-sm font-semibold text-white/90 transition-colors hover:border-white/50"
          >
            전체 타임라인 보기
          </a>
        </div>
      </div>

      <div className="border-t border-white/10 bg-ink-2">
        <div className="overflow-hidden py-4">
          <div className="marquee-track flex w-max gap-10 whitespace-nowrap">
            {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
              <span key={i} className="flex items-center gap-10 text-sm text-white/70">
                {item}
                <span className="h-1 w-1 rounded-full bg-coral" aria-hidden="true" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
