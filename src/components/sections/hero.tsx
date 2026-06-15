"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MapPin, Mail, Sparkles } from "lucide-react";

const roles = [
  "Full Stack Developer",
  "UI/UX Designer",
  "Web Developer",
  "Teaching Professional",
];

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

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
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden"
    >
      {/* Background glowing nebulas */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[600px] md:h-[600px] rounded-full bg-neon-purple/15 blur-[80px] md:blur-[120px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full bg-neon-blue/10 blur-[80px] md:blur-[120px] pointer-events-none animate-pulse-slow" style={{ animationDelay: "2s" }} />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column: Information */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
          
          {/* Greeting Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-neon-blue/30 bg-neon-blue/5 text-neon-blue font-display text-xs md:text-sm tracking-wider uppercase mb-6"
          >
            <Sparkles className="w-4 h-4 animate-spin-slow text-neon-blue" />
            Welcome to my digital space
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display font-extrabold text-5xl md:text-7xl xl:text-8xl tracking-tight leading-none mb-6"
          >
            <span className="text-white">GUL</span>{" "}
            <span className="text-gradient-neon">MOHAMMAD</span>
          </motion.h1>

          {/* Roles Carousel */}
          <div className="h-10 md:h-12 flex items-center justify-center lg:justify-start mb-6">
            <AnimatePresence mode="wait">
              <motion.span
                key={currentRoleIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="font-display font-medium text-lg md:text-2xl xl:text-3xl text-neon-blue/90 tracking-wide flex items-center gap-3"
              >
                <span>{roles[currentRoleIndex]}</span>
              </motion.span>
            </AnimatePresence>
          </div>

          {/* Tagline / Description */}
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-xl text-base md:text-lg text-gray-300 border-l-2 border-neon-purple/40 pl-4 mb-8 leading-relaxed italic"
          >
            "Building Modern Web Experiences, Scalable Applications & Creative Digital Solutions."
          </motion.blockquote>

          {/* Location details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center gap-2 mb-8 glass-panel px-4 py-2 rounded-xl border border-white/5 text-gray-400 text-sm hover:text-white transition-colors duration-300"
          >
            <MapPin className="w-4 h-4 text-neon-pink" />
            <span>Ghaziabad, India</span>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <button
              onClick={() => handleScrollTo("projects")}
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-neon-blue to-neon-purple text-white font-display font-medium shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:shadow-[0_0_30px_rgba(0,240,255,0.5)] hover:brightness-110 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
            >
              Featured Work
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleScrollTo("contact")}
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-space-border hover:border-neon-purple bg-space-card text-white font-display font-medium hover:bg-space-card/80 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
            >
              Contact Me
              <Mail className="w-5 h-5" />
            </button>
          </motion.div>
        </div>

        {/* Right Column: Interactive Orbital wireframe element */}
        <div className="lg:col-span-5 flex justify-center items-center relative h-[350px] md:h-[450px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-full h-full max-w-[400px] max-h-[400px] flex items-center justify-center relative cursor-grab active:cursor-grabbing"
          >
            {/* Base planet glow sphere */}
            <div className="absolute w-44 h-44 md:w-56 md:h-56 rounded-full bg-gradient-to-tr from-neon-purple/40 to-neon-blue/40 blur-xl animate-pulse-slow" />
            <div className="absolute w-40 h-40 md:w-52 md:h-52 rounded-full bg-gradient-to-br from-indigo-900/60 to-slate-900/90 border border-white/10 shadow-[inset_0_4px_20px_rgba(255,255,255,0.15)] flex items-center justify-center animate-float">
              <span className="font-display font-black text-6xl text-gradient-space select-none tracking-tighter">GM</span>
            </div>

            {/* Orbit rings */}
            <div className="absolute w-72 h-72 md:w-[320px] md:h-[320px] rounded-full border border-dashed border-neon-blue/30 animate-spin-slow opacity-60 pointer-events-none" style={{ animationDuration: "30s" }} />
            
            <div className="absolute w-80 h-80 md:w-[360px] md:h-[360px] rounded-full border border-double border-neon-purple/20 animate-nebula-spin pointer-events-none" />

            {/* Small floating satellite dots */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
              className="absolute w-full h-full pointer-events-none"
            >
              <div className="absolute top-[10%] left-[50%] -translate-x-1/2 w-4 h-4 rounded-full bg-neon-blue shadow-[0_0_10px_#00f0ff]" />
            </motion.div>

            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
              className="absolute w-[80%] h-[80%] pointer-events-none"
            >
              <div className="absolute bottom-[5%] right-[20%] w-3 h-3 rounded-full bg-neon-pink shadow-[0_0_8px_#ec4899]" />
            </motion.div>

            <motion.div
              animate={{ rotate: 180 }}
              transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
              className="absolute w-[60%] h-[60%] pointer-events-none"
            >
              <div className="absolute top-[40%] right-[-5%] w-2.5 h-2.5 rounded-full bg-purple-400 shadow-[0_0_8px_rgba(168,85,247,0.5)]" />
            </motion.div>
          </motion.div>
        </div>
        
      </div>

      {/* Down arrow link */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 cursor-pointer z-10" onClick={() => handleScrollTo("about")}>
        <span className="text-xs font-display tracking-widest text-gray-500 uppercase">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-1.5 h-6 rounded-full bg-gradient-to-b from-neon-blue to-transparent"
        />
      </div>
    </section>
  );
}
