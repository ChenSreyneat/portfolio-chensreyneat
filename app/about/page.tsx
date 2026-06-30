"use client";

import {
  MapPin, Globe, Users, Lightbulb, CheckCircle, MessageSquare,
  Mail, ChevronLeft, Calendar, Briefcase, GraduationCap, Award, Compass, Heart
} from "lucide-react";
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 25,
        stiffness: 180
      }
    }
  };

  return (
    <div className="relative overflow-hidden min-h-screen">
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1d70a205_1px,transparent_1px),linear-gradient(to_bottom,#1d70a205_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <main className="max-w-6xl mx-auto px-4 pt-12 pb-24 relative z-10">
        
        {/* Back Link */}
        <motion.div 
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-text-secondary hover:text-accent-blue transition-colors group"
          >
            <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-bold text-sm uppercase tracking-widest">Back to Home</span>
          </Link>
        </motion.div>

        {/* Dashboard Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
        >
          
          {/* 1. Header Card (Spans full width on mobile, 12 columns) */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-12 relative group"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-blue/10 to-purple-500/10 rounded-3xl blur-md opacity-75 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            <div className="relative p-8 md:p-12 rounded-3xl border border-glass-border bg-glass-bg backdrop-blur-xl hover:border-accent-blue/30 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-[0.65rem] font-bold text-accent-blue uppercase tracking-widest">About Me</span>
                  </div>
                  <h1 className="text-4xl md:text-6xl font-black text-text-primary mb-2">
                    Chen <span className="text-gradient-accent">Sreyneat</span>
                  </h1>
                  <p className="text-accent-blue text-lg md:text-xl font-medium tracking-tight mb-4">Software Development Student</p>
                  <p className="text-text-secondary text-base md:text-lg leading-relaxed max-w-3xl italic">
                    &quot;I am a dedicated developer passionate about crafting beautiful, user-friendly applications. I blend software engineering with creativity to build responsive digital experiences.&quot;
                  </p>
                </div>

                {/* Social Connect Panel */}
                <div className="flex flex-wrap md:flex-col gap-3 min-w-[160px]">
                  <a 
                    href="https://www.linkedin.com/in/chen-sreyneat-749654313/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-linear-to-r from-[#2c53a6] to-[#60a5fa] hover:from-[#214185] hover:to-[#4fa1ff] text-xs font-bold text-white shadow-md shadow-blue-500/10 active:scale-95 transition-all"
                  >
                    <FaLinkedin size={16} /> LinkedIn
                  </a>
                  <a 
                    href="https://github.com/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-slate-900/50 border border-glass-border text-xs font-bold text-text-secondary hover:text-white transition-all"
                  >
                    <FaGithub size={16} /> GitHub
                  </a>
                  <a 
                    href="https://t.me/Neat198" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-slate-900/50 border border-glass-border text-xs font-bold text-text-secondary hover:text-white transition-all"
                  >
                    <FaTelegram size={16} /> Telegram
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Left Column Dashboard (4 Columns) */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* 2. Personal Info Card */}
            <motion.div 
              variants={itemVariants}
              className="relative group"
            >
              <div className="relative p-6 rounded-2xl border border-glass-border bg-glass-bg backdrop-blur-xl hover:border-accent-blue/30 transition-all duration-300">
                <h3 className="text-base font-bold text-white mb-6 uppercase tracking-wider border-b border-glass-border/50 pb-3">Pillars</h3>
                <div className="space-y-6">
                  {/* Location */}
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-accent-blue/10 flex items-center justify-center text-accent-blue border border-accent-blue/20 flex-shrink-0">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <span className="text-[0.6rem] uppercase tracking-wider text-gray-500 font-bold block">Base</span>
                      <span className="text-sm font-bold text-text-primary">Phnom Penh, Cambodia</span>
                    </div>
                  </div>

                  {/* Languages */}
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-accent-blue/10 flex items-center justify-center text-accent-blue border border-accent-blue/20 flex-shrink-0">
                      <Globe size={18} />
                    </div>
                    <div>
                      <span className="text-[0.6rem] uppercase tracking-wider text-gray-500 font-bold block mb-1">Languages</span>
                      <div className="flex gap-2">
                        <span className="px-2.5 py-0.5 rounded-md bg-glass-bg border border-glass-border text-[0.65rem] font-bold text-logo-color uppercase tracking-wider">Khmer</span>
                        <span className="px-2.5 py-0.5 rounded-md bg-glass-bg border border-glass-border text-[0.65rem] font-bold text-logo-color uppercase tracking-wider">English</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 3. Soft Skills Card */}
            <motion.div 
              variants={itemVariants}
              className="relative group"
            >
              <div className="relative p-6 rounded-2xl border border-glass-border bg-glass-bg backdrop-blur-xl hover:border-accent-blue/30 transition-all duration-300">
                <h3 className="text-base font-bold text-white mb-6 uppercase tracking-wider border-b border-glass-border/50 pb-3">Soft Skills</h3>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    { icon: Users, label: "Teamwork" },
                    { icon: Lightbulb, label: "Problem Solving" },
                    { icon: CheckCircle, label: "Responsible" },
                    { icon: MessageSquare, label: "Communication" }
                  ].map((skill, i) => (
                    <div 
                      key={i} 
                      className="flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-900/40 border border-glass-border text-xs font-bold text-text-secondary hover:text-white hover:bg-accent-blue/5 hover:border-accent-blue/20 transition-all cursor-default"
                    >
                      <skill.icon size={16} className="text-accent-blue" /> 
                      <span>{skill.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>

          {/* Right Column Dashboard (8 Columns) */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* 4. Work Experience Card */}
            <motion.div 
              variants={itemVariants}
              className="relative group"
            >
              <div className="relative p-8 rounded-2xl border border-glass-border bg-glass-bg backdrop-blur-xl hover:border-accent-blue/30 transition-all duration-300">
                <h3 className="text-lg font-bold text-white mb-8 uppercase tracking-wider border-b border-glass-border/50 pb-4 flex items-center gap-3">
                  <Briefcase size={20} className="text-accent-blue" />
                  Work Experience
                </h3>
                
                <div className="relative border-l border-glass-border pl-6 ml-4 space-y-8">
                  {/* Experience 1: First Service Company */}
                  <div className="relative">
                    <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-accent-blue border-4 border-[#010413]" />
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                      <div>
                        <span className="text-accent-blue text-[0.65rem] font-black uppercase tracking-widest block mb-0.5">July, 2025</span>
                        <h4 className="text-xl font-bold text-text-primary">First Service Company</h4>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-[0.6rem] font-bold text-logo-color uppercase tracking-widest w-fit">
                        Digital Marketing & Designer
                      </span>
                    </div>
                    <ul className="space-y-2 text-text-secondary text-sm leading-relaxed">
                      <li className="flex gap-3">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-accent-blue shrink-0" />
                        <p>Developed creative content and produced short videos, graphics, and posts aligned with brand messaging for social media platforms.</p>
                      </li>
                      <li className="flex gap-3">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-accent-blue shrink-0" />
                        <p>Managed social media accounts including Facebook and TikTok, and supported the sales team with creative materials.</p>
                      </li>
                      <li className="flex gap-3">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-accent-blue shrink-0" />
                        <p>Improved communication and teamwork skills in a collaborative marketing environment.</p>
                      </li>
                    </ul>
                  </div>

                  {/* Experience 2: CDDE */}
                  <div className="relative">
                    <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-accent-blue border-4 border-[#010413]" />
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                      <div>
                        <span className="text-accent-blue text-[0.65rem] font-black uppercase tracking-widest block mb-0.5">March - April, 2024</span>
                        <h4 className="text-xl font-bold text-text-primary">Center of Digital & Distance Education</h4>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-[0.6rem] font-bold text-logo-color uppercase tracking-widest w-fit">
                        Teaching Staff
                      </span>
                    </div>
                    <ul className="space-y-2 text-text-secondary text-sm leading-relaxed">
                      <li className="flex gap-3">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-accent-blue shrink-0" />
                        <p>Delivered lessons to 578 students across 9 high schools, guiding them on how to use the Ministry of Education mobile application.</p>
                      </li>
                      <li className="flex gap-3">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-accent-blue shrink-0" />
                        <p>Managed classroom activities, ensured student understanding, and communicated confidently with large groups.</p>
                      </li>
                    </ul>
                  </div>

                  {/* Experience 3: Village Festival */}
                  <div className="relative">
                    <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-accent-blue border-4 border-[#010413]" />
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                      <div>
                        <span className="text-accent-blue text-[0.65rem] font-black uppercase tracking-widest block mb-0.5">March, 2024</span>
                        <h4 className="text-xl font-bold text-text-primary">Village Festival</h4>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-[0.6rem] font-bold text-logo-color uppercase tracking-widest w-fit">
                        Entertainment Team
                      </span>
                    </div>
                    <ul className="space-y-2 text-text-secondary text-sm leading-relaxed">
                      <li className="flex gap-3">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-accent-blue shrink-0" />
                        <p>Organized traditional games and activities, managed event schedules smoothly, and ensured participant satisfaction.</p>
                      </li>
                    </ul>
                  </div>

                  {/* Experience 4: Student Associate of RUPP */}
                  <div className="relative">
                    <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-accent-blue border-4 border-[#010413]" />
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                      <div>
                        <span className="text-accent-blue text-[0.65rem] font-black uppercase tracking-widest block mb-0.5">January - March, 2024</span>
                        <h4 className="text-xl font-bold text-text-primary">Student Associate of RUPP</h4>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-[0.6rem] font-bold text-logo-color uppercase tracking-widest w-fit">
                        Guide Team Member
                      </span>
                    </div>
                    <ul className="space-y-2 text-text-secondary text-sm leading-relaxed">
                      <li className="flex gap-3">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-accent-blue shrink-0" />
                        <p>Assisted and guided visitors during university events, providing clear directions and information.</p>
                      </li>
                      <li className="flex gap-3">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-accent-blue shrink-0" />
                        <p>Supported overall event coordination and operations.</p>
                      </li>
                    </ul>
                  </div>

                  {/* Experience 5: SROLANH Smart Store */}
                  <div className="relative">
                    <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-accent-blue border-4 border-[#010413]" />
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                      <div>
                        <span className="text-accent-blue text-[0.65rem] font-black uppercase tracking-widest block mb-0.5">2022 - May 2023</span>
                        <h4 className="text-xl font-bold text-text-primary">SROLANH Smart Store</h4>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-[0.6rem] font-bold text-logo-color uppercase tracking-widest w-fit">
                        Graphic Designer
                      </span>
                    </div>
                    <ul className="space-y-2 text-text-secondary text-sm leading-relaxed">
                      <li className="flex gap-3">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-accent-blue shrink-0" />
                        <p>Crafted visually compelling designs for social media and promotional materials that resonated with the brand&apos;s core identity.</p>
                      </li>
                      <li className="flex gap-3">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-accent-blue shrink-0" />
                        <p>Collaborated with marketing teams to develop creative campaigns that effectively engaged target audiences.</p>
                      </li>
                    </ul>
                  </div>

                </div>
              </div>
            </motion.div>

            {/* 5. Education Journey Card (Added for completeness and professional look) */}
            <motion.div 
              variants={itemVariants}
              className="relative group"
            >
              <div className="relative p-8 rounded-2xl border border-glass-border bg-glass-bg backdrop-blur-xl hover:border-accent-blue/30 transition-all duration-300">
                <h3 className="text-lg font-bold text-white mb-8 uppercase tracking-wider border-b border-glass-border/50 pb-4 flex items-center gap-3">
                  <GraduationCap size={22} className="text-accent-blue" />
                  Education
                </h3>
                
                <div className="relative border-l border-glass-border pl-6 ml-4 space-y-8">
                  <div className="relative">
                    <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-accent-blue border-4 border-[#010413]" />
                    
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                      <div>
                        <span className="text-accent-blue text-[0.65rem] font-black uppercase tracking-widest block mb-0.5">2022 - Present</span>
                        <h4 className="text-xl font-bold text-text-primary">Royal University of Phnom Penh</h4>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-[0.6rem] font-bold text-logo-color uppercase tracking-widest w-fit">
                        ITE Student
                      </span>
                    </div>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      Currently in my 4th year of Bachelor&apos;s degree in Information Technology Engineering. Awarded a full 4-year scholarship covering tuition fees for outstanding academic performance.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>

        </motion.div>
      </main>
    </div>
  );
}
