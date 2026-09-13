import Link from "next/link";

const STEPS = [
  "휴대폰 인증",
  "거주 지역 선택",
  "참여 시간 선택",
  "참여 인원 선택",
  "참여자 유형 선택",
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

        <div className="mt-16 flex items-center justify-between gap-4 border-t border-white/10 pt-10">
          <p className="text-sm text-white/70">
            프로그램별 실시간 접수 현황과 행사장 혼잡도는 실시간 현황
            페이지에서 확인하실 수 있습니다.
          </p>
          <Link
            href="/status"
            className="flex shrink-0 items-center gap-2 rounded-md border border-white/25 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10"
          >
            실시간 현황 보기
            <span aria-hidden="true">›</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
