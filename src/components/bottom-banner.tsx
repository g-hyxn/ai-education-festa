import { EVENT_TAGLINE, ORG_NAME } from "@/components/org-info";

export function BottomBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#1c4fb0] via-sky to-teal py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl font-bold sm:text-3xl">{EVENT_TAGLINE}</h2>
        <p className="mt-3 text-base text-white/85">
          오늘의 배움이 내일의 더 큰 가능성이 됩니다.
        </p>
        <p className="mt-1 text-sm text-white/70">
          {ORG_NAME}이 만들어가는 지속 가능한 미래교육
        </p>
      </div>
    </section>
  );
}
