"use client";

import { motion } from "framer-motion";
import { Briefcase, Code2, Users, GraduationCap, ArrowRight } from "lucide-react";

const stats = [
  {
    icon: <Briefcase className="w-6 h-6 text-neon-blue" />,
    value: "3.5+ Years",
    label: "Professional Experience",
    glow: "rgba(0, 240, 255, 0.15)",
  },
  {
    icon: <Code2 className="w-6 h-6 text-neon-purple" />,
    value: "20+ Projects",
    label: "Successfully Built",
    glow: "rgba(168, 85, 247, 0.15)",
  },
  {
    icon: <Users className="w-6 h-6 text-neon-pink" />,
    value: "100+ Students",
    label: "Mentored & Guided",
    glow: "rgba(236, 72, 153, 0.15)",
  },
  {
    icon: <GraduationCap className="w-6 h-6 text-emerald-400" />,
    value: "MCA Degree",
    label: "Advanced Education",
    glow: "rgba(52, 211, 153, 0.15)",
  },
];

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
  };

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Visual background lights */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-neon-blue/5 blur-[100px] pointer-events-none" />

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
            About <span className="text-gradient-space">Me</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[3px] bg-gradient-to-r from-neon-blue to-neon-purple mx-auto md:mx-0 rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-20 items-center">
          
          {/* Left Column: Bio & Core Pitch */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <h3 className="font-display font-bold text-2xl md:text-3xl text-white mb-6 leading-tight">
              Bridging the gap between <span className="text-neon-blue">Aesthetic Design</span> and <span className="text-neon-purple">Robust Engineering</span>
            </h3>
            
            <div className="space-y-6 text-gray-300 text-base md:text-lg leading-relaxed font-sans">
              <p>
                I am a passionate <strong className="text-white font-medium">Full Stack Developer</strong> and <strong className="text-white font-medium">UI/UX Designer</strong> based in Ghaziabad, India. With over <span className="text-neon-blue font-semibold">3.5 years of industry experience</span>, I design, code, and deploy modern web applications that are responsive, user-friendly, and highly scalable.
              </p>
              <p>
                My approach is fueled by a merge of technical skills (Next.js, Node.js, Express.js, Databases) and design aesthetics. Beyond coding, I am dedicated to sharing knowledge as a <strong className="text-white font-medium">Teaching Professional</strong>, mentoring aspiring developers, delivering practical project coaching, and promoting industry-oriented learning.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={() => handleScrollTo("experience")}
                className="flex items-center gap-1.5 text-sm font-display text-neon-blue hover:text-white hover:translate-x-1.5 transition-all duration-300 cursor-pointer"
              >
                <span>Read my experience</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* Right Column: Key Stats Grid */}
          <div className="lg:col-span-6">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="glass-panel glass-panel-hover p-6 rounded-2xl border border-white/5 flex flex-col items-center sm:items-start text-center sm:text-left relative overflow-hidden"
                  style={{
                    boxShadow: `inset 0 0 12px ${stat.glow}, 0 4px 24px rgba(0, 0, 0, 0.2)`,
                  }}
                >
                  {/* Floating visual bg card dot */}
                  <div
                    className="absolute -top-6 -right-6 w-16 h-16 rounded-full blur-xl pointer-events-none"
                    style={{ backgroundColor: stat.glow.replace("0.15", "0.25") }}
                  />
                  
                  {/* Icon Wrapper */}
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10 mb-4 inline-flex">
                    {stat.icon}
                  </div>
                  
                  {/* Stat Value */}
                  <span className="font-display font-bold text-3xl md:text-4xl text-white mb-2 select-none tracking-tight">
                    {stat.value}
                  </span>
                  
                  {/* Stat Label */}
                  <span className="text-gray-400 text-sm md:text-base font-sans leading-normal">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
