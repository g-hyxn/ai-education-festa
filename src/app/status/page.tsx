import { PageBanner } from "@/components/page-banner";
import { RealtimeStatus } from "@/components/realtime-status";

export default function StatusPage() {
  return (
    <>
      <PageBanner title="실시간 현황" crumbs={[{ label: "실시간 현황" }]} />

      <div className="mx-auto max-w-6xl px-6 py-16">
        <p className="max-w-2xl text-base leading-relaxed text-ink-2">
          프로그램별 접수 현황과 행사장 구역별 혼잡도를 실시간으로
          안내합니다.
        </p>

        <div className="mt-10">
          <RealtimeStatus />
        </div>
      </div>
    </>
  );
}
