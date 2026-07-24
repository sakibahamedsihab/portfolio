"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/data/skills";
import { skillIconMap } from "@/lib/skill-icons";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4 }}
          className="text-3xl md:text-4xl font-black text-zinc-900 dark:text-zinc-50 tracking-tight mb-12"
        >
          Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div key={category.category}>
              <motion.h3
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-5"
              >
                {category.category}
              </motion.h3>
              <motion.ul
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                className="flex flex-wrap gap-4"
              >
                {category.skills.map((skill) => (
                  <motion.li
                    key={skill}
                    variants={itemVariants}
                    className="flex items-center gap-3 px-6 py-4 bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800/80 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:border-zinc-300 dark:hover:border-emerald-500/70 transition-all text-sm md:text-base uppercase tracking-wider font-bold text-zinc-800 dark:text-zinc-200 cursor-default shadow-sm hover:shadow-md dark:shadow-none"
                  >
                    <span className="text-xl md:text-2xl shrink-0 text-zinc-600 dark:text-emerald-400">
                      {skillIconMap[skill] ?? null}
                    </span>
                    {skill}
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
