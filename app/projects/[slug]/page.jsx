import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { LuExternalLink, LuGithub, LuArrowLeft, LuCircleCheck } from "react-icons/lu";
import { projects } from "@/data/projects";

// Generate static params for all projects
export function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export default async function ProjectDetails({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-24 pb-12 px-6">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-emerald-400 transition-colors mb-8"
        >
          <LuArrowLeft className="w-4 h-4 mb-[2px]" />
          Back to Portfolio
        </Link>

        <h1 className="text-4xl md:text-6xl font-black font-display text-zinc-900 dark:text-zinc-50 tracking-widest uppercase mb-6 leading-none">
          {project.title}
        </h1>

        <div className="flex flex-wrap gap-2 mb-10">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs uppercase tracking-widest font-semibold px-3 py-1.5 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-300"
            >
              {tag}
            </span>
          ))}
        </div>

        {project.image && (
          <div className="relative aspect-video w-full mb-12 border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900">
            <Image
              src={project.image}
              alt={`${project.title} screenshot`}
              fill
              className="object-cover object-top"
              priority
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-8">
            <section>
              <h2 className="text-xl font-bold uppercase tracking-widest mb-4 font-display flex items-center gap-2">
                <span className="text-zinc-400 dark:text-emerald-600 font-mono">{"//"}</span>
                About the Project
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-zinc-600 dark:text-zinc-400 font-medium">
                {project.longDescription || project.description}
              </p>
            </section>

            {project.features && project.features.length > 0 && (
              <section>
                <h2 className="text-xl font-bold uppercase tracking-widest mb-4 font-display flex items-center gap-2">
                  <span className="text-zinc-400 dark:text-emerald-600 font-mono">{"//"}</span>
                  Key Features
                </h2>
                <ul className="space-y-3">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-zinc-600 dark:text-zinc-400 font-medium">
                      <LuCircleCheck className="w-5 h-5 text-emerald-500 shrink-0 mt-[1px]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {project.challenges && (
              <section>
                <h2 className="text-xl font-bold uppercase tracking-widest mb-4 font-display flex items-center gap-2">
                  <span className="text-zinc-400 dark:text-emerald-600 font-mono">{"//"}</span>
                  Challenges Faced
                </h2>
                <p className="text-sm md:text-base leading-relaxed text-zinc-600 dark:text-zinc-400 font-medium border-l-2 border-emerald-500 pl-4 py-1">
                  {project.challenges}
                </p>
              </section>
            )}

            {project.futurePlans && (
              <section>
                <h2 className="text-xl font-bold uppercase tracking-widest mb-4 font-display flex items-center gap-2">
                  <span className="text-zinc-400 dark:text-emerald-600 font-mono">{"//"}</span>
                  Future Plans
                </h2>
                <p className="text-sm md:text-base leading-relaxed text-zinc-600 dark:text-zinc-400 font-medium border-l-2 border-cyan-500 pl-4 py-1">
                  {project.futurePlans}
                </p>
              </section>
            )}
          </div>

          <div className="space-y-6">
            <h2 className="text-xl font-bold uppercase tracking-widest mb-4 font-display flex items-center gap-2">
              <span className="text-zinc-400 dark:text-emerald-600 font-mono">{"//"}</span>
              Links
            </h2>
            
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-gradient-to-r dark:from-emerald-600 dark:to-cyan-600 dark:hover:from-emerald-500 dark:hover:to-cyan-500 font-black uppercase tracking-widest transition-all text-xs"
              >
                <LuExternalLink className="w-4 h-4 mb-[1px]" />
                Live Demo
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-6 py-4 border-2 border-zinc-900 text-zinc-900 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800 font-black uppercase tracking-widest transition-colors text-xs"
              >
                <LuGithub className="w-4 h-4 mb-[1px]" />
                Source Code
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
