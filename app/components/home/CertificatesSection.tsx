"use client";

import { useState, useEffect, useRef } from "react";
import { Award, Trophy, Star, ExternalLink, FileText, Code, ChevronLeft, ChevronRight, X, Image as ImageIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function CertificatesSection() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  
  // Pop-up modal state
  const [activeFile, setActiveFile] = useState<string | null>(null);
  const [activeTitle, setActiveTitle] = useState<string>("");
  const [activeType, setActiveType] = useState<"pdf" | "image">("pdf");

  const certificates = [
    {
      title: "C++, C#, & OOP Programming",
      period: "2023",
      organization: "ITE Department",
      description: "Certification of proficiency in C++, C#, and Object-Oriented Programming (OOP) concepts and practical applications.",
      fileUrl: "/image/certificate-cpp-csharp-oop.png",
      type: "image" as const,
      icon: Code
    },
    {
      title: "Academic Certificate Record",
      period: "2022 - Present",
      organization: "Royal University of Phnom Penh",
      description: "Official record of academic courses, training history, and credits completed during the engineering program.",
      fileUrl: "/image/certificate-record.pdf",
      type: "pdf" as const,
      icon: FileText
    },
    {
      title: "RUPP Academic Accomplishment",
      period: "2022 - Present",
      organization: "Royal University of Phnom Penh",
      description: "Certificate of academic achievement and outstanding performance at the Royal University of Phnom Penh.",
      fileUrl: "/image/certificate-RUPP.png",
      type: "image" as const,
      icon: Award
    },
    {
      title: "Professional Education & Development (PED)",
      period: "2024",
      organization: "Professional Development Program",
      description: "Recognition of successful completion of the Professional Education and Development training course.",
      fileUrl: "/image/certificate-PED.png",
      type: "image" as const,
      icon: Star
    },
    {
      title: "General Achievements & Awards",
      period: "Various",
      organization: "Tech Communities & Workshops",
      description: "Compiled certificates and awards from tech workshops, seminars, and extra-curricular participations.",
      fileUrl: "/image/Certificate.pdf",
      type: "pdf" as const,
      icon: Trophy
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
    <section id="certificates" className="py-24 relative overflow-hidden bg-transparent">
      <div className="flex flex-col items-center text-center mb-16 px-4">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-8 h-[1px] bg-accent-blue/50" />
          <span className="text-accent-blue font-bold uppercase tracking-[0.4em] text-[0.6rem]">Achievements</span>
          <div className="w-8 h-[1px] bg-accent-blue/50" />
        </div>
        <h2 className="text-3xl md:text-5xl font-black mb-4">Certificates & <span className="text-gradient-accent">Awards</span></h2>
        <p className="text-text-secondary text-base md:text-lg max-w-2xl">Recognitions of my dedication to continuous learning and professional growth.</p>
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
          {certificates.map((item, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 w-[290px] md:w-[400px] group relative flex flex-col justify-between bg-glass-bg border border-glass-border rounded-[2rem] p-6 md:p-8 transition-all duration-500 hover:border-accent-blue/30 hover:-translate-y-1.5"
            >
              <div className="flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-accent-blue/10 rounded-xl text-accent-blue">
                    <item.icon size={24} />
                  </div>
                  <span className="text-[0.75rem] font-bold text-text-secondary">{item.period}</span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-text-primary group-hover:text-accent-blue transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-accent-blue/80 text-sm font-semibold">{item.organization}</p>
                  <p className="text-text-secondary text-sm leading-relaxed mt-4 mb-6">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Action Button: Triggers Modal Pop-up */}
              <div className="pt-4 border-t border-glass-border/40 mt-auto">
                <button
                  onClick={() => {
                    setActiveFile(item.fileUrl);
                    setActiveTitle(item.title);
                    setActiveType(item.type);
                  }}
                  className="inline-flex items-center gap-2 text-xs font-bold text-accent-blue hover:text-white transition-colors group/btn cursor-pointer bg-transparent border-0 outline-none"
                >
                  {item.type === "pdf" ? <FileText size={14} /> : <ImageIcon size={14} />}
                  <span>{item.type === "pdf" ? "View Certificate PDF" : "View Certificate Image"}</span>
                  <ExternalLink size={12} className="opacity-65 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pop-up Modal (Certificate Viewer) */}
      <AnimatePresence>
        {activeFile && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-10">
            {/* Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                setActiveFile(null);
              }}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />
            
            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="relative w-full max-w-4xl h-[85vh] bg-[#010413] border border-glass-border rounded-3xl overflow-hidden shadow-2xl flex flex-col z-10"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-glass-border/50 bg-slate-950/40">
                <div>
                  <h3 className="text-base md:text-lg font-bold text-white">{activeTitle}</h3>
                  <p className="text-[0.6rem] text-accent-blue uppercase tracking-widest font-black">
                    {activeType === "pdf" ? "Certificate Viewer (PDF)" : "Certificate Viewer (Image)"}
                  </p>
                </div>
                <button
                  onClick={() => {
                    setActiveFile(null);
                  }}
                  className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-text-secondary hover:text-white transition-all cursor-pointer border-0 outline-none"
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>
              </div>
              
              {/* Content Area */}
              <div className="flex-grow w-full bg-slate-950/20 relative flex items-center justify-center overflow-auto p-4">
                {activeType === "pdf" ? (
                  <iframe
                    src={`${activeFile}#toolbar=0&navpanes=0`}
                    className="w-full h-full border-0 rounded-2xl"
                    title={activeTitle}
                  />
                ) : (
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                      src={activeFile}
                      alt={activeTitle}
                      fill
                      sizes="(max-width: 1024px) 100vw, 1024px"
                      className="object-contain rounded-2xl shadow-2xl border border-glass-border/30"
                    />
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
