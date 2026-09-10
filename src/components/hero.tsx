import Link from "next/link";
import { StatCards } from "@/components/stat-cards";
import { EVENT_NAME, EVENT_TAGLINE, ORG_NAME } from "@/components/org-info";

export function Hero() {
  return (
    <section id="top" className="bg-sky-subtle">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 pt-14 pb-16 lg:grid-cols-[1.1fr_1fr_0.8fr] lg:items-center">
        <div>
          <p className="text-base font-bold text-sky-2">{EVENT_TAGLINE}</p>
          <h1 className="mt-3 text-4xl leading-[1.15] font-extrabold tracking-tight text-ink sm:text-5xl">
            {EVENT_NAME}
          </h1>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-2">
            {ORG_NAME}이 만들어가는 더 나은 내일의 교육
          </p>

          <Link
            href="/#apply"
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-sky px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-sky-2"
          >
            사전등록하기
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="overflow-hidden rounded-md border border-line bg-white">
          <div className="flex aspect-video items-center justify-center bg-sky-deep">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-2xl text-sky">
              ▶
            </span>
          </div>
          <p className="border-t border-line px-4 py-3 text-xs text-ink-2">소개 영상 준비 중</p>
        </div>

        <StatCards />
      </div>
    </section>
  );
}
