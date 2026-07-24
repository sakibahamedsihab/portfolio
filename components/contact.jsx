"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";

export function Contact() {
  const contactMethods = [
    {
      icon: <FaEnvelope className="w-6 h-6" />,
      title: "Email",
      value: "sakiba505@gmail.com",
      href: "mailto:sakiba505@gmail.com",
      hoverColor: "group-hover:text-emerald-500 dark:group-hover:text-emerald-400",
    },
    {
      icon: <FaWhatsapp className="w-6 h-6" />,
      title: "WhatsApp",
      value: "Message Me",
      href: "https://wa.me/01892479883",
      hoverColor: "group-hover:text-green-500 dark:group-hover:text-green-400",
    },
    {
      icon: <FaLinkedin className="w-6 h-6" />,
      title: "LinkedIn",
      value: "Connect with me",
      href: "https://linkedin.com/in/sakib-ahamed-sihab",
      hoverColor: "group-hover:text-blue-600 dark:group-hover:text-blue-400",
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 px-6 border-t border-zinc-100 dark:border-zinc-900"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4 }}
          className="text-3xl md:text-4xl font-black text-zinc-900 dark:text-zinc-50 tracking-tight mb-6"
        >
          Get In Touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-base text-zinc-600 dark:text-zinc-400 mb-12 max-w-xl mx-auto leading-relaxed"
        >
          Whether you have a project in mind or just want to chat, feel free to
          reach out. I&apos;m always open to new opportunities.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
          }}
        >
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1, transition: { duration: 0.4 } },
              }}
              className="flex flex-col items-center p-8 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-emerald-500 transition-colors group cursor-pointer"
            >
              <div className="mb-4 text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-emerald-400 transition-colors">
                {method.icon}
              </div>
              <h3 className="text-xs font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-widest mb-2">
                {method.title}
              </h3>
              <p className="text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-400 font-medium">
                {method.value}
              </p>
            </motion.a>
          ))}
        </motion.div>

        {/* Extra social links (like GitHub) underneath */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4, delay: 0.6 }}
          className="flex justify-center mt-12"
        >
          <a
            href="https://github.com/sakibahamedsihab"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-3.5 border border-zinc-200 text-zinc-900 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100 dark:hover:bg-zinc-900 dark:hover:border-zinc-700 text-xs font-black uppercase tracking-widest transition-colors"
          >
            <FaGithub className="w-5 h-5" />
            <span>Check out my GitHub</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
