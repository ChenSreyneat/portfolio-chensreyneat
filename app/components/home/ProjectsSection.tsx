"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function ProjectsSection() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const projects = [
    {
      title: "Computer Website Store",
      desc: "A premium e-commerce destination for high-end computer hardware, peripherals, and custom builds.",
      tags: ["React", "Node.js", "Express"],
      gradient: "from-[#0a1c4b]/40 to-[#1d70a2]/20",
      color: "text-[#a6e3f5]",
      github: "https://github.com/",
      live: "https://www.servicemeite.io/",
      image: "/image/image-service-me.png"
    },
    {
      title: "Travel With Us",
      desc: "An immersive landing page for a luxury travel agency featuring hand-picked global destinations.",
      tags: ["Next.js", "Tailwind", "Framer Motion"],
      gradient: "from-[#0f2d7a]/40 to-[#0a1c4b]/20",
      color: "text-[#8bb8d9]",
      github: "https://github.com/kheangsenghorng/TourBooking-anywhere",
      live: "https://tourbooking.servicemeite.io/",
      image: "/image/image-travel-with-us.png"
    },
    {
      title: "Tour Booking Platform Design",
      desc: "Full UI/UX design for a comprehensive tour management system, from discovery to secure booking.",
      tags: ["Figma", "UI/UX", "Prototyping"],
      gradient: "from-[#1d70a2]/40 to-[#a6e3f5]/10",
      color: "text-[#a6e3f5]",
      github: "https://github.com/kheangsenghorng/WCT-II-Service",
      live: "https://www.servicemeite.io/",
      image: "/image/image-service-me.png"
    },
    {
      title: "Viral Video Marketing",
      desc: "Professional video editing and cinematic color grading for high-engagement social media content.",
      tags: ["CapCut", "Video Editing", "Social Media"],
      gradient: "from-[#0a1c4b]/40 to-[#1d70a2]/20",
      color: "text-[#a6e3f5]",
      github: "",
      live: "https://www.tiktok.com/@code.bridge2026",
      image: "/image/image-tik-tok.png"
    },
    {
      title: "Brand Identity Design",
      desc: "Crafting unique visual identities, logos, and comprehensive brand guidelines for modern startups.",
      tags: ["Figma", "Branding", "Illustrator"],
      gradient: "from-[#0f2d7a]/40 to-[#0a1c4b]/20",
      color: "text-[#8bb8d9]",
      github: "",
      live: "https://www.behance.net/chensreyneat",
      image: "/image/image-poster.png"
    },
    {
      title: "UI/UX Mobile App",
      desc: "User-centric mobile application design featuring interactive prototyping and user experience optimization.",
      tags: ["Figma", "UX Design", "Mobile"],
      gradient: "from-[#1d70a2]/40 to-[#a6e3f5]/10",
      color: "text-[#a6e3f5]",
      github: "https://github.com/",
      live: "https://google.com/",
      image: ""
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
      const cardWidth = cardElement ? cardElement.offsetWidth : 280;
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
          const cardWidth = cardElement ? cardElement.offsetWidth : 280;
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
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="flex flex-col items-center text-center mb-16 px-4 relative z-10">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-8 h-[1px] bg-accent-blue/50" />
          <span className="text-accent-blue font-bold uppercase tracking-[0.4em] text-[0.6rem]">Projects</span>
          <div className="w-8 h-[1px] bg-accent-blue/50" />
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-white max-w-2xl leading-tight mb-4">
          Featured <span className="text-accent-blue">Projects</span>
        </h2>
        <p className="text-text-secondary text-base md:text-lg max-w-2xl">
          A selection of my recent works where design meets functionality. Each project is crafted with care and technical precision.
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
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 w-[280px] md:w-[360px] group relative flex flex-col justify-between bg-white/[0.03] border border-white/10 rounded-[2rem] p-6 transition-all duration-500 hover:bg-white/5 hover:border-accent-blue/30 hover:-translate-y-1.5"
            >
              <div className="flex flex-col">
                <div className={`w-full aspect-video bg-linear-to-br ${project.gradient} rounded-xl mb-6 flex items-center justify-center overflow-hidden relative`}>
                  {project.image ? (
                    <Image 
                      src={project.image} 
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <span className={`${project.color} font-black text-2xl tracking-tighter opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500`}>
                      {project.title.split(' ')[0]}
                    </span>
                  )}

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/10 rounded-full hover:bg-white/20 text-white transition-colors"
                      >
                        <FaGithub size={20} />
                      </a>
                    )}
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/10 rounded-full hover:bg-white/20 text-white transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-accent-blue transition-colors">{project.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-6">
                  {project.desc}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[0.7rem] font-bold text-text-secondary">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
