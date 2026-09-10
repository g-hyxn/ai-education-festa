const STEPS = [
  "휴대폰 인증",
  "거주 지역 선택",
  "참여 시간 선택",
  "참여 인원 선택",
  "참여자 유형 선택",
];

const CAPACITY = [
  { label: "10.31 오전", fill: 62 },
  { label: "10.31 오후", fill: 38 },
  { label: "11.1 오전", fill: 21 },
  { label: "11.1 오후", fill: 8 },
];

export function ApplySection() {
  return (
    <section id="apply" className="scroll-mt-20 bg-ink-2 py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">사전신청</h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-white/65">
              시간대별 정원제로 운영됩니다. 아래 절차로 신청 페이지가
              오픈됩니다.
            </p>
          </div>
          <span className="rounded-sm border border-white/25 px-4 py-2 text-sm font-semibold text-white">
            2026. 10. 19.(월) – 10. 28.(수) 오픈 예정
          </span>
        </div>

        <ol className="relative mt-14 grid gap-8 sm:grid-cols-5">
          <div className="absolute top-5 right-[10%] left-[10%] hidden h-px bg-white/15 sm:block" />
          {STEPS.map((step, index) => (
            <li key={step} className="relative flex flex-col items-center text-center sm:items-start sm:text-left">
              <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-sky text-sm font-bold text-white">
                {index + 1}
              </span>
              <p className="mt-3 text-sm font-medium text-white/90">{step}</p>
            </li>
          ))}
        </ol>

        <div className="mt-16 border-t border-white/10 pt-10">
          <div className="flex items-baseline justify-between gap-4">
            <h3 className="text-sm font-semibold text-white/80">
              시간대별 접수 현황
            </h3>
            <span className="text-xs text-white/40">
              예시 화면 · 실시간 연동은 오픈 이후 제공됩니다
            </span>
          </div>
          <div className="mt-6 grid gap-6 sm:grid-cols-4">
            {CAPACITY.map((slot) => (
              <div key={slot.label}>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-sky"
                    style={{ width: `${slot.fill}%` }}
                  />
                </div>
                <p className="mt-2 text-sm text-white/70">{slot.label}</p>
                <p className="text-xs text-white/40">정원 1,000명</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
