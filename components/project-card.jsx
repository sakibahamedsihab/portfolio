"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { LuExternalLink, LuGithub, LuInfo } from "react-icons/lu";

export function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-emerald-500 transition-colors overflow-hidden h-full flex flex-col"
    >
      {/* Project Screenshot */}
      <div className="aspect-video relative overflow-hidden bg-zinc-100 dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800">
        {project.image ? (
          <motion.div
            className="w-full h-full"
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <Image
              src={project.image}
              alt={`${project.title} screenshot`}
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </motion.div>
        ) : (
          <div className="w-full h-full flex items-center justify-center text-zinc-300 dark:text-zinc-700">
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
        )}
      </div>

      {/* Card Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-[13px] font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-widest mb-3 font-display">
          {project.title}
        </h3>
        <p className="text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-4 leading-relaxed font-medium flex-1">
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
      </div>
      <div className="p-6 pt-0 mt-auto flex items-center gap-3">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-emerald-500/10 dark:hover:bg-emerald-500/20 dark:text-emerald-400 text-[11px] font-black uppercase tracking-widest transition-colors border border-transparent dark:border-emerald-500/20"
          >
            <LuExternalLink className="w-3.5 h-3.5 mb-[1px]" />
            Live Demo
          </a>
        )}
        <Link
          href={`/projects/${project.slug}`}
          className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-zinc-100 hover:bg-zinc-200 text-zinc-900 dark:bg-zinc-900 dark:hover:bg-zinc-800 dark:text-zinc-300 text-[11px] font-black uppercase tracking-widest transition-colors border border-zinc-200 dark:border-zinc-800"
        >
          <LuInfo className="w-3.5 h-3.5 mb-[1px]" />
          Details
        </Link>
      </div>
    </motion.div>
  );
}
