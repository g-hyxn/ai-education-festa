const INFO_PILLS = [
  { label: "일시", value: "2026.10.31.(토) – 11.1.(일)" },
  { label: "장소", value: "추후 공지" },
  { label: "대상", value: "학생·학부모·교원·일반" },
  { label: "참가비", value: "무료" },
];

function Sparkle({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2z" />
    </svg>
  );
}

export function Hero() {
  return (
    <section id="top" className="hero-gradient relative overflow-hidden text-white">
      <Sparkle className="absolute top-24 left-[8%] hidden h-5 w-5 text-white/70 sm:block" />
      <Sparkle className="absolute top-40 right-[12%] hidden h-8 w-8 text-amber sm:block" />
      <Sparkle className="absolute bottom-24 left-[18%] hidden h-4 w-4 text-white/50 sm:block" />

      <div className="mx-auto flex max-w-6xl flex-col items-center px-6 pt-16 pb-20 text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium backdrop-blur-sm">
          <Sparkle className="h-4 w-4 text-amber" />
          2026 AI미래교육박람회
        </div>

        <h1 className="mt-8 text-4xl leading-[1.15] font-extrabold tracking-tight sm:text-6xl">
          학생과 교사가
          <br />
          함께 만드는 AI 배움의 하루
        </h1>
        <p className="mt-6 max-w-lg text-base leading-relaxed text-white/85">
          AI·SW 한마당과 미래교육박람회가 하나로. 체험하고, 겨루고, 배우는
          이틀 동안 학생마당과 교사마당을 자유롭게 오가 보세요.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a
            href="#apply"
            className="rounded-full bg-amber px-8 py-3 text-sm font-bold text-ink shadow-lg shadow-black/10 transition-transform hover:scale-[1.03]"
          >
            사전신청 안내 보기
          </a>
          <a
            href="#schedule"
            className="rounded-full border-2 border-white/50 px-8 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10"
          >
            전체 타임라인 보기
          </a>
        </div>

        <dl className="mt-12 flex flex-wrap justify-center gap-3">
          {INFO_PILLS.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-3 rounded-full bg-white/12 py-2 pr-5 pl-2 backdrop-blur-sm"
            >
              <dt className="rounded-full bg-white px-3 py-1 text-xs font-bold text-ink">
                {item.label}
              </dt>
              <dd className="text-sm font-semibold whitespace-nowrap">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
