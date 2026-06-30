import { MapPin, Globe, Calendar, ExternalLink, GraduationCap, Award, Compass } from "lucide-react";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-transparent">
      <div className="max-w-6xl mx-auto px-4 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Fancy Typographic & Interactive Stats Dashboard (No Image) */}
          <div className="lg:col-span-5 order-2 lg:order-1 w-full">
            <div className="grid grid-cols-2 gap-4">
              
              {/* Card 1: Main Highlight (Spans 2 columns) */}
              <div className="col-span-2 relative">
                <div className="relative p-6 rounded-2xl border border-glass-border bg-glass-bg backdrop-blur-xl hover:border-accent-blue/30 hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-accent-blue/10 rounded-xl text-accent-blue flex items-center justify-center">
                      <Compass size={24} className="animate-spin" style={{ animationDuration: '20s' }} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white uppercase tracking-wider">Engineering Focus</h4>
                      <p className="text-[0.65rem] text-text-secondary">IT Engineering Major</p>
                    </div>
                  </div>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    Focused on building responsive web applications, writing clean code, and designing intuitive user interfaces.
                  </p>
                </div>
              </div>

              {/* Card 2: Scholarship Info */}
              <div className="relative">
                <div className="relative p-5 rounded-2xl border border-glass-border bg-glass-bg backdrop-blur-xl hover:border-accent-blue/30 hover:-translate-y-1 transition-all duration-300 h-full flex flex-col justify-between">
                  <div className="p-3 bg-accent-blue/10 rounded-xl text-accent-blue flex items-center justify-center w-fit mb-4">
                    <GraduationCap size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white mb-1">Scholarship</h4>
                    <p className="text-[0.65rem] text-text-secondary leading-normal">Awarded a full 4-year academic scholarship at RUPP.</p>
                  </div>
                </div>
              </div>

              {/* Card 3: Location / Map */}
              <div className="relative">
                <div className="relative p-5 rounded-2xl border border-glass-border bg-glass-bg backdrop-blur-xl hover:border-accent-blue/30 hover:-translate-y-1 transition-all duration-300 h-full flex flex-col justify-between">
                  <div className="p-3 bg-accent-blue/10 rounded-xl text-accent-blue flex items-center justify-center w-fit mb-4">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white mb-1">Location</h4>
                    <p className="text-[0.65rem] text-text-secondary leading-normal">Phnom Penh, Cambodia</p>
                  </div>
                </div>
              </div>

              {/* Card 4: Languages & Global Communication (Spans 2 columns) */}
              <div className="col-span-2 relative">
                <div className="relative p-5 rounded-2xl border border-glass-border bg-glass-bg backdrop-blur-xl hover:border-accent-blue/30 hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-accent-blue/10 rounded-xl text-accent-blue flex items-center justify-center">
                        <Globe size={20} />
                      </div>
                      <span className="text-xs font-bold text-white uppercase tracking-wider">Languages</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="px-3 py-1 rounded-lg bg-glass-bg border border-glass-border text-[0.65rem] font-bold text-logo-color uppercase tracking-wider">Khmer</span>
                      <span className="px-3 py-1 rounded-lg bg-glass-bg border border-glass-border text-[0.65rem] font-bold text-logo-color uppercase tracking-wider">English</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: About Details */}
          <div className="lg:col-span-7 space-y-8 text-left order-1 lg:order-2">
            <div className="space-y-4 flex flex-col items-start">
              <Link 
                href="/about" 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-accent-blue text-xs font-bold transition-all hover:bg-accent-blue/20 w-fit"
              >
                <Calendar size={14} /> Schedule a call <ExternalLink size={12} />
              </Link>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight text-text-primary m-0">
                Fusing <span className="text-gradient-accent">Engineering</span> <br />
                With Creative Design
              </h2>
            </div>

            <div className="space-y-6 text-text-secondary text-base md:text-lg leading-relaxed max-w-2xl">
              <p>
                I am a dedicated developer passionate about crafting beautiful, user-friendly applications. I blend software engineering with creativity to build responsive digital experiences.
              </p>
              <p>
                With a solid foundation in both programming and UI/UX design, I approach projects with a focus on clean code and pixel-perfect aesthetics. I believe that quality code is just as important as visual design.
              </p>
            </div>

            <div className="pt-4 flex justify-center lg:justify-start">
              <Link 
                href="/about" 
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-accent-blue text-accent-blue hover:bg-accent-blue hover:text-white text-sm font-bold transition-all duration-300 active:scale-95 cursor-pointer"
              >
                Read More About Me <ExternalLink size={18} />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
