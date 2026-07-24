"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const placeholderTestimonials = [
  {
    quote: "Sakib delivered a flawless MERN application ahead of schedule. Highly recommended!",
    author: "Jane Doe, CTO at Acme Corp",
    avatar: "/images/avatar-placeholder.png",
  },
  {
    quote: "Professional, responsive, and wrote clean code. Our platform's performance improved dramatically.",
    author: "John Smith, Founder of StartupXYZ",
    avatar: "/images/avatar-placeholder.png",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 relative">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-center text-3xl font-black text-zinc-900 dark:text-zinc-50 mb-12">
          What Clients Say
        </h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
        >
          {placeholderTestimonials.map((t, i) => (
            <motion.blockquote
              key={i}
              className="p-8 bg-white/80 dark:bg-zinc-900/60 backdrop-blur-md border border-zinc-200/50 dark:border-zinc-800/50 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex flex-col justify-between hover:-translate-y-1 transition-all duration-300"
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
              }}
            >
              <p className="text-sm italic text-zinc-600 dark:text-zinc-300 mb-6">&quot;{t.quote}&quot;</p>
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden">
                  <Image
                    src={t.avatar}
                    alt={t.author}
                    fill
                    className="object-cover"
                    sizes="40px"
                  />
                </div>
                <span className="text-xs font-medium text-zinc-800 dark:text-zinc-200">
                  {t.author}
                </span>
              </div>
            </motion.blockquote>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
