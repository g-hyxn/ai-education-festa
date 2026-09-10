import { PageBanner } from "@/components/page-banner";
import { SectionSidebar } from "@/components/section-sidebar";
import { TEACHER_NAV } from "@/components/teacher-nav";

const FACTS = [
  { label: "대상", value: "교원" },
  { label: "장소", value: "체험마당 · 에듀테크 부스 (교사 대상 안내 구역)" },
  { label: "일정", value: "10.31.(토) 09:30–17:00 · 11.1.(일) 09:30–16:00" },
];

export default function TeachersBoothPage() {
  return (
    <>
      <PageBanner
        title="부스 안내"
        crumbs={[{ label: "교사마당", href: "/teachers/booth" }, { label: "부스 안내" }]}
      />

      <div className="mx-auto max-w-6xl gap-10 px-6 py-16 md:grid md:grid-cols-[220px_1fr]">
        <SectionSidebar items={TEACHER_NAV} current="부스 안내" />

        <div className="mt-8 md:mt-0">
          <p className="max-w-2xl text-base leading-relaxed text-ink-2">
            체험마당·에듀테크 부스를 교사 관점에서 둘러볼 수 있도록 안내하는
            구역입니다. 세부 부스 목록은 행사가 가까워지면 공개됩니다.
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
