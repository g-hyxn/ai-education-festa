type NavChild = { label: string; href: string; soon?: boolean };
type NavItem = { label: string; href: string; children: NavChild[] };

const NAV_ITEMS: NavItem[] = [
  {
    label: "박람회 안내",
    href: "#top",
    children: [
      { label: "행사 개요", href: "#top" },
      { label: "전체 일정표", href: "#schedule" },
      { label: "부스 배치도", href: "#", soon: true },
      { label: "오시는 길", href: "#", soon: true },
    ],
  },
  {
    label: "학생마당",
    href: "#students",
    children: [
      { label: "체험 부스 안내", href: "#students" },
      { label: "AI·SW 골든벨", href: "#students" },
      { label: "오디세이 투어", href: "#students" },
    ],
  },
  {
    label: "교사마당",
    href: "#teachers",
    children: [
      { label: "부스 안내", href: "#teachers" },
      { label: "교사 연수", href: "#teachers" },
      { label: "AI전남광주 미래교육", href: "#teachers" },
    ],
  },
  {
    label: "사전신청",
    href: "#apply",
    children: [
      { label: "학생·교사 사전등록", href: "#apply" },
      { label: "골든벨 신청 (학생)", href: "#apply" },
      { label: "오디세이 투어 신청 (학생)", href: "#apply" },
      { label: "연수 신청 (교사)", href: "#apply" },
      { label: "특강 신청 (전체)", href: "#apply" },
      { label: "신청 내역 조회·취소", href: "#", soon: true },
    ],
  },
  {
    label: "알림마당",
    href: "#notice",
    children: [
      { label: "공지사항", href: "#notice" },
      { label: "FAQ", href: "#notice" },
      { label: "주차 안내", href: "#notice" },
    ],
  },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5">
        <a href="#top" className="text-base font-extrabold tracking-tight text-ink">
          AI미래교육박람회
        </a>
        <nav className="hidden md:flex">
          {NAV_ITEMS.map((item) => (
            <div key={item.label} className="group relative">
              <a
                href={item.href}
                className="block px-4 py-3.5 text-sm font-medium text-ink/65 transition-colors hover:text-ink"
              >
                {item.label}
              </a>

              <div className="invisible absolute top-full left-1/2 w-56 -translate-x-1/2 opacity-0 transition-opacity duration-150 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                <ul className="border border-line bg-white py-2 shadow-sm">
                  {item.children.map((child) =>
                    child.soon ? (
                      <li
                        key={child.label}
                        className="flex items-center justify-between px-4 py-2 text-sm text-ink/35"
                      >
                        {child.label}
                        <span className="text-xs">준비 중</span>
                      </li>
                    ) : (
                      <li key={child.label}>
                        <a
                          href={child.href}
                          className="block px-4 py-2 text-sm text-ink/70 transition-colors hover:bg-paper hover:text-ink"
                        >
                          {child.label}
                        </a>
                      </li>
                    ),
                  )}
                </ul>
              </div>
            </div>
          ))}
        </nav>
        <a
          href="#apply"
          className="rounded-md bg-sky px-5 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
        >
          사전신청
        </a>
      </div>
    </header>
  );
}
