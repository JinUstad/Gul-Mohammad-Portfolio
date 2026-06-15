"use client";

import Navbar from "@/components/navbar";
import SpaceBackground from "@/components/space-background";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Experience from "@/components/sections/experience";
import Skills from "@/components/sections/skills";
import Projects from "@/components/sections/projects";
import Services from "@/components/sections/services";
import Education from "@/components/sections/education";
import Contact from "@/components/sections/contact";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative min-h-screen text-gray-100 font-sans selection-glow overflow-x-hidden bg-space-dark">
      {/* Interactive 3D Canvas Starfield Parallax Particles */}
      <SpaceBackground />

      {/* Glassmorphic Sticky Header / Navigation */}
      <Navbar />

      {/* Main Sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Services />
        <Education />
        <Contact />
      </main>

      {/* Premium Footer */}
      <footer className="relative z-10 border-t border-space-border/50 bg-[#020512]/90 backdrop-blur-md py-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="font-display font-extrabold text-xl tracking-wider text-gradient-neon">
              GUL MOHAMMAD
            </span>
            <p className="text-gray-500 text-xs md:text-sm font-sans mt-2">
              Building Modern Web Experiences & Scaling Creative Digital Solutions.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end text-center md:text-right">
            <p className="text-gray-400 text-xs md:text-sm font-sans">
              &copy; {new Date().getFullYear()} Gul Mohammad. All rights reserved.
            </p>
            <p className="text-gray-600 text-[10px] md:text-xs font-mono mt-1">
              Crafted in Ghaziabad, India using Next.js & Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Scroll to Top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 p-3 rounded-xl bg-gradient-to-tr from-neon-blue to-neon-purple text-white hover:brightness-110 active:scale-95 transition-all shadow-[0_4px_15px_rgba(0,240,255,0.4)] cursor-pointer"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
