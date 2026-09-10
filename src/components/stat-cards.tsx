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

const STATS = [
  {
    icon: IconPeople,
    label: "행사장 혼잡도",
    badge: "실시간",
    badgeTone: "bg-success/10 text-success",
    value: "보통 65%",
    valueTone: "text-success",
    fill: 65,
    barTone: "bg-success",
    detail: "여유롭게 관람하실 수 있습니다.",
  },
  {
    icon: IconCar,
    label: "주차 안내",
    badge: "여유",
    badgeTone: "bg-info/10 text-info",
    value: "잔여 320대 / 500대",
    valueTone: "text-info",
    fill: 64,
    barTone: "bg-info",
    detail: "제1주차장 180대 · 제2주차장 140대",
  },
  {
    icon: IconClipboard,
    label: "사전등록 현황",
    badge: "누적",
    badgeTone: "bg-secondary/10 text-secondary",
    value: "3,482명",
    valueTone: "text-secondary",
    fill: 70,
    barTone: "bg-secondary",
    detail: "목표 5,000명 대비 70%",
  },
];

export function StatCards() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-ink-2">예시 화면 · 실제 데이터는 운영 중 실시간으로 반영됩니다</p>
      {STATS.map((stat) => (
        <div key={stat.label} className="rounded-md border border-line bg-white p-4">
          <div className="flex items-center gap-2">
            <stat.icon className="h-5 w-5 text-ink-2" />
            <p className="text-sm font-semibold text-ink-2">{stat.label}</p>
            <span className={`ml-auto rounded-sm px-2 py-0.5 text-xs font-bold ${stat.badgeTone}`}>
              {stat.badge}
            </span>
          </div>
          <p className={`mt-2 text-lg font-extrabold ${stat.valueTone}`}>{stat.value}</p>
          <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-line">
            <div className={`h-full rounded-full ${stat.barTone}`} style={{ width: `${stat.fill}%` }} />
          </div>
          <p className="mt-1.5 text-xs text-ink-2">{stat.detail}</p>
        </div>
      ))}
    </div>
  );
}
