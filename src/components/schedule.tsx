import { ScheduleTable } from "@/components/schedule-table";

export function Schedule() {
  return (
    <section id="schedule" className="scroll-mt-20 bg-paper py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          통합 타임라인
        </h2>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-ink/60">
          개막식부터 골든벨, 특강까지 전체 일정을 한눈에 확인하세요. 세부
          일정은 추후 업데이트될 수 있습니다.
        </p>

        <div className="mt-12">
          <ScheduleTable />
        </div>
      </div>
    </section>
  );
}
