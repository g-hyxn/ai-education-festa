const DAYS = [
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

const PROGRAMS = [
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

export function Schedule() {
  return (
    <section id="schedule" className="scroll-mt-20 bg-paper py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          통합 타임라인
        </h2>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-ink/60">
          개막식부터 골든벨, 특강까지 전체 일정을 한눈에 확인하세요. 세부
          일정은 추후 업데이트될 수 있습니다.
        </p>

        <div className="mt-12 grid gap-10 md:grid-cols-2">
          {DAYS.map((day) => (
            <div key={day.date}>
              <p className="text-sm font-semibold text-sky">{day.date}</p>
              <ol className="mt-4 border-t border-line">
                {day.sessions.map((session) => (
                  <li
                    key={session.time + session.title}
                    className="flex gap-6 border-b border-line py-4"
                  >
                    <span className="w-32 shrink-0 text-sm text-ink/50">
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

        <h3 className="mt-20 text-lg font-bold text-ink">
          프로그램 운영 현황
        </h3>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[560px] text-left text-sm">
            <thead>
              <tr className="border-b border-ink/15 text-ink/50">
                <th className="py-3 pr-4 font-medium">프로그램</th>
                <th className="py-3 pr-4 font-medium">대상</th>
                <th className="py-3 pr-4 font-medium">일정</th>
                <th className="py-3 font-medium">인원</th>
              </tr>
            </thead>
            <tbody>
              {PROGRAMS.map((program) => (
                <tr key={program.name} className="border-b border-line">
                  <td className="py-3 pr-4 font-semibold text-ink">
                    {program.name}
                  </td>
                  <td className="py-3 pr-4 text-ink/70">{program.target}</td>
                  <td className="py-3 pr-4 text-ink/70">{program.when}</td>
                  <td className="py-3 text-ink/70">{program.capacity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
