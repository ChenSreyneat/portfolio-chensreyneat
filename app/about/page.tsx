"use client";
import {
  MapPin, Globe, Users, Lightbulb, CheckCircle, MessageSquare,
  Mail, ChevronLeft
} from "lucide-react";
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-accent-blue/15 blur-[120px] -z-10 pointer-events-none" />

      <main className="max-w-6xl mx-auto px-4 pt-12 pb-24 relative z-10">
        {/* Back Link */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-text-secondary hover:text-accent-blue transition-colors mb-12 group"
        >
          <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-bold text-sm uppercase tracking-widest">Back to Home</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-16 lg:gap-24 items-start">

          {/* Left Sidebar */}
          <aside className="space-y-12">
            {/* Profile Picture */}
            <div className="relative w-full aspect-[3/4] flex items-center justify-center group">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-accent-blue/10 blur-[40px] rounded-full group-hover:bg-accent-blue/20 transition-all duration-700" />
              
              {/* Profile Image with Bottom Fade */}
              <div className="relative w-full h-full rounded-[2rem] overflow-hidden border border-white/5 group-hover:border-accent-blue/30 transition-all duration-700">
                <Image
                  src="/image/remove-bg.png"
                  alt="Chen Sreyneat"
                  fill
                  className="object-contain object-bottom group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent" />
              </div>
            </div>

            <div className="space-y-8 px-2">
              {/* Location */}
              <div className="flex items-center gap-4 text-text-secondary">
                <div className="w-10 h-10 rounded-xl bg-accent-blue/10 flex items-center justify-center text-accent-blue border border-accent-blue/20">
                  <MapPin size={18} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[0.6rem] uppercase tracking-tighter text-gray-500 font-bold">Location</span>
                  <span className="text-sm font-bold text-white">Phnom Penh, Cambodia</span>
                </div>
              </div>

              {/* Languages */}
              <div className="space-y-4">
                <h3 className="text-sm font-black uppercase tracking-[0.2em] text-gray-500 flex items-center gap-2">
                  <Globe size={16} /> Languages
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-4 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[0.7rem] font-bold text-accent-blue uppercase tracking-widest">Khmer</span>
                  <span className="px-4 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[0.7rem] font-bold text-accent-blue uppercase tracking-widest">English</span>
                </div>
              </div>

              {/* Soft Skills */}
              <div className="space-y-4">
                <h3 className="text-sm font-black uppercase tracking-[0.2em] text-gray-500 flex items-center gap-2">
                  <Users size={16} /> Soft Skills
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    { icon: Users, label: "Teamwork" },
                    { icon: Lightbulb, label: "Problem Solving" },
                    { icon: CheckCircle, label: "Responsible" },
                    { icon: MessageSquare, label: "Communication" }
                  ].map((skill, i) => (
                    <div key={i} className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/[0.03] border border-white/5 text-xs font-bold text-gray-400 hover:text-white hover:bg-white/5 hover:border-accent-blue/30 transition-all cursor-default">
                      <skill.icon size={16} className="text-accent-blue" /> {skill.label}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Right Main Content */}
          <div className="space-y-16">
            <div className="space-y-8">
              <div className="flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-[1px] bg-accent-blue/50" />
                  <span className="text-accent-blue font-bold uppercase tracking-[0.4em] text-[0.6rem]">About Me</span>
                  <div className="w-8 h-[1px] bg-accent-blue/50" />
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-4">
                  Chen <span className="text-accent-blue">Sreyneat</span>
                </h1>
                <p className="text-[#a6e3f5] text-xl md:text-2xl font-medium tracking-tight mb-6">Software Development Student</p>
                <p className="text-text-secondary text-lg leading-relaxed italic max-w-2xl">
                  &quot;I am a dedicated developer who loves crafting beautiful, user-friendly applications. I blend creativity with technology to create amazing experiences.&quot;
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3">
                <a 
                  href="https://www.linkedin.com/in/chen-sreyneat-749654313/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent-blue/10 border border-accent-blue/20 text-[0.7rem] font-bold text-white hover:bg-accent-blue transition-all"
                >
                  <FaLinkedin size={16} /> LinkedIn
                </a>
                <a 
                  href="https://github.com/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-[0.7rem] font-bold text-gray-400 hover:bg-white/10 hover:text-white transition-all"
                >
                  <FaGithub size={16} /> GitHub
                </a>
                <a 
                  href="https://t.me/Neat198" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-[0.7rem] font-bold text-gray-400 hover:bg-white/10 hover:text-white transition-all"
                >
                  <FaTelegram size={16} /> Telegram
                </a>
                <a 
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=chensreyneat198@gmail.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-[0.7rem] font-bold text-gray-400 hover:bg-white/10 hover:text-white transition-all"
                >
                  <Mail size={16} /> Gmail
                </a>
              </div>
            </div>

            {/* Experience Section in About */}
            <div className="space-y-10">
              <h2 className="text-3xl font-bold text-white flex items-center gap-4">
                <div className="w-10 h-[2px] bg-accent-blue" />
                Work Experience
              </h2>

              <div className="grid grid-cols-1 gap-8">
                <div className="group relative bg-white/[0.03] border border-white/10 rounded-[2rem] p-8 md:p-10 transition-all duration-500 hover:bg-white/5 hover:border-accent-blue/30 shadow-2xl">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                    <div>
                      <span className="text-accent-blue text-[0.6rem] font-black uppercase tracking-widest block mb-1">2022 - May 2023</span>
                      <h3 className="text-2xl font-bold text-white group-hover:text-accent-blue transition-colors">SROLANH Smart Store</h3>
                    </div>
                    <span className="px-4 py-1.5 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-[0.6rem] font-bold text-white uppercase tracking-widest">Graphic Designer</span>
                  </div>
                  <ul className="space-y-4 text-text-secondary text-sm md:text-base leading-relaxed">
                    <li className="flex gap-4">
                      <div className="mt-2 w-1.5 h-1.5 rounded-full bg-accent-blue shrink-0" />
                      <p>Crafted visually compelling designs for social media and promotional materials that resonated with the brand is core identity.</p>
                    </li>
                    <li className="flex gap-4">
                      <div className="mt-2 w-1.5 h-1.5 rounded-full bg-accent-blue shrink-0" />
                      <p>Collaborated with marketing teams to develop creative campaigns that effectively engaged target audiences.</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
