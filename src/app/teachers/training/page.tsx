import { PageBanner } from "@/components/page-banner";
import { SectionSidebar } from "@/components/section-sidebar";
import { TEACHER_NAV } from "@/components/teacher-nav";

const PROGRAMS = ["삼성", "애플", "구글"];

export default function TeachersTrainingPage() {
  return (
    <>
      <PageBanner
        title="교사 연수"
        crumbs={[{ label: "교사마당", href: "/teachers/booth" }, { label: "교사 연수" }]}
      />

      <div className="mx-auto max-w-6xl gap-10 px-6 py-16 md:grid md:grid-cols-[220px_1fr]">
        <SectionSidebar items={TEACHER_NAV} current="교사 연수" />

        <div className="mt-8 md:mt-0">
          <p className="max-w-2xl text-base leading-relaxed text-ink-2">
            AI 시대, 교사의 성장을 지원하는 전문 연수입니다. 아래 3개
            프로그램으로 운영될 예정이며, 세부 일정과 신청 방법은 추후
            안내됩니다.
          </p>

          <ul className="mt-10 divide-y divide-line border-t border-b border-line">
            {PROGRAMS.map((program) => (
              <li key={program} className="flex items-center justify-between py-5">
                <span className="text-sm font-bold text-ink">{program} 연수</span>
                <span className="text-sm text-ink-2">세부 사항 추후 안내</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
