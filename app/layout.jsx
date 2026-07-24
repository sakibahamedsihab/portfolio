import { Space_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/lib/theme-provider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Sakib Ahamed — Full Stack Developer",
  description:
    "Portfolio of Sakib Ahamed, a MERN Stack Developer specializing in React, Node.js, Express, and MongoDB.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${spaceMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <Script id="theme-init" strategy="beforeInteractive">
          {`
            (function() {
              try {
                var theme = localStorage.getItem('theme');
                if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                }
              } catch(e) {}
            })();
          `}
        </Script>
      </head>
      <body className="relative min-h-full flex flex-col bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50 transition-colors duration-300">
        <ThemeProvider>
          {/* Global Background Textures */}
          <div className="fixed inset-0 z-[-1] pointer-events-none">
            {/* Light mode grid */}
            <div className="absolute inset-0 dark:hidden bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
            {/* Dark mode grid */}
            <div className="absolute inset-0 hidden dark:block bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px]" />
            {/* Ambient subtle orbs in dark mode */}
            <div className="absolute inset-0 hidden dark:block overflow-hidden">
              <div className="absolute top-1/4 -right-1/4 w-[500px] h-[500px] bg-emerald-500/10 blur-[120px] rounded-full" />
              <div className="absolute bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-cyan-500/10 blur-[120px] rounded-full" />
            </div>
          </div>
          <Header />
          <main className="flex-grow flex flex-col z-0">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
