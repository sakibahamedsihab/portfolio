"use client";

import { motion } from "framer-motion";

export function Stats() {
  const stats = [
    { label: "Years Experience", value: "5+" },
    { label: "Projects Delivered", value: "30+" },
    { label: "Client Satisfaction", value: "98%" },
  ];

  return (
    <section className="py-16 relative">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              className="text-center p-8 bg-white/80 dark:bg-zinc-900/60 backdrop-blur-md border border-zinc-200/50 dark:border-zinc-800/50 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300"
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
              }}
            >
              <p className="text-4xl font-black text-zinc-900 dark:text-emerald-400">{stat.value}</p>
              <p className="mt-2 text-sm uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
