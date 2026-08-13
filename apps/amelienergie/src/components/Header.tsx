"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav } from "@/lib/content";
import BrandLogo from "./BrandLogo";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ember/15 bg-paper/90 text-ink backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <BrandLogo onClick={() => setOpen(false)} />

        <nav className="hidden items-center gap-8 text-sm uppercase tracking-[0.12em] md:flex">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative py-1 transition-colors hover:text-ember ${
                  active ? "text-ember" : "text-ink/70"
                }`}
              >
                {item.label}
                {active && (
                  <span className="absolute -bottom-1 left-0 h-px w-full bg-ember" />
                )}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          aria-label="Ouvrir le menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-px w-6 bg-ink transition-transform ${open ? "translate-y-[3px] rotate-45" : ""}`}
          />
          <span
            className={`h-px w-6 bg-ink transition-transform ${open ? "-translate-y-[3px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-ember/15 px-6 py-4 text-sm uppercase tracking-[0.12em] md:hidden">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`py-2 ${pathname === item.href ? "text-ember" : "text-ink/70"}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
