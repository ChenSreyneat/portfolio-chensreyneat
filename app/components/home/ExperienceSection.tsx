"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { MapPin, Clock, User, Phone, ChevronLeft, ChevronRight } from "lucide-react";

export default function ExperienceSection() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const experiences = [
    {
      company: "Vertex Cambodia",
      role: "IT Support",
      period: "2024 - Present",
      workMode: "Hybrid",
      location: "Phnom Penh",
      department: "IT Support",
      description: "Provided comprehensive technical assistance, troubleshooting hardware and software issues for staff. Maintained network stability and supported IT infrastructure to ensure uninterrupted business operations.",
      logo: "/image/Vertex.png",
      color: "#1d70a2",
      reference: { name: "Heang Lihorng", tel: "010 773 391" }
    },
    {
      company: "First Service",
      role: "Marketing Team",
      period: "2023 - 2024",
      workMode: "Remote",
      location: "Phnom Penh",
      department: "Marketing",
      description: "Developed and executed digital marketing strategies across social media platforms to enhance brand visibility. Analyzed market trends and consumer behavior to create engaging content and drive customer growth.",
      logo: "/image/first service.png",
      color: "#1d70a2",
      reference: { name: "Phom Marady", tel: "087 321 555" }
    },
    {
      company: "K-loan",
      role: "Operation Team",
      period: "2021 - 2023",
      workMode: "On-site",
      location: "Phnom Penh",
      department: "Operations",
      description: "Optimized loan processing workflows and managed complex customer documentation with high accuracy. Collaborated with the finance team to ensure seamless service delivery and operational efficiency.",
      logo: "/image/k-loan.png",
      color: "#1d70a2",
      reference: { name: "Mr. Sisowath Choucmaravan", tel: "081 440 000" }
    }
  ];

  const handleScrollButtons = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      setShowLeftArrow(scrollLeft > 10);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const handleScroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const cardElement = sliderRef.current.firstElementChild as HTMLElement;
      const cardWidth = cardElement ? cardElement.offsetWidth : 300;
      const scrollAmount = cardWidth + 24; // Card width + gap
      
      sliderRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    slider.addEventListener("scroll", handleScrollButtons);
    handleScrollButtons();
    window.addEventListener("resize", handleScrollButtons);

    let intervalId: NodeJS.Timeout;

    const startAutoPlay = () => {
      intervalId = setInterval(() => {
        const { scrollLeft, scrollWidth, clientWidth } = slider;
        const maxScroll = scrollWidth - clientWidth;
        if (scrollLeft >= maxScroll - 10) {
          slider.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          const cardElement = slider.firstElementChild as HTMLElement;
          const cardWidth = cardElement ? cardElement.offsetWidth : 300;
          const scrollAmount = cardWidth + 24; // width + gap
          slider.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
      }, 3000);
    };

    startAutoPlay();

    const handleMouseEnter = () => clearInterval(intervalId);
    const handleMouseLeave = () => startAutoPlay();

    slider.addEventListener("mouseenter", handleMouseEnter);
    slider.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      slider.removeEventListener("scroll", handleScrollButtons);
      window.removeEventListener("resize", handleScrollButtons);
      clearInterval(intervalId);
      slider.removeEventListener("mouseenter", handleMouseEnter);
      slider.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="flex flex-col items-center text-center mb-16 relative z-10 px-4">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-8 h-[1px] bg-accent-blue/50" />
          <span className="text-accent-blue font-bold uppercase tracking-[0.4em] text-[0.6rem]">Professional History</span>
          <div className="w-8 h-[1px] bg-accent-blue/50" />
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-text-primary max-w-2xl leading-tight mb-4">
          Professional <span className="text-accent-blue">Journey</span>
        </h2>
        <p className="text-text-secondary text-base md:text-lg max-w-lg italic">
          &quot;Dedication and growth across diverse industries and roles.&quot;
        </p>
      </div>

      {/* Slider Container Wrapper */}
      <div className="relative w-full z-10 max-w-7xl mx-auto px-4 md:px-12">
        
        {/* Left Circular Arrow Button */}
        <button
          onClick={() => handleScroll("left")}
          className={`absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-slate-900/90 dark:bg-white/10 backdrop-blur-md text-white rounded-full hidden lg:flex items-center justify-center z-30 transition-all duration-300 border border-slate-800/50 dark:border-white/10 hover:bg-slate-800 dark:hover:bg-white/20 hover:scale-105 active:scale-95 cursor-pointer ${
            showLeftArrow ? "opacity-100 pointer-events-auto translate-x-0" : "opacity-0 pointer-events-none -translate-x-4"
          }`}
          aria-label="Scroll Left"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>

        {/* Right Circular Arrow Button */}
        <button
          onClick={() => handleScroll("right")}
          className={`absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-slate-900/90 dark:bg-white/10 backdrop-blur-md text-white rounded-full hidden lg:flex items-center justify-center z-30 transition-all duration-300 border border-slate-800/50 dark:border-white/10 hover:bg-slate-800 dark:hover:bg-white/20 hover:scale-105 active:scale-95 cursor-pointer ${
            showRightArrow ? "opacity-100 pointer-events-auto translate-x-0" : "opacity-0 pointer-events-none translate-x-4"
          }`}
          aria-label="Scroll Right"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* Scrollable Container */}
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto scroll-smooth py-6 px-4 select-none no-scrollbar [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 w-[290px] md:w-[400px] group relative flex flex-col justify-between bg-glass-bg border border-glass-border rounded-[2rem] p-6 md:p-8 transition-all duration-500 hover:border-accent-blue/30 hover:-translate-y-1.5"
            >
              <div className="flex flex-col">
                {/* Header: Title & Company + Logo */}
                <div className="flex flex-row justify-between items-start gap-4 mb-6 pb-6 border-b border-glass-border">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="text-accent-blue text-[0.55rem] font-bold uppercase tracking-[0.3em]">{exp.company}</span>
                      <div className="w-1.5 h-1.5 rounded-full bg-text-secondary/20" />
                      <span className="text-text-secondary text-[0.55rem] font-bold uppercase tracking-[0.3em]">{exp.period}</span>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-text-primary group-hover:text-accent-blue transition-colors duration-300 mb-2 leading-snug">
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3">
                      <div className="flex items-center gap-1 text-gray-500">
                        <MapPin size={12} className="text-accent-blue/70" />
                        <span className="text-[0.65rem] font-medium">{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-500">
                        <Clock size={12} className="text-accent-blue/70" />
                        <span className="text-[0.65rem] font-medium">{exp.workMode}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Company Logo */}
                  <div className="relative w-12 h-12 flex-shrink-0 bg-white rounded-xl p-2 rotate-3 group-hover:rotate-0 transition-transform duration-500">
                    <Image src={exp.logo} alt={exp.company} width={48} height={48} className="w-full h-full object-contain" />
                  </div>
                </div>

                {/* Body Content */}
                <p className="text-text-secondary text-sm leading-relaxed mb-6 group-hover:text-text-primary transition-colors">
                  {exp.description}
                </p>
              </div>

              {/* Reference & Department Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-glass-border mt-auto">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-accent-blue/10 flex items-center justify-center border border-accent-blue/20 flex-shrink-0">
                    <User size={14} className="text-accent-blue" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[0.5rem] text-text-secondary uppercase font-black tracking-widest mb-0.5 truncate">Reference</p>
                    <p className="text-[0.65rem] text-text-primary font-bold truncate">{exp.reference.name}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-glass-bg border border-glass-border flex-shrink-0 flex items-center justify-center">
                    <Phone size={14} className="text-text-secondary" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[0.5rem] text-text-secondary uppercase font-black tracking-widest mb-0.5 truncate">Contact</p>
                    <a href={`tel:${exp.reference.tel}`} className="text-[0.65rem] text-accent-blue font-bold hover:underline truncate block">{exp.reference.tel}</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
