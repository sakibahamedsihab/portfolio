"use client";

import dynamic from "next/dynamic";
import { useState } from "react";

import { LuUser, LuCode, LuZap, LuMail, LuFileText, LuMenu, LuX, LuGraduationCap } from "react-icons/lu";

const ThemeToggle = dynamic(
  () => import("./theme-toggle").then((mod) => mod.ThemeToggle),
  { ssr: false }
);

const navLinks = [
  { href: "/#about", label: "About", icon: LuUser },
  { href: "/#education", label: "Education", icon: LuGraduationCap },
  { href: "/#skills", label: "Skills", icon: LuZap },
  { href: "/#projects", label: "Projects", icon: LuCode },
  { href: "/#contact", label: "Contact", icon: LuMail },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/70 backdrop-blur-xl border-b border-zinc-200/50 dark:bg-zinc-950/70 dark:border-zinc-800/50 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a
              href="/"
              className="text-lg font-black tracking-widest uppercase text-zinc-900 dark:text-emerald-500 font-display transition-colors"
            >
              <span className="text-zinc-400 dark:text-emerald-600 font-mono">{"</ "}</span>
              Sakib
              <span className="text-zinc-400 dark:text-emerald-600 font-mono">{" >"}</span>
            </a>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs uppercase tracking-widest font-semibold transition-colors h-full flex items-center gap-2 border-b-2 relative top-[1px] border-transparent text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
              >
                <link.icon className="w-4 h-4 mb-[2px]" />
                {link.label}
              </a>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-widest font-bold transition-colors h-full flex items-center gap-2 border-b-2 relative top-[1px] border-transparent text-zinc-900 hover:text-zinc-700 dark:text-emerald-400 dark:hover:text-emerald-300"
            >
              <LuFileText className="w-4 h-4 mb-[2px]" />
              Resume
            </a>
            <ThemeToggle />
          </div>

          <div className="flex items-center md:hidden gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              className="p-2 border border-zinc-200 dark:border-zinc-800 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-zinc-500"
              >
                {mobileOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="4" y1="6" x2="20" y2="6" />
                    <line x1="4" y1="12" x2="20" y2="12" />
                    <line x1="4" y1="18" x2="20" y2="18" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white dark:bg-zinc-950 border-b border-zinc-100 dark:border-zinc-900">
          <div className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-xs uppercase tracking-widest font-semibold flex items-center gap-2 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors"
              >
                <link.icon className="w-4 h-4 mb-[2px]" />
                {link.label}
              </a>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="text-xs uppercase tracking-widest font-bold flex items-center gap-2 text-zinc-900 hover:text-zinc-700 dark:text-emerald-400 dark:hover:text-emerald-300 transition-colors pt-4 border-t border-zinc-100 dark:border-zinc-900 mt-2"
            >
              <LuFileText className="w-4 h-4 mb-[2px]" />
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
