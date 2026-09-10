import Link from "next/link";
import { StatCards } from "@/components/stat-cards";
import { EVENT_NAME, EVENT_TAGLINE, ORG_NAME } from "@/components/org-info";

const FEATURE_WORDS = ["보고", "체험하고", "함께 여는 미래"];

export function Hero() {
  return (
    <section id="top" className="bg-gradient-to-b from-[#eaf2ff] to-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 pt-14 pb-16 lg:grid-cols-[1.1fr_1fr_0.8fr] lg:items-center">
        <div>
          <p className="-rotate-1 text-lg font-bold text-sky italic">{EVENT_TAGLINE}</p>
          <h1 className="mt-3 text-4xl leading-[1.15] font-extrabold tracking-tight text-ink sm:text-5xl">
            {EVENT_NAME}
          </h1>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink/60">
            {ORG_NAME}이 만들어가는 더 나은 내일의 교육
          </p>

          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-ink/70">
            {FEATURE_WORDS.map((word) => (
              <li key={word} className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-sky" />
                {word}
              </li>
            ))}
          </ul>

          <p className="mt-5 text-sm font-semibold text-ink/70">
            2026. 10. 31.(토) – 11. 1.(일) · 장소 추후 공지 · 무료
          </p>

          <Link
            href="/#apply"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-sky px-7 py-3.5 text-sm font-bold text-white transition-opacity hover:opacity-90"
          >
            사전등록하기
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="overflow-hidden rounded-2xl border border-line bg-ink text-white">
          <div className="flex aspect-video items-center justify-center bg-gradient-to-br from-[#123a8a] to-[#0a2d63]">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-2xl text-sky">
              ▶
            </span>
          </div>
          <p className="px-4 py-3 text-xs text-white/70">소개 영상 준비 중</p>
        </div>

        <StatCards />
      </div>
    </section>
  );
}
