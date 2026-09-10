import { PageBanner } from "@/components/page-banner";
import { SectionSidebar } from "@/components/section-sidebar";
import { STUDENT_NAV } from "@/components/student-nav";

const FACTS = [
  { label: "대상", value: "학생 · 학부모" },
  { label: "장소", value: "AI·SW 교육 체험마당 (외부), AI코스웨어·에듀테크 체험 (2층)" },
  { label: "일정", value: "10.31.(토) 09:30–17:00 · 11.1.(일) 09:30–16:00" },
  { label: "운영", value: "각급학교·대학·기업·기관 참여 체험 부스" },
];

export default function StudentsBoothPage() {
  return (
    <>
      <PageBanner
        title="체험 부스 안내"
        crumbs={[{ label: "학생마당", href: "/students/booth" }, { label: "체험 부스 안내" }]}
      />

      <div className="mx-auto max-w-6xl gap-10 px-6 py-16 md:grid md:grid-cols-[220px_1fr]">
        <SectionSidebar items={STUDENT_NAV} current="체험 부스 안내" />

        <div className="mt-8 md:mt-0">
          <p className="max-w-2xl text-base leading-relaxed text-ink-2">
            다양한 학교와 기관이 참여하는 AI·SW 체험 부스에서 직접 만지고
            실행해보는 체험을 해보세요. 세부 부스 목록과 배치도는 행사가
            가까워지면 이 페이지에 공개됩니다.
          </p>

          <dl className="mt-10 divide-y divide-line border-t border-b border-line">
            {FACTS.map((fact) => (
              <div key={fact.label} className="grid gap-1 py-5 sm:grid-cols-[120px_1fr] sm:gap-6">
                <dt className="text-sm font-bold text-sky">{fact.label}</dt>
                <dd className="text-sm font-medium text-ink">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </>
  );
}
