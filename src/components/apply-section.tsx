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
    <section id="apply" className="scroll-mt-20 bg-ink py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">사전신청</h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-white/60">
              시간대별 정원제로 운영됩니다. 아래 절차로 신청 페이지가
              오픈됩니다.
            </p>
          </div>
          <span className="rounded-sm border border-coral/60 px-4 py-2 text-sm font-semibold text-coral">
            2026. 10. 19.(월) – 10. 28.(수) 오픈 예정
          </span>
        </div>

        <ol className="mt-12 grid gap-6 sm:grid-cols-5">
          {STEPS.map((step, index) => (
            <li key={step} className="border-t border-white/20 pt-4">
              <span className="text-sm text-white/40">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="mt-2 text-sm font-medium text-white">{step}</p>
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
                <div className="h-1.5 w-full bg-white/10">
                  <div
                    className="h-full bg-mint"
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
