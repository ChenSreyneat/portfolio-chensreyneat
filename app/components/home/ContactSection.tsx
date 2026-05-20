"use client";
import { useState } from "react";
import { Mail, Phone, MessageSquare, User, Tag } from "lucide-react";
import { FaLinkedin, FaTelegram } from "react-icons/fa";
import Image from "next/image";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("https://formsubmit.co/ajax/chensreyneat198@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject || "New Message from Portfolio",
          message: formData.message,
          _captcha: "false"
        })
      });

      const result = await response.json();
      if (result.success === "true") {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 max-w-6xl mx-auto px-4">
      <div className="flex flex-col items-center text-center mb-20 px-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-[1px] bg-accent-blue/50" />
          <span className="text-accent-blue font-bold uppercase tracking-[0.4em] text-[0.6rem]">Get In Touch</span>
          <div className="w-8 h-[1px] bg-accent-blue/50" />
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-white max-w-2xl leading-tight mb-2">
          Contact <span className="text-accent-blue">Me</span>
        </h2>
        <p className="text-text-secondary text-xl font-medium tracking-tight mb-6">Let&apos;s get in touch.</p>
        <p className="text-text-secondary text-base md:text-lg leading-relaxed max-w-2xl">
          I am always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.8fr] gap-12 lg:gap-24 items-start">
        {/* Contact Info Sidebar */}
        <div className="space-y-16">
          {/* Profile Section - Matches image aesthetic */}
          <div className="relative w-72 h-72 mx-auto lg:mx-0 group">
            {/* Theme Accents (Top Left) */}
            <div className="absolute -top-6 -left-6 w-16 h-16 opacity-60 z-0">
              <div className="absolute top-4 left-2 w-8 h-0.5 bg-accent-light -rotate-45" />
              <div className="absolute top-6 left-4 w-6 h-0.5 bg-accent-light -rotate-45" />
              <div className="absolute top-8 left-6 w-4 h-0.5 bg-accent-light -rotate-45" />
            </div>

            {/* Sub-blob Shape (Top Left) */}
            <div className="absolute top-2 left-0 w-40 h-48 bg-accent-mid opacity-90 z-0"
              style={{ borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' }}>
              <div className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: 'repeating-linear-gradient(135deg, #fff, #fff 1px, transparent 1px, transparent 12px)',
                  borderRadius: 'inherit'
                }} />
            </div>

            {/* Theme Wavy Line (Behind person) */}
            <svg className="absolute -top-4 -right-12 w-64 h-64 opacity-40 z-0 pointer-events-none" viewBox="0 0 200 200">
              <path
                d="M 180,40 C 210,80 180,160 140,180 C 100,200 40,160 60,80 C 70,40 140,20 180,40"
                fill="none"
                stroke="var(--accent-blue)"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>

            {/* Main Blue Organic Shape (Centered/Right) */}
            <div className="absolute top-10 right-0 w-60 h-60 bg-accent-blue z-0 shadow-2xl shadow-accent-blue/20"
              style={{ borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' }} />

            {/* Theme Dots Accent (Bottom Left) */}
            <div className="absolute -bottom-4 -left-4 grid grid-cols-3 gap-2 opacity-60 z-0">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 bg-accent-light rounded-full" />
              ))}
            </div>

            {/* Profile Image Container */}
            <div className="relative w-full h-full z-10 overflow-hidden"
              style={{ borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' }}>
              <Image
                src="/image/2.png"
                alt="Profile"
                fill
                className="object-cover scale-110 group-hover:scale-125 transition-transform duration-700"
              />
            </div>

            {/* Glow effect on hover */}
            <div className="absolute -inset-10 bg-blue-500/20 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
          </div>

          {/* Contact Details */}
          <div className="space-y-2">
            <div className="flex items-center gap-4">
              
              {/* <span className="text-gray-400 font-medium">Phnom Penh, Cambodia</span> */}
            </div>
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 border border-blue-500/20">
                <Mail size={16} />
              </div>
              <span className="text-gray-400 font-medium">chensreyneat198@gmail.com</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 border border-green-500/20">
                <Phone size={16} />
              </div>
              <span className="text-gray-400 font-medium">+855 88 75 14 279</span>
            </div>
          </div>

            <div className="pt-8 border-t border-white/5 space-y-6">
              <div className="flex flex-col sm:flex-row items-center gap-3 w-full">
                <a 
                  href="https://t.me/Neat198" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-center gap-2.5 px-5 py-2.5 w-full sm:w-auto rounded-2xl bg-[#3b82f6] hover:bg-[#2563eb] text-white transition-all duration-300 active:scale-95 shadow-md shadow-blue-500/5 cursor-pointer"
                >
                  <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-[#3b82f6] translate-x-[-0.5px]">
                      <path d="M1.05 11.57c-.73-.23-.69-1.31.06-1.5l20.45-8c.67-.24 1.33.34 1.17 1.03l-4 17.5c-.14.61-.83.89-1.34.53l-5.69-4.13-3.66 3.52c-.36.35-.94.1-.94-.41v-3.79l8.63-8.3c.18-.17-.06-.46-.28-.31L3.9 12.35l-2.85-.78z" />
                    </svg>
                  </div>
                  <div className="flex flex-col text-left leading-tight font-outfit">
                    <span className="text-[10px] font-semibold text-white/90">Message on</span>
                    <span className="text-sm font-black text-white">Telegram</span>
                  </div>
                </a>
                <a 
                  href="https://www.linkedin.com/in/chen-sreyneat-749654313/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-center gap-2 px-5 py-3 w-full sm:w-auto rounded-2xl bg-white/[0.02] border border-white/10 text-sm font-bold text-gray-400 hover:bg-white/10 hover:text-white transition-all cursor-pointer"
                >
                  <FaLinkedin size={16} className="flex-shrink-0" /> <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

        {/* Contact Form */}
        <div className="space-y-8">
          <form 
            className="space-y-12" 
            onSubmit={handleSubmit}
          >
            {/* FormSubmit Configuration */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-3">
                <label className="text-[0.7rem] font-black uppercase tracking-[0.2em] text-text-secondary/60 flex items-center gap-2">
                  <User size={14} className="text-accent-blue" /> Full Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-accent-blue/50 focus:bg-accent-blue/5 focus:shadow-[0_0_25px_rgba(26,35,105,0.15)] transition-all"
                  />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[0.7rem] font-black uppercase tracking-[0.2em] text-text-secondary/60 flex items-center gap-2">
                  <Mail size={14} className="text-accent-blue" /> Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-accent-blue/50 focus:bg-accent-blue/5 focus:shadow-[0_0_25px_rgba(26,35,105,0.15)] transition-all"
                />
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-[0.7rem] font-black uppercase tracking-[0.2em] text-text-secondary/60 flex items-center gap-2">
                <Tag size={14} className="text-accent-blue" /> Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="What's this about?"
                className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-accent-blue/50 focus:bg-accent-blue/5 focus:shadow-[0_0_25px_rgba(26,35,105,0.15)] transition-all"
              />
            </div>

            <div className="space-y-3">
              <label className="text-[0.7rem] font-black uppercase tracking-[0.2em] text-text-secondary/60 flex items-center gap-2">
                <MessageSquare size={14} className="text-accent-blue" /> Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project or question..."
                className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-accent-blue/50 focus:bg-accent-blue/5 focus:shadow-[0_0_25px_rgba(29,112,162,0.15)] transition-all min-h-[160px] resize-none"
              ></textarea>
            </div>

            <button 
              type="submit"
              disabled={status === "sending"}
              className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-3 transition-all active:scale-[0.98] shadow-lg ${
                status === "success" 
                  ? "bg-green-500 text-white shadow-green-500/20" 
                  : status === "error"
                  ? "bg-red-500 text-white shadow-red-500/20"
                  : "bg-[#3b82f6] hover:bg-[#2563eb] text-white shadow-blue-500/10 cursor-pointer"
              }`}
            >
              {status === "sending" ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Sending...
                </>
              ) : status === "success" ? (
                <>
                  <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">✓</div>
                  Message Sent!
                </>
              ) : status === "error" ? (
                <>
                  <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">!</div>
                  Error Sending
                </>
              ) : (
                <>
                  <Mail size={18} /> Send Message
                </>
              )}
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
