import { MapPin, Globe, Calendar, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-accent-blue/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="flex flex-col gap-16 relative z-10 max-w-6xl mx-auto px-4 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[350px_1fr] gap-12 lg:gap-20 items-center">

          {/* Profile Column - Spotlight Style matching image */}
          <div className="flex flex-col items-center lg:items-start space-y-18 order-1">
            <div className="relative group">
              {/* Profile Spotlight Container */}
              <div className="relative w-80 h-[400px] flex items-center justify-center">

                {/* Background Circles (Spotlight effect from image) */}
                {/* Large Dark Blue Circle */}
                <div className="absolute bottom-[10%] left-[-5%] w-48 h-48 bg-accent-blue/80 rounded-full blur-sm -z-10" />

                {/* Medium Blue Circle (Tilted/Shifted) */}
                <div className="absolute top-[20%] left-[5%] w-40 h-40 bg-accent-blue/40 rounded-full blur-md -z-10" />

                {/* Small Darker Circle */}
                <div className="absolute top-[30%] left-[45%] w-20 h-20 bg-[#0a0f1a] rounded-full border border-white/5 shadow-2xl -z-10" />

                {/* Main Profile Image */}
                <div className="relative w-full h-full flex items-end justify-center">
                  <Image
                    src="/image/remove-bg.png"
                    alt="Chen Sreyneat"
                    fill
                    className="object-contain object-bottom grayscale-[10%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                    priority
                  />
                  {/* Text Information Overlay - Simplified */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                    <h3 className="text-3xl font-bold text-white leading-[0.9] uppercase mb-2">
                      Chen<br />Sreyneat
                    </h3>
                    <p className="text-accent-blue text-[0.65rem] font-bold uppercase tracking-[0.2em]">
                      Creative Developer
                    </p>
                  </div>
                </div>

                {/* Optional: Add a subtle glow behind the whole thing */}
                <div className="absolute inset-0 bg-accent-blue/5 blur-[100px] rounded-full -z-20" />
              </div>
            </div>

            {/* Location & Languages */}
            <div className="space-y-6 flex flex-col items-start px-2 w-full">
              <div className="flex items-center gap-3 text-text-secondary">
                <div className="w-10 h-10 rounded-full bg-accent-blue/10 flex items-center justify-center text-accent-blue border border-accent-blue/20 shadow-[0_0_15px_rgba(26,35,105,0.2)]">
                  <MapPin size={18} />
                </div>
                <span className="text-base font-medium text-gray-300 tracking-tight">Phnom Penh/Cambodia.</span>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-white">
                  <Globe size={22} className="text-gray-400" />
                  <span className="text-lg font-bold">Languages</span>
                </div>
                <div className="flex flex-wrap gap-3">
                  <span className="px-6 py-3 rounded-2xl bg-white/[0.02] border border-white/10 text-sm font-bold text-gray-400">Khmer</span>
                  <span className="px-6 py-3 rounded-2xl bg-white/[0.02] border border-white/10 text-sm font-bold text-gray-400">English</span>
                </div>
              </div>
            </div>
          </div>

          {/* Intro Text Column */}
          <div className="space-y-8 text-left order-2">
            <div className="space-y-4 flex flex-col items-start">
              <Link href="/about" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-accent-blue text-xs font-bold transition-all hover:bg-accent-blue/20 w-fit">
                <Calendar size={14} /> Schedule a call <ExternalLink size={12} />
              </Link>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight text-white m-0">
                Fusing <span className="text-gradient-accent">Creativity</span> <br />
                With High-End Design
              </h2>
            </div>

            <div className="space-y-6 text-text-secondary text-base md:text-lg leading-relaxed max-w-2xl">
              <p>
                I am a dedicated developer who loves crafting beautiful, user-friendly applications. I blend creativity with technology to create amazing experiences, specializing in building responsive interfaces.
              </p>
              <p>
                With a strong foundation in both design and engineering, I approach every project with a focus on aesthetics and performance. I believe that good code is just as important as good design.
              </p>
            </div>

            <div className="pt-4 flex justify-center lg:justify-start">
              <Link href="/about" className="btn btn-outline border-accent-blue text-accent-blue hover:bg-accent-blue hover:text-white flex items-center gap-2 w-fit">
                Read More About Me <ExternalLink size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
