"use client";

import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { href: "#info", label: "박람회 안내" },
  { href: "#students", label: "학생마당" },
  { href: "#teachers", label: "교사마당" },
  { href: "#apply", label: "사전신청" },
  { href: "#notice", label: "알림마당" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-ink/95 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="text-base font-bold tracking-tight text-white">
          AI미래교육박람회
        </a>
        <nav className="hidden gap-7 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-white/75 transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#apply"
          className="rounded-sm bg-sky px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
        >
          사전신청
        </a>
      </div>
    </header>
  );
}
