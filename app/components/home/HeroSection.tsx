import { Download } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="home" className="min-h-[calc(100vh-200px)] flex flex-col justify-center py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content - Appears second on mobile */}
        <div className="text-left order-2 lg:order-1 py-24">
          <div className="inline-block px-4 py-1.5 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-accent-blue text-sm font-bold mb-6">
            Available for freelance
          </div>
          <h1 className="text-4xl md:text-5xl mb-4 leading-tight font-bold">
            Hi, I&apos;m <span className="text-gradient-accent">Chen Sreyneat</span>
          </h1>
          <p className="text-gradient text-base md:text-lg mb-6 font-medium">
            Creative Developer & Designer
          </p>
          <p className="mb-8 text-text-secondary text-sm md:text-base leading-relaxed max-w-lg">
            I craft digital experiences with precision and aesthetics. Specializing in modern web technologies and user-centric design.
          </p>
          <div className="flex items-center flex-wrap gap-6 mt-8">
            <Link 
              href="#projects" 
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-linear-to-r from-[#2c53a6] to-[#60a5fa] hover:from-[#214185] hover:to-[#4fa1ff] text-white font-bold text-base transition-all duration-300 active:scale-95 shadow-md shadow-blue-500/10 hover:shadow-lg hover:shadow-blue-500/20 cursor-pointer"
            >
              View My Work
            </Link>
            <a 
              href="/image/CV_Chen_Sreyneat.pdf" 
              download 
              className="inline-flex items-center gap-2 text-white hover:text-accent-blue font-bold text-base transition-all duration-300 cursor-pointer py-2"
            >
              <Download size={20} className="stroke-[2.5]" /> Download CV
            </a>
          </div>
        </div>

        {/* Profile Image - Appears first on mobile */}
        <div className="flex justify-center lg:justify-end order-1 lg:order-2">
          <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent-blue/10 blur-[80px] -z-20" />

            {/* Decorative Outline Frame */}
            <div className="absolute inset-0 border border-white/10 rounded-[3rem] rotate-[12deg] -z-10" />

            {/* Solid Blue Box with Grid */}
            <div className="absolute inset-0 bg-accent-blue rounded-[3rem] -rotate-[10deg] -z-10 overflow-hidden shadow-2xl shadow-accent-blue/20">
              {/* Grid pattern overlay */}
              <div className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)`,
                  backgroundSize: '30px 30px'
                }}
              />
            </div>

            {/* Decorative Floating Elements */}
            {/* Top Left Angle */}
            <div className="absolute -top-4 left-4 text-white/30 -rotate-12">
              <div className="w-8 h-8 border-l-2 border-t-2 border-white/20" />
            </div>

            {/* Bottom Right Plus */}
            <div className="absolute bottom-[15%] -right-4 text-white/40">
              <span className="text-3xl font-light">+</span>
            </div>

            {/* Top Right Dots */}
            <div className="absolute top-4 right-4 text-white/20 grid grid-cols-2 gap-2">
              <div className="w-2 h-2 rounded-full border border-current" />
              <div className="w-2 h-2 rounded-full bg-current" />
              <div className="w-2 h-2 rounded-full bg-current" />
              <div className="w-2 h-2 rounded-full border border-current" />
            </div>

            {/* Image Container */}
            <div className="absolute inset-0 z-10 flex items-end justify-center pointer-events-none">
              <div className="relative w-[120%] h-[120%] mb-[-5%]">
                <Image
                  src="/image/2.png"
                  alt="Chen Sreyneat"
                  fill
                  className="object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] scale-110"
                  priority
                />
              </div>
            </div>

            {/* Decorative Tag */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 glass-card py-2 px-6 rounded-full border-accent-blue/30 shadow-xl text-[0.7rem] font-bold uppercase text-accent-blue z-20 whitespace-nowrap">
              Web Development
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
