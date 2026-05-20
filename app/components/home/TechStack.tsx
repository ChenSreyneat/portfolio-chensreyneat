import { 
  Code2, Layout, Palette, Zap, Shield, 
  Monitor, Layers
} from "lucide-react";
import { FaFigma } from "react-icons/fa";

export default function TechStack() {
  const frontend = [
    { name: "React", icon: <Code2 className="text-blue-400" /> },
    { name: "Next.js", icon: <Zap className="text-logo-color" /> },
    { name: "TypeScript", icon: <Shield className="text-blue-500" /> },
    { name: "Tailwind CSS", icon: <Palette className="text-cyan-400" /> },
  ];

  const design = [
    { name: "Figma", icon: <FaFigma className="text-pink-500" /> },
    { name: "Web Design", icon: <Layout className="text-accent-blue" /> },
    { name: "UI/UX", icon: <Monitor className="text-accent-purple" /> },
    { name: "Graphics", icon: <Layers className="text-accent-pink" /> },
  ];

  return (
    <section id="tech-stack" className="py-24">
      <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-8 h-[1px] bg-accent-blue/50" />
          <span className="text-accent-blue font-bold uppercase tracking-[0.4em] text-[0.6rem]">Tech Stack</span>
          <div className="w-8 h-[1px] bg-accent-blue/50" />
        </div>
        <h2 className="text-4xl font-bold mb-4">Expertise & <span className="text-gradient">Tech Stack</span></h2>
        <p className="text-text-secondary text-lg">My specialized tools for development and design.</p>
      </div>

      <div className="space-y-16">
        {/* Frontend Section */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="h-[2px] flex-1 bg-linear-to-r from-transparent to-accent-blue/30" />
            <h3 className="text-xl font-bold uppercase tracking-widest text-accent-blue">Frontend Development</h3>
            <div className="h-[2px] flex-1 bg-linear-to-r from-accent-blue/30 to-transparent" />
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {frontend.map((tech, index) => (
              <div key={index} className="glass-card p-8 flex flex-col items-center justify-center group hover:scale-[1.02] transition-all duration-300">
                <div className="mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  {tech.icon}
                </div>
                <span className="font-semibold text-lg">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Design Section */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="h-[2px] flex-1 bg-linear-to-r from-transparent to-accent-purple/30" />
            <h3 className="text-xl font-bold uppercase tracking-widest text-accent-purple">UI/UX & Design</h3>
            <div className="h-[2px] flex-1 bg-linear-to-r from-accent-purple/30 to-transparent" />
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {design.map((tech, index) => (
              <div key={index} className="glass-card p-8 flex flex-col items-center justify-center group hover:scale-[1.02] transition-all duration-300">
                <div className="mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  {tech.icon}
                </div>
                <span className="font-semibold text-lg">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
