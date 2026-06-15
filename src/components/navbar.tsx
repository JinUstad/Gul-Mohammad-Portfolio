"use client";

import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Services", id: "services" },
  { label: "Education", id: "education" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);

  // Monitor scroll for nav styling and active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Determine active section
      const scrollPos = window.scrollY + 120;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of sticky navbar
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
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? "glass-panel border-b border-space-border/50 py-3 shadow-lg shadow-black/20"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 group cursor-pointer focus:outline-none"
          >
            <span className="font-display font-bold text-2xl tracking-wider text-gradient-neon group-hover:scale-105 transition-transform duration-300">
              GUL M.
            </span>
          </button>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleScrollTo(item.id)}
                    className={`relative py-1 font-display text-sm tracking-wide transition-colors duration-300 focus:outline-none cursor-pointer ${
                      activeSection === item.id
                        ? "text-neon-blue font-medium"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {item.label}
                    {activeSection === item.id && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-neon-blue shadow-[0_0_8px_#00f0ff]"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                </li>
              ))}
            </ul>

            {/* Glowing CTA */}
            <button
              onClick={() => handleScrollTo("contact")}
              className="ml-4 flex items-center gap-1.5 px-4 py-2 rounded-full border border-neon-purple/50 bg-neon-purple/10 text-white font-display text-sm hover:bg-neon-purple/20 hover:border-neon-purple hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-all duration-300 cursor-pointer"
            >
              Let's Connect
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white hover:text-neon-blue transition-colors focus:outline-none p-1.5 glass-panel rounded-lg cursor-pointer"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[72px] z-35 lg:hidden glass-panel border-b border-space-border/60 py-6 px-8 shadow-2xl"
          >
            <ul className="flex flex-col gap-5">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleScrollTo(item.id)}
                    className={`w-full text-left py-2 font-display text-lg transition-colors cursor-pointer ${
                      activeSection === item.id
                        ? "text-neon-blue font-bold"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <li className="pt-2">
                <button
                  onClick={() => handleScrollTo("contact")}
                  className="w-full py-3 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-neon-purple to-neon-blue text-white font-display font-medium hover:brightness-110 active:scale-95 transition-all shadow-[0_4px_15px_rgba(168,85,247,0.3)] cursor-pointer"
                >
                  Let's Connect
                  <ArrowUpRight className="w-5 h-5" />
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
