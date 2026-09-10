const NOTICE_LINKS = ["공지사항", "FAQ", "주차 안내"];

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
