function IconPeople({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="8.5" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="16" cy="9" r="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3.5 18.5c.6-2.7 2.6-4.3 5-4.3s4.4 1.6 5 4.3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M14 18.5c.4-2 1.9-3.3 3.5-3.3s3.1 1.3 3.5 3.3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function IconCar({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M4 16v-3.2c0-.5.2-1 .6-1.4l1.6-1.6c.3-.3.7-.5 1.2-.5h9.2c.5 0 .9.2 1.2.5l1.6 1.6c.4.4.6.9.6 1.4V16"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M3 16h18v2.5a1 1 0 0 1-1 1h-1.5a1 1 0 0 1-1-1V17" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M5.5 17v1.5a1 1 0 0 0 1 1H8a1 1 0 0 0 1-1V17" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <circle cx="7.5" cy="14" r="1" fill="currentColor" />
      <circle cx="16.5" cy="14" r="1" fill="currentColor" />
    </svg>
  );
}

function IconClipboard({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="5.5" y="4.5" width="13" height="16" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
      <rect x="9" y="3" width="6" height="3" rx="1" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8.5 11h7M8.5 14.5h7M8.5 18h4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

const SUMMARY = [
  {
    icon: IconPeople,
    label: "행사장 혼잡도",
    badge: "실시간 (예시)",
    badgeTone: "bg-success/10 text-success",
    value: "보통 54%",
    fill: 54,
    barTone: "bg-sky",
    detail: "구역별 혼잡도는 아래에서 확인하세요.",
  },
  {
    icon: IconCar,
    label: "주차 안내",
    badge: "예시 데이터",
    badgeTone: "bg-line text-ink-2",
    value: "잔여 68대 / 500대",
    fill: 14,
    barTone: "bg-sky",
    detail: "주차 공간이 한정되어 대중교통 이용을 권장합니다.",
  },
  {
    icon: IconClipboard,
    label: "사전등록 현황",
    badge: "실시간 (예시)",
    badgeTone: "bg-success/10 text-success",
    value: "680명",
    fill: 68,
    barTone: "bg-sky",
    detail: "목표 1,000명 대비 68%",
  },
];

export function StatusSummary() {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {SUMMARY.map((stat) => (
        <div key={stat.label} className="rounded-md border border-line bg-white p-5">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-md bg-sky text-white">
              <stat.icon className="h-4.5 w-4.5" />
            </span>
            <p className="text-sm font-bold text-ink">{stat.label}</p>
            <span
              className={`ml-auto rounded px-1.5 py-0.5 text-[11px] font-semibold ${stat.badgeTone}`}
            >
              {stat.badge}
            </span>
          </div>
          <p className="mt-4 text-2xl font-extrabold text-ink">{stat.value}</p>
          <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-line">
            <div className={`h-full rounded-full ${stat.barTone}`} style={{ width: `${stat.fill}%` }} />
          </div>
          <p className="mt-3 text-xs text-ink-2">{stat.detail}</p>
        </div>
      ))}
    </div>
  );
}
