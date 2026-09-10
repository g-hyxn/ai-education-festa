import Link from "next/link";

type Crumb = { label: string; href?: string };

export function PageBanner({
  title,
  crumbs,
}: {
  title: string;
  crumbs: Crumb[];
}) {
  return (
    <div>
      <div className="hero-mesh relative overflow-hidden py-14 text-center text-white">
        <div className="hero-grid absolute inset-0" aria-hidden="true" />
        <h1 className="relative text-3xl font-extrabold tracking-tight sm:text-4xl">
          {title}
        </h1>
      </div>
      <div className="border-b border-line bg-paper">
        <div className="mx-auto flex max-w-6xl items-center gap-2 px-6 py-3 text-sm text-ink/55">
          <Link href="/" aria-label="홈" className="hover:text-ink">
            홈
          </Link>
          {crumbs.map((crumb, i) => (
            <span key={crumb.label} className="flex items-center gap-2">
              <span aria-hidden="true">›</span>
              {crumb.href && i < crumbs.length - 1 ? (
                <Link href={crumb.href} className="hover:text-ink">
                  {crumb.label}
                </Link>
              ) : (
                <span className="font-semibold text-ink">{crumb.label}</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
