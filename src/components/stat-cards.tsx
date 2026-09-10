const STATS = [
  {
    icon: "👥",
    label: "행사장 혼잡도",
    badge: "실시간",
    badgeTone: "bg-teal/10 text-teal",
    value: "보통 65%",
    valueTone: "text-teal",
    fill: 65,
    barTone: "bg-teal",
    detail: "여유롭게 관람하실 수 있습니다.",
  },
  {
    icon: "🚗",
    label: "주차 안내",
    badge: "여유",
    badgeTone: "bg-sky/10 text-sky",
    value: "잔여 320대 / 500대",
    valueTone: "text-sky",
    fill: 64,
    barTone: "bg-sky",
    detail: "제1주차장 180대 · 제2주차장 140대",
  },
  {
    icon: "📝",
    label: "사전등록 현황",
    badge: "누적",
    badgeTone: "bg-violet/10 text-violet",
    value: "3,482명",
    valueTone: "text-violet",
    fill: 70,
    barTone: "bg-violet",
    detail: "목표 5,000명 대비 70%",
  },
];

export function StatCards() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-ink/40">예시 화면 · 실제 데이터는 운영 중 실시간으로 반영됩니다</p>
      {STATS.map((stat) => (
        <div key={stat.label} className="rounded-2xl border border-line bg-white p-4">
          <div className="flex items-center gap-2">
            <span className="text-lg">{stat.icon}</span>
            <p className="text-sm font-semibold text-ink/70">{stat.label}</p>
            <span className={`ml-auto rounded-full px-2 py-0.5 text-xs font-bold ${stat.badgeTone}`}>
              {stat.badge}
            </span>
          </div>
          <p className={`mt-2 text-lg font-extrabold ${stat.valueTone}`}>{stat.value}</p>
          <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-line">
            <div className={`h-full rounded-full ${stat.barTone}`} style={{ width: `${stat.fill}%` }} />
          </div>
          <p className="mt-1.5 text-xs text-ink/45">{stat.detail}</p>
        </div>
      ))}
    </div>
  );
}
