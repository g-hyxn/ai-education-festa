import Link from "next/link";
import { EVENT_NAME, EVENT_TAGLINE, ORG_NAME } from "@/components/org-info";

const NOTICE_LINKS = ["공지사항", "FAQ", "주차 안내"];
const LEGAL_LINKS = ["이용약관", "개인정보처리방침", "사이트맵"];

export function SiteFooter() {
  return (
    <footer id="notice" className="scroll-mt-20 bg-ink text-white/70">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-lg font-bold text-white">알림마당</h2>
        <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
          {NOTICE_LINKS.map((label) => (
            <li key={label} className="flex items-center gap-2 text-sm">
              {label}
              <span className="text-xs text-white/40">(준비 중)</span>
            </li>
          ))}
        </ul>

        <div className="mt-14 flex flex-col justify-between gap-10 border-t border-white/10 pt-10 sm:flex-row">
          <div>
            <p className="text-xs text-white/50">{ORG_NAME}</p>
            <p className="mt-1 text-lg font-extrabold text-white">{EVENT_NAME}</p>
            <p className="mt-2 text-sm text-white/50">{EVENT_TAGLINE}</p>
          </div>

          <Link
            href="/#top"
            className="flex h-10 w-10 shrink-0 items-center justify-center self-start rounded-full border border-white/20 text-white/70 transition-colors hover:border-white/40 hover:text-white"
            aria-label="맨 위로"
          >
            ↑
          </Link>
        </div>

        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 border-t border-white/10 pt-6 text-sm">
          {LEGAL_LINKS.map((label) => (
            <span key={label} className="text-white/50">
              {label}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-col gap-2 text-xs text-white/40 sm:flex-row sm:flex-wrap sm:gap-x-4">
          <span>2026 {EVENT_NAME}</span>
          <span>주소 추후 확정</span>
          <span>TEL 추후 확정</span>
          <span>E-mail 추후 확정</span>
        </div>

        <p className="mt-4 text-xs text-white/30">
          Copyright © 2026 {EVENT_NAME}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
