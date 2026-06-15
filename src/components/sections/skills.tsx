"use client";

import { motion } from "framer-motion";
import { Monitor, Server, Database, Wrench, ShieldCheck, Check } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <Monitor className="w-6 h-6 text-neon-blue" />,
    glow: "rgba(0, 240, 255, 0.2)",
    accentColor: "border-neon-blue/20",
    skills: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Bootstrap", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Backend Development",
    icon: <Server className="w-6 h-6 text-neon-purple" />,
    glow: "rgba(168, 85, 247, 0.2)",
    accentColor: "border-neon-purple/20",
    skills: ["Node.js", "Express.js", "REST APIs", "API Routes", "GraphQL"],
  },
  {
    title: "Database Management",
    icon: <Database className="w-6 h-6 text-emerald-400" />,
    glow: "rgba(52, 211, 153, 0.2)",
    accentColor: "border-emerald-400/20",
    skills: ["MongoDB", "MySQL", "Database Design", "Mongoose", "SQL Queries"],
  },
  {
    title: "Tools & Workflow",
    icon: <Wrench className="w-6 h-6 text-amber-400" />,
    glow: "rgba(251, 191, 36, 0.2)",
    accentColor: "border-amber-400/20",
    skills: ["Git", "GitHub", "VS Code", "NPM / Yarn", "Postman", "Vercel"],
  },
  {
    title: "Additional Specialties",
    icon: <ShieldCheck className="w-6 h-6 text-neon-pink" />,
    glow: "rgba(236, 72, 153, 0.2)",
    accentColor: "border-neon-pink/20",
    skills: [
      "Responsive Design",
      "Authentication Systems",
      "API Integration",
      "UI/UX Design Principles",
      "Teaching & Mentoring",
    ],
  },
];

export default function Skills() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#050816]/40">
      {/* Background neon visual light */}
      <div className="absolute bottom-0 left-1/3 w-96 h-96 rounded-full bg-neon-blue/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Title */}
        <div className="text-center md:text-left mb-16">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display font-extrabold text-4xl md:text-5xl tracking-tight text-white mb-2"
          >
            My <span className="text-gradient-space">Skills</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[3px] bg-gradient-to-r from-neon-blue to-neon-purple mx-auto md:mx-0 rounded-full"
          />
        </div>

        {/* Skills Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.01 }}
              className={`glass-panel glass-panel-hover p-6 md:p-8 rounded-2xl border ${category.accentColor} relative overflow-hidden flex flex-col justify-between`}
              style={{
                boxShadow: `inset 0 0 16px ${category.glow}, 0 10px 30px rgba(0, 0, 0, 0.25)`,
              }}
            >
              {/* Category card header */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center">
                    {category.icon}
                  </div>
                  <h3 className="font-display font-bold text-lg md:text-xl text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Skill List */}
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill, sIdx) => (
                    <motion.span
                      key={sIdx}
                      whileHover={{ scale: 1.05 }}
                      className="px-3.5 py-1.5 rounded-xl text-xs md:text-sm font-sans tracking-wide text-gray-300 bg-white/5 hover:bg-white/10 hover:text-white border border-white/5 hover:border-white/15 cursor-default transition-all duration-200 flex items-center gap-1.5 select-none"
                    >
                      <Check className="w-3.5 h-3.5 text-neon-blue/70 shrink-0" />
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Decorative bottom corner glow */}
              <div
                className="absolute -bottom-10 -right-10 w-24 h-24 rounded-full blur-2xl pointer-events-none opacity-40"
                style={{ backgroundColor: category.glow.replace("0.2", "0.5") }}
              />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
