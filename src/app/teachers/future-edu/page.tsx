import { PageBanner } from "@/components/page-banner";
import { SectionSidebar } from "@/components/section-sidebar";
import { TEACHER_NAV } from "@/components/teacher-nav";

export default function TeachersFutureEduPage() {
  return (
    <>
      <PageBanner
        title="AI전남광주 미래교육"
        crumbs={[{ label: "교사마당", href: "/teachers/booth" }, { label: "AI전남광주 미래교육" }]}
      />

      <div className="mx-auto max-w-6xl gap-10 px-6 py-16 md:grid md:grid-cols-[220px_1fr]">
        <SectionSidebar items={TEACHER_NAV} current="AI전남광주 미래교육" />

        <div className="mt-8 md:mt-0">
          <p className="max-w-2xl text-base leading-relaxed text-ink-2">
            전남·광주 지역의 미래교육 방향과 사례를 공유하는 자리입니다.
            세부 내용은 추후 안내됩니다.
          </p>
        </div>
      </div>
    </>
  );
}
