const NOTICE_LINKS = ["공지사항", "FAQ", "주차 안내"];

export function SiteFooter() {
  return (
    <footer id="notice" className="scroll-mt-20 bg-ink-2 text-white/70">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-white/15 px-4 py-1.5 text-xs font-bold text-white">
            주최
          </span>
          <span className="text-sm text-white/60">추후 확정</span>
          <span className="ml-4 rounded-full bg-white/15 px-4 py-1.5 text-xs font-bold text-white">
            주관
          </span>
          <span className="text-sm text-white/60">추후 확정</span>
        </div>

        <h2 className="mt-12 text-lg font-bold text-white">알림마당</h2>
        <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
          {NOTICE_LINKS.map((label) => (
            <li key={label} className="flex items-center gap-2 text-sm">
              {label}
              <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-xs text-white/50">
                준비 중
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>주최 · 주관 정보는 추후 업데이트됩니다.</p>
          <p className="text-white/40">
            Copyright © 2026 AI미래교육박람회. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
