"use client";

import { motion } from "framer-motion";
import {
  Laptop,
  ShoppingBag,
  Layers,
  Link2,
  Palette,
  Users2,
  UserCheck,
  Search,
} from "lucide-react";

const services = [
  {
    icon: <Laptop className="w-6 h-6 text-neon-blue" />,
    title: "Website Development",
    description:
      "Creating modern, high-performance, and responsive static/dynamic web platforms built to engage visitors and capture leads.",
    glow: "rgba(0, 240, 255, 0.15)",
  },
  {
    icon: <ShoppingBag className="w-6 h-6 text-neon-purple" />,
    title: "E-Commerce Development",
    description:
      "Building full-featured online shops complete with product catalogs, shopping carts, secure payments, and management panels.",
    glow: "rgba(168, 85, 247, 0.15)",
  },
  {
    icon: <Layers className="w-6 h-6 text-neon-pink" />,
    title: "Full Stack Applications",
    description:
      "Developing scalable software systems from backend API layers, authentication processes, schema models, to clean user interfaces.",
    glow: "rgba(236, 72, 153, 0.15)",
  },
  {
    icon: <Link2 className="w-6 h-6 text-amber-400" />,
    title: "API Integration",
    description:
      "Connecting third-party services, payment processors, cloud files, database systems, or writing custom REST API endpoints.",
    glow: "rgba(251, 191, 36, 0.15)",
  },
  {
    icon: <Palette className="w-6 h-6 text-emerald-400" />,
    title: "UI/UX Design",
    description:
      "Wireframing, mockup styling, and mapping layouts with strict attention to typography, user experience, and visual hierarchies.",
    glow: "rgba(52, 211, 153, 0.15)",
  },
  {
    icon: <Users2 className="w-6 h-6 text-indigo-400" />,
    title: "Coaching & Mentoring",
    description:
      "Providing industry-oriented training programs, structured coding bootcamps, resume polishing, and practical project advice.",
    glow: "rgba(129, 140, 248, 0.15)",
  },
  {
    icon: <UserCheck className="w-6 h-6 text-cyan-400" />,
    title: "Portfolio Websites",
    description:
      "Designing highly premium, interactive personal portfolios with 3D elements and smooth animations that leave a strong impression.",
    glow: "rgba(34, 211, 238, 0.15)",
  },
  {
    icon: <Search className="w-6 h-6 text-rose-400" />,
    title: "SEO-Friendly Websites",
    description:
      "Optimizing page layouts, metadata structures, and speed performance to ensure search engines rank pages high on keywords.",
    glow: "rgba(251, 113, 133, 0.15)",
  },
];

export default function Services() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
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
    <section id="services" className="py-24 relative overflow-hidden bg-space-dark/20">
      {/* Background visual light */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] rounded-full bg-neon-purple/5 blur-[120px] pointer-events-none" />

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
            My <span className="text-gradient-space">Services</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[3px] bg-gradient-to-r from-neon-blue to-neon-purple mx-auto md:mx-0 rounded-full"
          />
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.01 }}
              className="glass-panel glass-panel-hover p-6 rounded-2xl border border-white/5 flex flex-col justify-between relative overflow-hidden"
              style={{
                boxShadow: `inset 0 0 15px ${service.glow}, 0 4px 24px rgba(0, 0, 0, 0.25)`,
              }}
            >
              <div>
                {/* Icon Wrapper */}
                <div className="p-3 bg-white/5 rounded-xl border border-white/10 mb-5 inline-flex">
                  {service.icon}
                </div>
                
                {/* Title */}
                <h3 className="font-display font-bold text-lg md:text-xl text-white mb-3 tracking-wide">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed font-sans">
                  {service.description}
                </p>
              </div>

              {/* Little corner color circle */}
              <div
                className="absolute -bottom-8 -right-8 w-16 h-16 rounded-full blur-xl pointer-events-none opacity-30"
                style={{ backgroundColor: service.glow.replace("0.15", "0.4") }}
              />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
