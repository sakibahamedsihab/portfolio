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
          className="text-xs font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-widest mb-12"
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
                className="text-xs font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-widest mb-5"
              >
                {category.category}
              </motion.h3>
              <motion.ul
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                className="space-y-2"
              >
                {category.skills.map((skill) => (
                  <motion.li
                    key={skill}
                    variants={itemVariants}
                    className="flex items-center gap-2.5 px-3 py-2 border border-zinc-200 dark:border-zinc-800 text-xs uppercase tracking-wider font-medium text-zinc-600 dark:text-zinc-400"
                  >
                    <span className="text-sm shrink-0 text-zinc-500 dark:text-zinc-400">
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
