export function Hero() {
  return (
    <section id="top" className="bg-ink text-white">
      <div className="mx-auto max-w-6xl px-6 pt-20 pb-16">
        <p className="text-sm font-medium text-white/60">
          2026. 10. 31.(토) – 11. 1.(일) · 장소 추후 공지
        </p>
        <h1 className="mt-5 max-w-2xl text-4xl leading-[1.2] font-bold tracking-tight sm:text-5xl">
          학생과 교사가 함께 만드는 AI 배움의 하루
        </h1>
        <p className="mt-5 max-w-lg text-base leading-relaxed text-white/70">
          AI·SW 한마당과 미래교육박람회가 하나로. 체험하고, 겨루고, 배우는
          이틀 동안 학생마당과 교사마당을 자유롭게 오가 보세요.
        </p>

        <div className="mt-9 flex flex-wrap gap-3">
          <a
            href="#apply"
            className="rounded-md bg-sky px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1a5fb8]"
          >
            사전신청 안내 보기
          </a>
          <a
            href="#schedule"
            className="rounded-md border border-white/25 px-6 py-3 text-sm font-semibold text-white/90 transition-colors hover:border-white/50"
          >
            전체 타임라인 보기
          </a>
        </div>
      </div>
    </section>
  );
}
