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
            I'm Sakib Ahamed, a passionate Full Stack Developer specializing in
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
            When I'm not coding, I'm exploring new tools, building side
            projects, and constantly leveling up my skills. I'm open to
            freelance work and full-time opportunities.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
