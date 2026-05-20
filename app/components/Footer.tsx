import Link from "next/link";
import { FaGithub, FaLinkedin, FaTelegram, FaEnvelope } from "react-icons/fa";
import { Flower2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-glass-border bg-nav-bg/50 backdrop-blur-md py-12">
      <div className="max-w-6xl mx-auto px-4 md:px-12 lg:px-20">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 mb-12">
          {/* Logo & About */}
          <div className="space-y-4 text-left">
            <div className="flex items-center justify-start gap-2 mb-4 group">
              <div className="text-accent-blue group-hover:rotate-12 transition-transform duration-500">
                <Flower2 size={28} />
              </div>
              <span className="text-xl font-bold tracking-tight text-logo-color">Sreyneat<span className="text-accent-blue">.</span></span>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed max-w-[200px] md:max-w-xs mx-auto md:mx-0">
              Building digital products with a focus on aesthetics, usability, and high-end professional experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 text-left">
            <h4 className="text-sm font-bold uppercase tracking-widest text-text-primary">Navigation</h4>
            <ul className="space-y-2 list-none p-0">
              <li><Link href="/" className="text-text-secondary hover:text-accent-blue text-sm transition-colors">Home</Link></li>
              <li><Link href="/#about" className="text-text-secondary hover:text-accent-blue text-sm transition-colors">About</Link></li>
              <li><Link href="/#projects" className="text-text-secondary hover:text-accent-blue text-sm transition-colors">Projects</Link></li>
              <li><Link href="/#contact" className="text-text-secondary hover:text-accent-blue text-sm transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Socials */}
          <div className="col-span-2 md:col-span-1 space-y-4 text-center md:text-left">
            <h4 className="text-sm font-bold uppercase tracking-widest text-text-primary">Connect</h4>
            <div className="flex justify-center md:justify-start gap-4">
              <a 
                href="https://github.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-glass-bg border border-glass-border flex items-center justify-center text-text-secondary hover:bg-accent-blue/10 hover:text-accent-blue hover:border-accent-blue/20 transition-all shadow-xl"
              >
                <FaGithub size={18} />
              </a>
              <a 
                href="https://www.linkedin.com/in/chen-sreyneat-749654313/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-glass-bg border border-glass-border flex items-center justify-center text-text-secondary hover:bg-accent-blue/10 hover:text-accent-blue hover:border-accent-blue/20 transition-all shadow-xl"
              >
                <FaLinkedin size={18} />
              </a>
              <a 
                href="https://t.me/Neat198" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-glass-bg border border-glass-border flex items-center justify-center text-text-secondary hover:bg-accent-blue/10 hover:text-accent-blue hover:border-accent-blue/20 transition-all shadow-xl"
              >
                <FaTelegram size={18} />
              </a>
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=chensreyneat198@gmail.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-glass-bg border border-glass-border flex items-center justify-center text-text-secondary hover:bg-accent-blue/10 hover:text-accent-blue hover:border-accent-blue/20 transition-all shadow-xl"
              >
                <FaEnvelope size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-glass-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-secondary text-xs text-center md:text-left">
            &copy; {new Date().getFullYear()} Chen Sreyneat. All rights reserved.
          </p>
          <p className="text-text-secondary text-xs flex items-center justify-center md:justify-start gap-1">
            Made with <span className="text-accent-blue">❤</span> Chen Sreyneat
          </p>
        </div>
      </div>
    </footer>
  );
}
