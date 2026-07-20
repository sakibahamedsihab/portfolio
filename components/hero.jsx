"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center max-w-2xl"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 mb-6 tracking-widest uppercase"
        >
          Hello, I&apos;m
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-6xl md:text-8xl font-black text-zinc-900 dark:text-zinc-50 mb-6 tracking-tighter leading-none"
        >
          PRIYANKA
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="text-sm uppercase tracking-widest font-semibold text-zinc-400 dark:text-zinc-500 mb-8"
        >
          Web Developer
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.4 }}
          className="text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-12 max-w-md mx-auto leading-relaxed font-medium"
        >
          I build clean, performant web experiences with modern technologies.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#projects"
            className="px-8 py-3.5 bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-200 text-white text-xs font-black uppercase tracking-widest transition-colors"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-zinc-50 text-xs font-black uppercase tracking-widest hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          >
            Contact Me
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
