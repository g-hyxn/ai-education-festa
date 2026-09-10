import Link from "next/link";
import { PageBanner } from "@/components/page-banner";
import { SectionSidebar } from "@/components/section-sidebar";
import { STUDENT_NAV } from "@/components/student-nav";

const SESSIONS = [
  { time: "10:00 – 11:00", teams: "2팀" },
  { time: "13:30 – 14:30", teams: "2팀" },
  { time: "15:00 – 16:00", teams: "2팀" },
];

const FACTS = [
  { label: "대상", value: "학생" },
  { label: "일정", value: "10.31.(토)만 운영 (11.1.(일) 미운영)" },
  { label: "인원", value: "팀당 8명" },
];

export default function StudentsOdysseyPage() {
  return (
    <>
      <PageBanner
        title="오디세이 투어"
        crumbs={[{ label: "학생마당", href: "/students/booth" }, { label: "오디세이 투어" }]}
      />

      <div className="mx-auto max-w-6xl gap-10 px-6 py-16 md:grid md:grid-cols-[220px_1fr]">
        <SectionSidebar items={STUDENT_NAV} current="오디세이 투어" />

        <div className="mt-8 md:mt-0">
          <p className="max-w-2xl text-base leading-relaxed text-ink-2">
            보고, 체험하고, 상상하는 AI·SW 체험 투어입니다. 회차별로 정해진
            팀 수만 참여할 수 있어요.
          </p>

          <dl className="mt-10 divide-y divide-line border-t border-b border-line">
            {FACTS.map((fact) => (
              <div key={fact.label} className="grid gap-1 py-5 sm:grid-cols-[120px_1fr] sm:gap-6">
                <dt className="text-sm font-bold text-sky">{fact.label}</dt>
                <dd className="text-sm font-medium text-ink">{fact.value}</dd>
              </div>
            ))}
          </dl>

          <h2 className="mt-12 text-lg font-bold text-ink">10.31.(토) 회차</h2>
          <div className="mt-4 overflow-hidden rounded-md border border-line">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="bg-sky-deep text-white">
                  <th className="px-6 py-3 font-bold">시간</th>
                  <th className="px-6 py-3 font-bold">모집 팀 수</th>
                </tr>
              </thead>
              <tbody>
                {SESSIONS.map((session, i) => (
                  <tr key={session.time} className={i % 2 === 1 ? "bg-paper" : "bg-white"}>
                    <td className="px-6 py-3 text-ink">{session.time}</td>
                    <td className="px-6 py-3 text-ink-2">{session.teams}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <Link
            href="/#apply"
            className="mt-10 flex items-center justify-center gap-2 rounded-md bg-sky px-6 py-4 text-sm font-bold text-white transition-colors hover:bg-sky-2"
          >
            오디세이 투어 사전신청 안내 보기
            <span aria-hidden="true">›</span>
          </Link>
        </div>
      </div>
    </>
  );
}
