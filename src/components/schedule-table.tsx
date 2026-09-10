export const SCHEDULE_DAYS = [
  {
    date: "10. 31. (토)",
    sessions: [
      { time: "09:30 – 17:00", title: "AI·SW 교육 체험마당" },
      { time: "09:30 – 17:00", title: "AI코스웨어 및 에듀테크 체험 (2층)" },
      { time: "10:30 – 11:00", title: "개막식 (3층 대강당)" },
      { time: "11:00 – 12:30", title: "기조강연 (3층 대강당)" },
      { time: "13:30 – 14:30", title: "초등 골든벨 (3층 대강당)" },
    ],
  },
  {
    date: "11. 1. (일)",
    sessions: [
      { time: "09:30 – 16:00", title: "AI·SW 교육 체험마당" },
      { time: "09:30 – 16:00", title: "AI코스웨어 및 에듀테크 체험 (2층)" },
      { time: "11:00 – 12:00", title: "중·고등 골든벨 (3층 대강당)" },
      { time: "16:00 – 16:30", title: "폐막식" },
    ],
  },
];

export const SCHEDULE_PROGRAMS = [
  {
    name: "사전 등록",
    target: "학생 · 교사 · 일반",
    when: "전 일정",
    capacity: "1,000명 (학생·일반 합산) · 교사 제한 없음",
  },
  {
    name: "오디세이 투어",
    target: "학생",
    when: "10.31",
    capacity: "팀당 8명",
  },
  { name: "골든벨", target: "학생", when: "10.31, 11.1", capacity: "각 50명" },
  { name: "교사 연수", target: "교사", when: "추후 안내", capacity: "미정" },
  {
    name: "특강",
    target: "학생 · 교사 · 일반",
    when: "10.31 11:00",
    capacity: "선착순 300명",
  },
];

export function ScheduleTable() {
  return (
    <>
      <div className="grid gap-8 md:grid-cols-2">
        {SCHEDULE_DAYS.map((day) => (
          <div
            key={day.date}
            className="overflow-hidden rounded-md border border-line bg-white"
          >
            <p className="bg-sky-deep px-6 py-4 text-sm font-bold text-white">
              {day.date}
            </p>
            <ol>
              {day.sessions.map((session, i) => (
                <li
                  key={session.time + session.title}
                  className={`flex gap-6 px-6 py-4 ${i % 2 === 1 ? "bg-paper" : "bg-white"}`}
                >
                  <span className="w-32 shrink-0 text-sm text-ink-2">
                    {session.time}
                  </span>
                  <span className="text-sm font-medium text-ink">
                    {session.title}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>

      <h3 className="mt-20 text-lg font-bold text-ink">프로그램 운영 현황</h3>
      <div className="mt-6 overflow-x-auto rounded-md border border-line bg-white">
        <table className="w-full min-w-[560px] border-collapse text-left text-sm">
          <thead>
            <tr className="bg-sky-deep text-white">
              <th className="px-6 py-4 font-bold">프로그램</th>
              <th className="px-6 py-4 font-bold">대상</th>
              <th className="px-6 py-4 font-bold">일정</th>
              <th className="px-6 py-4 font-bold">인원</th>
            </tr>
          </thead>
          <tbody>
            {SCHEDULE_PROGRAMS.map((program, i) => (
              <tr
                key={program.name}
                className={`transition-colors hover:bg-sky-subtle ${i % 2 === 1 ? "bg-paper" : "bg-white"}`}
              >
                <td className="px-6 py-4 font-semibold text-ink">{program.name}</td>
                <td className="px-6 py-4 text-ink-2">{program.target}</td>
                <td className="px-6 py-4 text-ink-2">{program.when}</td>
                <td className="px-6 py-4 text-ink-2">{program.capacity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
