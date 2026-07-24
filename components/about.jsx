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
          className="text-3xl md:text-4xl font-black text-zinc-900 dark:text-zinc-50 tracking-tight mb-8"
        >
          About Me
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="space-y-6 text-base text-zinc-600 dark:text-zinc-300 leading-relaxed"
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            I&apos;m Sakib Ahamed, a passionate Full Stack Developer specializing in
            the MERN stack. I love turning real-world problems into clean,
            scalable web applications that make a genuine impact.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            I build end-to-end applications using React.js, Next.js, Node.js,
            Express, and MongoDB. I care deeply about clean code, great UX,
            and shipping products that work reliably in production.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            When I&apos;m not coding, I&apos;m exploring new tools, building side
            projects, and constantly leveling up my skills. I&apos;m open to
            freelance work and full-time opportunities.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
