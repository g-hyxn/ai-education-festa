const INFO_ITEMS = [
  { label: "일시", value: "2026. 10. 31.(토) – 11. 1.(일)" },
  { label: "장소", value: "추후 공지" },
  { label: "대상", value: "학생 · 학부모 · 교원 · 일반" },
  { label: "참가비", value: "무료" },
];

export function EventInfo() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-6xl gap-8 border-b border-line px-6 py-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-line">
        {INFO_ITEMS.map((item) => (
          <div key={item.label} className="lg:px-8 lg:first:pl-0">
            <p className="text-sm text-ink/50">{item.label}</p>
            <p className="mt-1 text-lg font-semibold text-ink">{item.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
