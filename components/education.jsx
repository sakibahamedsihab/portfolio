"use client";

import { motion } from "framer-motion";
import { education } from "@/data/education";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4 }}
          className="text-3xl md:text-4xl font-black text-zinc-900 dark:text-zinc-50 tracking-widest uppercase mb-12 font-display"
        >
          <span className="text-zinc-400 dark:text-emerald-600 font-mono">{"</ "}</span>
          Education
          <span className="text-zinc-400 dark:text-emerald-600 font-mono">{" >"}</span>
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="space-y-8"
        >
          {education.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-8 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-emerald-500 transition-colors group relative overflow-hidden"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                <div>
                  <h3 className="text-[15px] font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-widest font-display mb-1">
                    {item.degree}
                  </h3>
                  {item.institution && (
                    <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                      {item.institution}
                    </p>
                  )}
                </div>
                <div className="text-xs uppercase tracking-widest font-bold text-zinc-500 dark:text-zinc-400 whitespace-nowrap md:text-right">
                  {item.duration}
                  {item.cgpa && (
                    <div className="mt-1 text-zinc-600 dark:text-zinc-300">
                      CGPA: {item.cgpa}
                    </div>
                  )}
                </div>
              </div>
              {item.description && (
                <p className="text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-400 leading-relaxed font-medium">
                  {item.description}
                </p>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
