"use client";

import { motion } from "framer-motion";
import { LuArrowRight, LuBriefcase } from "react-icons/lu";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Subtle modern green gradient background glow - dark mode only */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] min-w-[400px] min-h-[400px] hidden dark:block dark:bg-emerald-500/20 blur-[100px] rounded-full pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative text-center max-w-2xl z-10"
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
          className="text-6xl md:text-8xl font-black font-display text-zinc-900 dark:text-transparent bg-clip-text dark:bg-gradient-to-r dark:from-emerald-400 dark:to-cyan-400 mb-6 tracking-tighter leading-none"
        >
          SAKIB AHAMED
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="text-sm uppercase tracking-widest font-semibold text-zinc-600 dark:text-emerald-400 mb-8"
        >
          Full Stack Developer
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.4 }}
          className="text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-12 max-w-md mx-auto leading-relaxed font-medium"
        >
          I build scalable, full-stack web apps with the MERN stack.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#projects"
            className="flex items-center justify-center gap-2 px-8 py-3.5 border border-zinc-200 text-zinc-900 hover:bg-zinc-50 dark:border-none dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700 text-xs font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <span>View Projects</span>
            <LuArrowRight className="w-4 h-4 mb-[2px]" />
          </a>
          <a
            href="#contact"
            className="flex items-center justify-center gap-2 px-8 py-3.5 bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-gradient-to-r dark:from-emerald-600 dark:to-cyan-600 dark:hover:from-emerald-500 dark:hover:to-cyan-500 dark:shadow-[0_0_20px_rgba(16,185,129,0.2)] dark:hover:shadow-[0_0_25px_rgba(16,185,129,0.4)] text-xs font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <LuBriefcase className="w-4 h-4 mb-[2px]" />
            <span>Hire Me</span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
