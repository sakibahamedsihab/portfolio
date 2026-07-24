"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/lib/theme-provider";
import { useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";

export function GithubGraph() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const explicitTheme = {
    light: ['#f4f4f5', '#d1fae5', '#6ee7b7', '#10b981', '#047857'],
    dark: ['#18181b', '#064e3b', '#047857', '#10b981', '#34d399'],
  };

  return (
    <section className="py-24 px-6 border-t border-zinc-100 dark:border-zinc-900">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4 }}
          className="text-3xl md:text-4xl font-black text-zinc-900 dark:text-zinc-50 tracking-tight mb-12 font-display"
        >
          <span className="text-zinc-400 dark:text-emerald-600 font-mono">{"</ "}</span>
          Contributions
          <span className="text-zinc-400 dark:text-emerald-600 font-mono">{" >"}</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex justify-center p-8 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800"
        >
          <div className="w-full overflow-x-auto scrollbar-hide flex justify-center">
            {mounted && (
              <GitHubCalendar 
                username="sakibahamedsihab" 
                theme={explicitTheme}
                colorScheme={theme === 'dark' ? 'dark' : 'light'}
                blockSize={14}
                blockMargin={5}
                fontSize={14}
              />
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
