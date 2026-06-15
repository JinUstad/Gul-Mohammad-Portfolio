"use client";

import { motion } from "framer-motion";
import { ExternalLink, Globe, FolderCode, FileSpreadsheet, ShoppingBag } from "lucide-react";

const projects = [
  {
    title: "Resume Builder",
    techStack: ["React.js", "Bootstrap", "HTML5", "CSS3"],
    category: "Frontend Web Application",
    icon: <FileSpreadsheet className="w-5 h-5 text-neon-blue" />,
    gradient: "from-[#00f0ff] to-[#3b82f6]",
    glow: "rgba(0, 240, 255, 0.2)",
    features: [
      "Dynamic Form Handling with real-time state sync.",
      "Live PDF Preview showing formatting updates instantly.",
      "Export to PDF layout with standard print formatting.",
      "Responsive, clean UI optimizing input fields across screens.",
    ],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Bag E-Commerce Website",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB"],
    category: "Full Stack Web Application",
    icon: <ShoppingBag className="w-5 h-5 text-neon-purple" />,
    gradient: "from-[#a855f7] to-[#ec4899]",
    glow: "rgba(168, 85, 247, 0.2)",
    features: [
      "Dynamic Product Catalog separated by categories.",
      "Custom Backend APIs for orders and product management.",
      "Cloud-based Image Upload for products.",
      "Fully responsive checkout flow and user-friendly interface.",
    ],
    liveLink: "#",
    githubLink: "#",
  },
];

export default function Projects() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background neon lights */}
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-neon-purple/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 rounded-full bg-neon-blue/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Title */}
        <div className="text-center md:text-left mb-20">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display font-extrabold text-4xl md:text-5xl tracking-tight text-white mb-2"
          >
            Featured <span className="text-gradient-space">Projects</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[3px] bg-gradient-to-r from-neon-blue to-neon-purple mx-auto md:mx-0 rounded-full"
          />
        </div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="glass-panel p-6 md:p-8 rounded-2xl border border-white/5 relative overflow-hidden group flex flex-col justify-between shadow-2xl"
              style={{
                boxShadow: `inset 0 0 20px ${project.glow}, 0 15px 35px rgba(0, 0, 0, 0.35)`,
              }}
            >
              <div>
                {/* Virtual Browser Mockup Header */}
                <div className="w-full bg-[#0a0f27] border border-white/5 rounded-t-xl px-4 py-3 flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1.5 select-none">
                    <span className="w-3 h-3 rounded-full bg-red-500/70 block" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/70 block" />
                    <span className="w-3 h-3 rounded-full bg-green-500/70 block" />
                  </div>
                  <div className="text-[10px] md:text-xs font-mono text-gray-500 bg-[#060816] px-4 py-1 rounded-md border border-white/5 truncate max-w-[150px] sm:max-w-[200px]">
                    {project.title.toLowerCase().replace(/\s+/g, "-")}.gulmohammad.dev
                  </div>
                  <div className="w-12" /> {/* alignment spacer */}
                </div>

                {/* Abstract Interactive Project Banner */}
                <div className="relative w-full h-[180px] rounded-xl overflow-hidden mb-6 flex items-center justify-center bg-slate-950/60 border border-white/5">
                  <div className={`absolute inset-0 bg-gradient-to-tr ${project.gradient} opacity-15 group-hover:opacity-25 transition-opacity duration-500`} />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-white/2 blur-2xl group-hover:scale-125 transition-transform duration-700" />
                  
                  {/* Decorative abstract mesh particles */}
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:16px_16px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_60%,transparent_100%)]" />

                  {/* Project Large Floating Icon */}
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    className="p-5 rounded-2xl bg-white/5 border border-white/10 relative z-10 flex items-center justify-center shadow-lg"
                    style={{ boxShadow: `0 8px 30px ${project.glow}` }}
                  >
                    {project.icon}
                  </motion.div>
                </div>

                {/* Category & Title */}
                <div className="mb-4">
                  <span className="text-neon-blue font-display text-xs tracking-wider uppercase font-semibold">
                    {project.category}
                  </span>
                  <h3 className="font-display font-extrabold text-2xl md:text-3xl text-white mt-1 group-hover:text-neon-blue transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium text-gray-400 bg-white/5 border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Features List */}
                <div className="mb-8">
                  <h4 className="font-display font-semibold text-sm text-gray-200 mb-3 tracking-wide">
                    Key Features:
                  </h4>
                  <ul className="space-y-2.5 text-gray-400 text-sm md:text-base font-sans">
                    {project.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple shrink-0 mt-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                <a
                  href={project.liveLink}
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-neon-blue text-white font-display text-sm font-medium transition-all duration-300 group/btn cursor-pointer"
                >
                  <Globe className="w-4 h-4 text-neon-blue" />
                  <span>Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </a>
                <a
                  href={project.githubLink}
                  className="flex items-center justify-center p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-neon-purple text-gray-300 hover:text-white transition-all duration-300 cursor-pointer"
                  title="View Source Code"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 font-sans text-sm flex items-center justify-center gap-2">
            <FolderCode className="w-4 h-4 text-neon-purple" />
            <span>More projects are available on my</span>
            <a
              href="#"
              className="text-neon-blue hover:text-white underline underline-offset-4 font-display font-medium transition-colors"
            >
              GitHub profile
            </a>
          </p>
        </motion.div>

      </div>
    </section>
  );
}
