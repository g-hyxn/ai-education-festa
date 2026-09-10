import Link from "next/link";
import { PageBanner } from "@/components/page-banner";
import { SectionSidebar } from "@/components/section-sidebar";
import { STUDENT_NAV } from "@/components/student-nav";

const FACTS = [
  { label: "대상", value: "학생 (초등 / 중·고등)" },
  { label: "일정", value: "초등 10.31.(토) 오후 · 중·고등 11.1.(일) 오전" },
  { label: "인원", value: "초등·중고등 각 사전신청 50명 + 현장 접수 50명" },
  { label: "장소", value: "3층 대강당" },
];

export default function StudentsGoldenbellPage() {
  return (
    <>
      <PageBanner
        title="AI·SW 골든벨"
        crumbs={[{ label: "학생마당", href: "/students/booth" }, { label: "AI·SW 골든벨" }]}
      />

      <div className="mx-auto max-w-6xl gap-10 px-6 py-16 md:grid md:grid-cols-[220px_1fr]">
        <SectionSidebar items={STUDENT_NAV} current="AI·SW 골든벨" />

        <div className="mt-8 md:mt-0">
          <p className="max-w-2xl text-base leading-relaxed text-ink-2">
            AI·SW 지식을 겨루는 골든벨 퀴즈 대회입니다. 사전신청 50명 외에도
            현장 접수로 추가 참여할 수 있습니다.
          </p>

          <dl className="mt-10 divide-y divide-line border-t border-b border-line">
            {FACTS.map((fact) => (
              <div key={fact.label} className="grid gap-1 py-5 sm:grid-cols-[120px_1fr] sm:gap-6">
                <dt className="text-sm font-bold text-sky">{fact.label}</dt>
                <dd className="text-sm font-medium text-ink">{fact.value}</dd>
              </div>
            ))}
          </dl>

          <Link
            href="/#apply"
            className="mt-10 flex items-center justify-center gap-2 rounded-md bg-sky px-6 py-4 text-sm font-bold text-white transition-colors hover:bg-sky-2"
          >
            골든벨 사전신청 안내 보기
            <span aria-hidden="true">›</span>
          </Link>
        </div>
      </div>
    </>
  );
}
