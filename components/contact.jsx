"use client";

import { motion } from "framer-motion";

export function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6 border-t border-zinc-100 dark:border-zinc-900"
    >
      <div className="max-w-xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4 }}
          className="text-3xl md:text-4xl font-black text-zinc-900 dark:text-zinc-50 tracking-tight mb-6"
        >
          Get In Touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-base text-zinc-600 dark:text-zinc-400 mb-10 leading-relaxed"
        >
          Whether you have a project in mind or just want to chat, feel free to
          reach out. I&apos;m always open to new opportunities.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <a
            href="mailto:sakiba505@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-none dark:bg-gradient-to-r dark:from-emerald-600 dark:to-cyan-600 dark:hover:from-emerald-500 dark:hover:to-cyan-500 dark:shadow-[0_0_20px_rgba(16,185,129,0.2)] dark:hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] text-xs font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all duration-300"
          >
            Say Hello
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4, delay: 0.35 }}
          className="flex justify-center gap-1 mt-12"
        >
          <a
            href="https://github.com/sakibahamedsihab"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-900 dark:hover:border-zinc-100 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
            aria-label="GitHub"
          >
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="square"
              strokeLinejoin="miter"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>
          <a
            href="https://linkedin.com/in/sakib-ahamed-sihab"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-900 dark:hover:border-zinc-100 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
            aria-label="LinkedIn"
          >
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="square"
              strokeLinejoin="miter"
            >
              <rect width="20" height="20" x="2" y="2" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
