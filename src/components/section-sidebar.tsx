import Link from "next/link";

type SidebarLink = { label: string; href: string };

export function SectionSidebar({
  items,
  current,
}: {
  items: SidebarLink[];
  current: string;
}) {
  return (
    <nav aria-label="하위 메뉴" className="flex gap-3 overflow-x-auto pb-2 md:block md:overflow-visible md:pb-0">
      {items.map((item) => {
        const active = item.label === current;
        return (
          <Link
            key={item.label}
            href={item.href}
            aria-current={active ? "page" : undefined}
            className={`block shrink-0 rounded-lg border px-5 py-3 text-sm font-semibold whitespace-nowrap md:mb-3 md:whitespace-normal ${
              active
                ? "border-sky bg-sky text-white"
                : "border-line bg-white text-ink/70 hover:border-sky/40 hover:text-ink"
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
