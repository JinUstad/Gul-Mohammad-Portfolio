"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen, Calendar, Cloud, ShieldCheck } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-space-dark/10">
      {/* Background glowing effects */}
      <div className="absolute top-[20%] left-[80%] w-[300px] h-[300px] rounded-full bg-neon-blue/5 blur-[80px] pointer-events-none" />

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
            Education & <span className="text-gradient-space">Certifications</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[3px] bg-gradient-to-r from-neon-blue to-neon-purple mx-auto md:mx-0 rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Education */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 flex flex-col"
          >
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="w-5 h-5 text-neon-blue" />
              <h3 className="font-display font-bold text-xl md:text-2xl text-white tracking-wide">
                Academic Background
              </h3>
            </div>

            <motion.div
              whileHover={{ y: -4 }}
              className="glass-panel p-6 md:p-8 rounded-2xl border border-white/5 flex-1 relative overflow-hidden flex flex-col justify-between"
              style={{
                boxShadow: "inset 0 0 15px rgba(0, 240, 255, 0.05), 0 10px 30px rgba(0, 0, 0, 0.2)",
              }}
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <span className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium text-neon-blue bg-neon-blue/5 border border-neon-blue/20">
                      Postgraduate Degree
                    </span>
                    <h4 className="font-display font-extrabold text-2xl md:text-3xl text-white mt-3 leading-tight">
                      MCA
                    </h4>
                    <p className="text-gray-300 text-base md:text-lg font-sans mt-1">
                      Master of Computer Applications
                    </p>
                  </div>
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10 shrink-0">
                    <GraduationCap className="w-6 h-6 text-neon-blue" />
                  </div>
                </div>

                <p className="text-gray-400 text-sm md:text-base leading-relaxed mt-4">
                  Advanced studies focused on software engineering concepts, database systems optimization, algorithms design, web application development frameworks, and emerging computer network sciences.
                </p>
              </div>

              <div className="flex items-center gap-2 mt-8 text-gray-400 text-sm border-t border-white/5 pt-4">
                <Calendar className="w-4 h-4 text-gray-500" />
                <span>Completed</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 flex flex-col"
          >
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-5 h-5 text-neon-purple" />
              <h3 className="font-display font-bold text-xl md:text-2xl text-white tracking-wide">
                Professional Credentials
              </h3>
            </div>

            <div className="space-y-6 flex-1 flex flex-col">
              
              {/* Certification 1: Full Stack Development */}
              <motion.div
                whileHover={{ y: -4 }}
                className="glass-panel p-6 rounded-2xl border border-white/5 relative overflow-hidden flex flex-col justify-between flex-1"
                style={{
                  boxShadow: "inset 0 0 15px rgba(168, 85, 247, 0.05), 0 10px 25px rgba(0, 0, 0, 0.2)",
                }}
              >
                <div className="flex items-start gap-4 justify-between">
                  <div className="flex gap-4">
                    <div className="p-3 bg-white/5 rounded-xl border border-white/10 shrink-0 self-start">
                      <ShieldCheck className="w-5 h-5 text-neon-purple" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-lg md:text-xl text-white">
                        Full Stack Development
                      </h4>
                      <p className="text-gray-400 text-sm md:text-base leading-relaxed mt-1.5">
                        In-depth training program covering advanced React ecosystems, API designs, relational/non-relational database architectures, state systems, and deployment configurations.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Certification 2: AWS Cloud Practitioner */}
              <motion.div
                whileHover={{ y: -4 }}
                className="glass-panel p-6 rounded-2xl border border-white/5 relative overflow-hidden flex flex-col justify-between flex-1"
                style={{
                  boxShadow: "inset 0 0 15px rgba(236, 72, 153, 0.05), 0 10px 25px rgba(0, 0, 0, 0.2)",
                }}
              >
                <div className="flex items-start gap-4 justify-between">
                  <div className="flex gap-4">
                    <div className="p-3 bg-white/5 rounded-xl border border-white/10 shrink-0 self-start">
                      <Cloud className="w-5 h-5 text-neon-pink" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-lg md:text-xl text-white">
                        AWS Cloud Practitioner
                      </h4>
                      <p className="text-gray-400 text-sm md:text-base leading-relaxed mt-1.5">
                        Detailed knowledge of AWS cloud services, architectural guidelines, safety compliance, core concepts, billing strategies, and cloud infrastructure management.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
