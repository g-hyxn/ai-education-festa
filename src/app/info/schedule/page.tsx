import { PageBanner } from "@/components/page-banner";
import { SectionSidebar } from "@/components/section-sidebar";
import { INFO_NAV } from "@/components/info-nav";
import { ScheduleTable } from "@/components/schedule-table";

export default function InfoSchedulePage() {
  return (
    <>
      <PageBanner
        title="전체 일정표"
        crumbs={[{ label: "박람회 안내", href: "/info" }, { label: "전체 일정표" }]}
      />

      <div className="mx-auto max-w-6xl gap-10 px-6 py-16 md:grid md:grid-cols-[220px_1fr]">
        <SectionSidebar items={INFO_NAV} current="전체 일정표" />

        <div className="mt-8 md:mt-0">
          <p className="max-w-2xl text-base leading-relaxed text-ink/70">
            개막식부터 골든벨, 특강까지 이틀간의 전체 일정입니다. 세부
            시간과 장소는 추후 업데이트될 수 있습니다.
          </p>

          <div className="mt-10">
            <ScheduleTable />
          </div>
        </div>
      </div>
    </>
  );
}
