export function Footer() {
  return (
    <footer className="bg-white border-t border-zinc-100 dark:bg-zinc-950 dark:border-zinc-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="flex flex-col gap-4">
            <a
              href="#"
              className="text-lg font-black tracking-tight uppercase text-zinc-900 dark:text-zinc-50"
            >
              Portfolio
            </a>
            <p className="text-xs leading-relaxed text-zinc-500 dark:text-zinc-400 max-w-xs">
              A web developer building clean, performant web experiences with
              modern technologies.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-widest mb-5">
              Navigation
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#about"
                  className="text-xs uppercase tracking-wider font-medium text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-xs uppercase tracking-wider font-medium text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-xs uppercase tracking-wider font-medium text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-xs uppercase tracking-wider font-medium text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-widest mb-5">
              Social
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs uppercase tracking-wider font-medium text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs uppercase tracking-wider font-medium text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-widest">
              Connect
            </h3>
            <div className="flex items-center gap-1">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-900 dark:hover:border-zinc-100 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
                aria-label="GitHub"
              >
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="square"
                  strokeLinejoin="miter"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-900 dark:hover:border-zinc-100 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
                aria-label="LinkedIn"
              >
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="square"
                  strokeLinejoin="miter"
                >
                  <rect width="20" height="20" x="2" y="2" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-zinc-100 dark:border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs tracking-wide text-zinc-400 dark:text-zinc-500 uppercase">
            &copy; {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">
            <a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
