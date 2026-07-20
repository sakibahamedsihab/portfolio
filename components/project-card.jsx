"use client";

import { motion } from "framer-motion";

export function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors"
    >
      <div className="aspect-video bg-zinc-50 dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-300 dark:text-zinc-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="3" width="18" height="18" rx="0" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <path d="M21 15l-5-5L5 21" />
        </svg>
      </div>
      <div className="p-6">
        <h3 className="text-xs font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-widest mb-3">
          {project.title}
        </h3>
        <p className="text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-4 leading-relaxed font-medium">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] uppercase tracking-wider font-semibold px-2 py-1 border border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              className="text-xs font-bold uppercase tracking-widest text-zinc-900 dark:text-zinc-50 hover:underline"
            >
              Live Demo &rarr;
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              className="text-xs font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
            >
              Source Code &rarr;
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
