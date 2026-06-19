"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    
    // Simulate API request
    setTimeout(() => {
      setStatus("success");
      setFormState({ name: "", email: "", subject: "", message: "" });
      
      // Reset status after a few seconds
      setTimeout(() => setStatus("idle"), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-space-dark/40">
      {/* Background neon visual glows */}
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] rounded-full bg-neon-purple/5 blur-[90px] pointer-events-none" />
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
            Get In <span className="text-gradient-space">Touch</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[3px] bg-gradient-to-r from-neon-blue to-neon-purple mx-auto md:mx-0 rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-20 items-stretch">
          
          {/* Left Column: Contact info & Socials */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div>
              <h3 className="font-display font-bold text-2xl text-white mb-6">
                Let's discuss your next project!
              </h3>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed font-sans mb-8">
                Whether you want to build a custom web app, need help optimizing your current systems, or are looking for coding mentorship and practical training — feel free to drop a message!
              </p>

              {/* Direct Info list */}
              <div className="space-y-6">
                {/* Email */}
                <a
                  href="mailto:gul.m0628@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-white/2 hover:bg-white/5 hover:border-neon-blue/40 transition-all duration-300 group"
                >
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:bg-neon-blue/10 group-hover:border-neon-blue/30 transition-colors shrink-0">
                    <Mail className="w-5 h-5 text-neon-blue" />
                  </div>
                  <div>
                    <span className="text-gray-500 text-xs font-display uppercase tracking-wider block">Email Me</span>
                    <span className="text-gray-200 text-sm md:text-base font-sans break-all group-hover:text-white transition-colors">
                      gul.m0628@gmail.com
                    </span>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href="tel:+918512889586"
                  className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-white/2 hover:bg-white/5 hover:border-neon-purple/40 transition-all duration-300 group"
                >
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:bg-neon-purple/10 group-hover:border-neon-purple/30 transition-colors shrink-0">
                    <Phone className="w-5 h-5 text-neon-purple" />
                  </div>
                  <div>
                    <span className="text-gray-500 text-xs font-display uppercase tracking-wider block">Call Me</span>
                    <span className="text-gray-200 text-sm md:text-base font-sans group-hover:text-white transition-colors">
                      +91 85128 89586
                    </span>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-white/2">
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10 shrink-0">
                    <MapPin className="w-5 h-5 text-neon-pink" />
                  </div>
                  <div>
                    <span className="text-gray-500 text-xs font-display uppercase tracking-wider block">Location</span>
                    <span className="text-gray-200 text-sm md:text-base font-sans">
                      Ghaziabad, India
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Icons row */}
            <div className="mt-12 lg:mt-0 pt-8 border-t border-white/5">
              <span className="text-gray-500 text-xs font-display uppercase tracking-wider block mb-4">
                Connect via Social Networks
              </span>
              <div className="flex items-center gap-4">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/5 rounded-xl border border-white/10 text-gray-400 hover:text-white hover:border-neon-blue hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all duration-300 flex items-center justify-center"
                  aria-label="LinkedIn Profile"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" rx="1" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/5 rounded-xl border border-white/10 text-gray-400 hover:text-white hover:border-neon-purple hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all duration-300 flex items-center justify-center"
                  aria-label="GitHub Profile"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Glassmorphism Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div
              className="glass-panel p-6 md:p-8 rounded-2xl border border-white/5 shadow-2xl relative"
              style={{
                boxShadow: "inset 0 0 20px rgba(168, 85, 247, 0.04), 0 15px 35px rgba(0, 0, 0, 0.3)",
              }}
            >
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-16 flex flex-col items-center justify-center text-center"
                >
                  <CheckCircle className="w-16 h-16 text-emerald-400 mb-4 animate-bounce" />
                  <h4 className="font-display font-bold text-2xl text-white mb-2">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-gray-400 text-sm max-w-sm font-sans">
                    Thank you for reaching out, Gul Mohammad will get back to you shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name and Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-gray-400 text-xs font-display tracking-wider uppercase">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        value={formState.name}
                        onChange={handleChange}
                        className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white font-sans text-sm outline-none focus:border-neon-blue focus:bg-white/10 hover:border-white/20 transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-gray-400 text-xs font-display tracking-wider uppercase">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        value={formState.email}
                        onChange={handleChange}
                        className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white font-sans text-sm outline-none focus:border-neon-blue focus:bg-white/10 hover:border-white/20 transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="subject" className="text-gray-400 text-xs font-display tracking-wider uppercase">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      required
                      value={formState.subject}
                      onChange={handleChange}
                      className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white font-sans text-sm outline-none focus:border-neon-purple focus:bg-white/10 hover:border-white/20 transition-all"
                      placeholder="Project Inquiry / Mentoring Request"
                    />
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-gray-400 text-xs font-display tracking-wider uppercase">
                      Message
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows={5}
                      required
                      value={formState.message}
                      onChange={handleChange}
                      className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white font-sans text-sm outline-none focus:border-neon-purple focus:bg-white/10 hover:border-white/20 transition-all resize-none"
                      placeholder="Hi Gul Mohammad, I would like to discuss a project..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full flex items-center justify-center gap-2.5 py-4 rounded-xl bg-gradient-to-r from-neon-blue to-neon-purple text-white font-display font-medium shadow-[0_4px_20px_rgba(0,240,255,0.25)] hover:shadow-[0_4px_30px_rgba(0,240,255,0.45)] hover:brightness-110 active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 cursor-pointer"
                  >
                    <span>{status === "sending" ? "Sending..." : "Send Message"}</span>
                    <Send className={`w-4 h-4 ${status === "sending" ? "animate-pulse" : ""}`} />
                  </button>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
