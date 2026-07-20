"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4 }}
          className="text-xs font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-widest mb-8"
        >
          About Me
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="space-y-4 text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-400 leading-relaxed font-medium"
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            I&apos;m a web developer with a passion for building clean,
            user-friendly applications. I enjoy turning complex problems into
            simple, beautiful solutions that make a real impact.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            I specialize in modern web technologies including React, Next.js,
            TypeScript, and Node.js. I&apos;m always exploring new tools and
            techniques to improve my craft.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            When I&apos;m not coding, you&apos;ll find me exploring new tech,
            contributing to open source, or working on side projects that
            challenge my skills and creativity.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
