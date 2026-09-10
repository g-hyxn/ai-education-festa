import Link from "next/link";
import { PageBanner } from "@/components/page-banner";
import { SectionSidebar } from "@/components/section-sidebar";
import { INFO_NAV } from "@/components/info-nav";

const FACTS = [
  { label: "부제", value: "AI 배움의 하루, 다시 만나는 미래교육" },
  { label: "기간", value: "2026. 10. 31.(토) – 11. 1.(일)" },
  { label: "장소", value: "추후 공지" },
  { label: "대상", value: "학생 · 학부모 · 교원 · 일반 (참가비 무료)" },
  {
    label: "주요행사",
    value: "개막식 · 기조강연 · 골든벨 · 오디세이 투어 · 특강 · 폐막식",
  },
];

export default function InfoPage() {
  return (
    <>
      <PageBanner title="행사 개요" crumbs={[{ label: "박람회 안내", href: "/info" }, { label: "행사 개요" }]} />

      <div className="mx-auto max-w-6xl gap-10 px-6 py-16 md:grid md:grid-cols-[220px_1fr]">
        <SectionSidebar items={INFO_NAV} current="행사 개요" />

        <div className="mt-8 md:mt-0">
          <p className="max-w-2xl text-base leading-relaxed text-ink/70">
            AI·SW 한마당과 미래교육박람회가 하나로 모입니다. 학생마당과
            교사마당을 자유롭게 오가며 체험하고, 겨루고, 배우는 이틀을
            보내보세요.
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
            href="/info/schedule"
            className="mt-10 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-2 to-sky px-6 py-4 text-sm font-bold text-white transition-transform hover:scale-[1.01]"
          >
            전체 일정표 보기
            <span aria-hidden="true">›</span>
          </Link>
        </div>
      </div>
    </>
  );
}
