import Link from "next/link";
import { PageBanner } from "@/components/page-banner";
import { SectionSidebar } from "@/components/section-sidebar";
import { INFO_NAV } from "@/components/info-nav";

function IconPin({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 21s7-6.1 7-11.5A7 7 0 0 0 5 9.5C5 14.9 12 21 12 21z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="9.5" r="2.3" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export default function InfoLocationPage() {
  return (
    <>
      <PageBanner
        title="오시는 길"
        crumbs={[{ label: "박람회 안내", href: "/info" }, { label: "오시는 길" }]}
      />

      <div className="mx-auto max-w-6xl gap-10 px-6 py-16 md:grid md:grid-cols-[220px_1fr]">
        <SectionSidebar items={INFO_NAV} current="오시는 길" />

        <div className="mt-8 md:mt-0">
          <div className="overflow-hidden rounded-md border border-line">
            <div className="flex items-center gap-3 bg-ink px-6 py-4 text-white">
              <IconPin className="h-5 w-5" />
              <p className="text-lg font-bold">장소 추후 공지</p>
            </div>
            <div className="bg-white px-6 py-8">
              <p className="text-sm leading-relaxed text-ink-2">
                행사 장소가 확정되면 이 페이지에 지도, 대중교통(버스·지하철),
                주차 안내가 업데이트됩니다.
              </p>
            </div>
          </div>

          <Link
            href="/#notice"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-ink underline decoration-line underline-offset-4 transition-colors hover:decoration-sky"
          >
            공지사항에서 업데이트 확인하기
            <span aria-hidden="true">›</span>
          </Link>
        </div>
      </div>
    </>
  );
}
