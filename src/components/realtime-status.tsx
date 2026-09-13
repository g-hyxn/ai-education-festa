const RECEPTION_STATUS_TONE: Record<string, string> = {
  마감임박: "bg-warning/10 text-warning",
  접수중: "bg-success/10 text-success",
  마감: "bg-line text-ink-2",
};

const RECEPTION = [
  {
    time: "오전",
    tag: "학생",
    name: "학생 사전등록",
    status: "마감임박",
    current: 206,
    capacity: 250,
    barTone: "bg-warning",
  },
  {
    time: "오후",
    tag: "학생",
    name: "학생 사전등록",
    status: "접수중",
    current: 130,
    capacity: 250,
    barTone: "bg-success",
  },
  {
    time: "오후",
    tag: "학생",
    name: "AI·SW 골든벨",
    status: "마감임박",
    current: 48,
    capacity: 50,
    barTone: "bg-warning",
  },
  {
    time: "오전",
    tag: "학생",
    name: "AI교육원 탐방 (오디세이 투어)",
    status: "마감",
    current: 16,
    capacity: 16,
    barTone: "bg-line",
  },
  {
    time: "오후",
    tag: "학생",
    name: "AI교육원 탐방 (오디세이 투어)",
    status: "접수중",
    current: 18,
    capacity: 32,
    barTone: "bg-success",
  },
  {
    time: "오전",
    tag: "교원",
    name: "미래교육 특강",
    status: "접수중",
    current: 210,
    capacity: 300,
    barTone: "bg-success",
  },
];

const CROWD_TONE: Record<string, string> = {
  여유: "text-success",
  보통: "text-warning",
  혼잡: "text-danger",
  "매우 혼잡": "text-danger",
};

const CROWD_BAR_TONE: Record<string, string> = {
  여유: "bg-success",
  보통: "bg-warning",
  혼잡: "bg-danger",
  "매우 혼잡": "bg-danger",
};

const CROWD = [
  { zone: "1층 체험 부스", status: "혼잡", fill: 88 },
  { zone: "2층 상설 체험", status: "보통", fill: 55 },
  { zone: "골든벨 강당", status: "여유", fill: 24 },
  { zone: "교사 연수실", status: "보통", fill: 50 },
];

export function RealtimeStatus() {
  return (
    <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
      <div className="rounded-md border border-line bg-white p-6">
        <h2 className="text-base font-bold text-ink">실시간 접수 현황</h2>
        <p className="mt-1 text-xs text-ink-2">
          프로그램별 정원 대비 접수 상태 (예시 데이터)
        </p>

        <ul className="mt-6 divide-y divide-line">
          {RECEPTION.map((slot, i) => (
            <li key={`${slot.name}-${slot.time}-${i}`} className="py-4 first:pt-0 last:pb-0">
              <div className="flex items-center gap-2">
                <span className="rounded-sm bg-paper px-2 py-0.5 text-xs font-semibold text-ink-2">
                  {slot.time}
                </span>
                <p className="text-sm font-bold text-ink">{slot.name}</p>
                <span className="rounded-sm bg-paper px-2 py-0.5 text-xs font-semibold text-ink-2">
                  {slot.tag}
                </span>
                <span
                  className={`ml-auto rounded-sm px-2 py-0.5 text-xs font-bold ${RECEPTION_STATUS_TONE[slot.status]}`}
                >
                  {slot.status}
                </span>
              </div>
              <div className="mt-2 flex items-center gap-3">
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-line">
                  <div
                    className={`h-full rounded-full ${slot.barTone}`}
                    style={{ width: `${(slot.current / slot.capacity) * 100}%` }}
                  />
                </div>
                <p className="shrink-0 text-xs text-ink-2">
                  {slot.current}/{slot.capacity}명
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-md border border-line bg-white p-6">
        <h2 className="text-base font-bold text-ink">실시간 행사 혼잡도</h2>
        <p className="mt-1 text-xs text-ink-2">구역별 혼잡도 (예시 데이터)</p>

        <ul className="mt-6 divide-y divide-line">
          {CROWD.map((zone) => (
            <li key={zone.zone} className="py-4 first:pt-0 last:pb-0">
              <div className="flex items-center justify-between">
                <p className="text-sm font-bold text-ink">{zone.zone}</p>
                <span className={`text-xs font-bold ${CROWD_TONE[zone.status]}`}>
                  {zone.status}
                </span>
              </div>
              <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-line">
                <div
                  className={`h-full rounded-full ${CROWD_BAR_TONE[zone.status]}`}
                  style={{ width: `${zone.fill}%` }}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
