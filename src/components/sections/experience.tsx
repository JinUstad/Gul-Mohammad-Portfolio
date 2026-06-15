"use client";

import { motion } from "framer-motion";
import { Code2, GraduationCap, Briefcase, Calendar, CheckCircle2 } from "lucide-react";

const experiences = [
  {
    role: "Full Stack Developer",
    period: "2022 - Present",
    company: "Freelance & Contract Projects",
    icon: <Code2 className="w-5 h-5 text-neon-blue" />,
    glowColor: "rgba(0, 240, 255, 0.25)",
    points: [
      "Frontend development using React.js, Next.js, and modern CSS systems (Tailwind, Bootstrap).",
      "Backend development using Node.js & Express.js, designing scalable REST APIs.",
      "Database design & optimization with MongoDB & MySQL, managing relational and non-relational structures.",
      "Implemented security systems including JWT authentication, encryption, and secure routing.",
      "Ensured fully responsive, mobile-first layouts across all deliverables.",
      "Designed and integrated REST API services, payment gateways, and cloud storage uploads.",
    ],
  },
  {
    role: "Teaching Professional & Mentor",
    period: "2023 - Present",
    company: "Web Development Training Institutes & Online Coaching",
    icon: <GraduationCap className="w-5 h-5 text-neon-purple" />,
    glowColor: "rgba(168, 85, 247, 0.25)",
    points: [
      "Conducting comprehensive Web Development & Full Stack training programs for students and professionals.",
      "Providing 1-on-1 and group mentoring sessions focusing on modern JavaScript, React.js, and Node.js.",
      "Offering practical project guidance, helping students build production-ready applications for their portfolios.",
      "Teaching industry-oriented learning, including Git/GitHub, agile basics, and clean coding guidelines.",
      "Helping students crack technical interviews through mock tests, coding exercises, and resume building tips.",
    ],
  },
];

export default function Experience() {
  const lineVariants = {
    hidden: { height: 0 },
    visible: {
      height: "100%",
      transition: { duration: 1.2, ease: "easeInOut" as const },
    },
  };

  const cardVariants = {
    hidden: (index: number) => ({
      opacity: 0,
      x: index % 2 === 0 ? -40 : 40,
      y: 20,
    }),
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-space-dark/30">
      {/* Glow nebula behind the line */}
      <div className="absolute top-[40%] right-[10%] w-[350px] h-[350px] rounded-full bg-neon-purple/5 blur-[100px] pointer-events-none" />

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
            My <span className="text-gradient-space">Experience</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[3px] bg-gradient-to-r from-neon-blue to-neon-purple mx-auto md:mx-0 rounded-full"
          />
        </div>

        <div className="relative">
          {/* Central Line for Desktop, Left Line for Mobile */}
          <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2">
            {/* Background thin line */}
            <div className="w-full h-full bg-white/5 rounded-full" />
            {/* Animated growing progress line */}
            <motion.div
              variants={lineVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-neon-blue via-neon-purple to-neon-pink rounded-full"
            />
          </div>

          <div className="space-y-16 lg:space-y-20">
            {experiences.map((exp, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={idx}
                  className={`flex flex-col lg:flex-row relative items-start lg:items-center ${
                    isEven ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Glowing Bullet Node */}
                  <div className="absolute left-6 lg:left-1/2 -translate-x-1/2 z-10 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0.5, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 150, delay: 0.15 }}
                      className="w-12 h-12 rounded-full flex items-center justify-center bg-[#070b21] border-2 border-white/10 relative"
                      style={{
                        boxShadow: `0 0 15px ${exp.glowColor}`,
                        borderColor: isEven ? "#00f0ff" : "#a855f7",
                      }}
                    >
                      {/* Inner dot */}
                      <div className="absolute inset-1.5 rounded-full bg-white/5 border border-white/10" />
                      <div className="relative z-10">{exp.icon}</div>
                    </motion.div>
                  </div>

                  {/* Left Column Spacer for desktop */}
                  <div className="w-full lg:w-1/2 lg:px-12 hidden lg:block" />

                  {/* Experience Card */}
                  <motion.div
                    custom={idx}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="w-full lg:w-1/2 pl-16 pr-2 lg:px-12"
                  >
                    <div
                      className="glass-panel glass-panel-hover p-6 md:p-8 rounded-2xl border border-white/5 relative overflow-hidden group shadow-2xl"
                      style={{
                        boxShadow: `inset 0 0 15px ${exp.glowColor.replace("0.25", "0.08")}, 0 10px 30px rgba(0, 0, 0, 0.3)`,
                      }}
                    >
                      {/* Top accent line */}
                      <div
                        className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r"
                        style={{
                          backgroundImage: isEven
                            ? "linear-gradient(to right, #00f0ff, transparent)"
                            : "linear-gradient(to right, #a855f7, transparent)",
                        }}
                      />

                      {/* Header */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
                        <div>
                          <h3 className="font-display font-bold text-xl md:text-2xl text-white group-hover:text-neon-blue transition-colors duration-300">
                            {exp.role}
                          </h3>
                          <span className="text-gray-400 text-sm font-sans tracking-wide">
                            {exp.company}
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/5 bg-white/5 text-gray-300 text-xs md:text-sm font-display self-start sm:self-center">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{exp.period}</span>
                        </div>
                      </div>

                      {/* List Points */}
                      <ul className="space-y-3.5 text-gray-300 text-sm md:text-base font-sans">
                        {exp.points.map((point, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2.5 leading-relaxed">
                            <CheckCircle2 className="w-4 h-4 text-neon-blue/80 shrink-0 mt-1" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
