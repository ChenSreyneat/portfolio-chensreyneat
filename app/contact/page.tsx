import { Mail, MapPin, Send, Phone } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Image from "next/image";

export default function Contact() {
  return (
    <main className="max-w-6xl mx-auto px-4 md:px-12 lg:px-20 pt-24 pb-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl mb-4 leading-tight md:text-5xl">
          Get In <span className="text-gradient">Touch</span>
        </h1>
        <p className="text-text-secondary text-[1.2rem] max-w-[600px] mx-auto">
          I&apos;m currently open to new opportunities and freelance work. Let&apos;s build something amazing together!
        </p>
      </div>

      <div className="about-layout contact-layout grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 items-stretch">
        {/* Left Side: Contact Info & Image */}
        <aside className="glass-card flex flex-col h-full">
          <div className="flex flex-col h-full">
            {/* Profile Image */}
            <div className="flex justify-center mb-8">
              <div className="w-[200px] h-[200px] rounded-full overflow-hidden border-4 border-glass-border shadow-[0_10px_30px_var(--glass-glow)] relative">
                <Image 
                  src="/image/1.png" 
                  alt="Chen Sreyneat" 
                  fill 
                  className="object-cover"
                />
              </div>
            </div>

            <h3 className="text-2xl mb-2 text-center">Chen Sreyneat</h3>
            <p className="text-accent-blue text-center mb-8">Creative Developer</p>

            <div className="flex flex-col gap-6 mt-auto">
              <div className="outline-box mb-0">
                <Mail size={18} className="text-pink-500" />
                <span>chensreyneat198@gmail.com</span>
              </div>
              <div className="outline-box mb-0">
                <Phone size={18} className="text-purple-500" />
                <span>+855 88 75 14 279</span>
              </div>
              <div className="outline-box mb-0">
                <MapPin size={18} className="text-accent-blue" />
                <span>Phnom Penh, Cambodia</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-4 mt-8">
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="btn btn-outline p-2.5 rounded-full flex" aria-label="GitHub">
                <FaGithub size={18} />
              </a>
              <a href="https://www.linkedin.com/in/chen-sreyneat-749654313/" target="_blank" rel="noopener noreferrer" className="btn btn-outline p-2.5 rounded-full flex" aria-label="LinkedIn">
                <FaLinkedin size={18} />
              </a>
              <a href="https://t.me/Neat198" target="_blank" rel="noopener noreferrer" className="btn btn-outline p-2.5 rounded-full flex" aria-label="Telegram">
                <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-current">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15.82-1.05 4.82-1.51 6.82-.19.82-.69 1.1-.98 1.12-.64.05-1.12-.42-1.74-.83-.97-.64-1.52-1.04-2.46-1.66-1.09-.72-.38-1.12.24-1.76.16-.17 3.01-2.76 3.07-3.02.01-.03.01-.15-.06-.21-.07-.06-.18-.04-.26-.02-.11.02-1.89 1.2-5.34 3.53-.51.35-.97.52-1.37.51-.45-.01-1.31-.25-1.95-.46-.78-.26-1.4-.4-1.35-.85.03-.24.36-.48 1.01-.73 3.93-1.71 6.55-2.83 7.87-3.37 3.75-1.53.78-.18 1.25.18.1.08.19.18.23.3.04.12.06.26.04.38z" />
                </svg>
              </a>
            </div>
          </div>
        </aside>

        {/* Right Side: Contact Form */}
        <div className="glass-card">
          <h2 className="text-2xl mb-6">Send Me A Message</h2>
          
          <form className="flex flex-col h-full gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-0">
              <div className="form-group mb-0 space-y-2">
                <label htmlFor="name" className="text-[0.75rem] font-black uppercase tracking-[0.2em] text-text-secondary/60 flex items-center gap-2 block">Your Name</label>
                <input type="text" id="name" className="form-input placeholder:text-text-secondary/40" placeholder="John Doe" required />
              </div>
              <div className="form-group mb-0 space-y-2">
                <label htmlFor="email" className="text-[0.75rem] font-black uppercase tracking-[0.2em] text-text-secondary/60 flex items-center gap-2 block">Your Email</label>
                <input type="email" id="email" className="form-input placeholder:text-text-secondary/40" placeholder="john@example.com" required />
              </div>
            </div>

            <div className="form-group mb-0 space-y-2">
              <label htmlFor="subject" className="text-[0.75rem] font-black uppercase tracking-[0.2em] text-text-secondary/60 flex items-center gap-2 block">Subject</label>
              <input type="text" id="subject" className="form-input placeholder:text-text-secondary/40" placeholder="Project Inquiry" required />
            </div>

            <div className="form-group mb-0 grow flex flex-col space-y-2">
              <label htmlFor="message" className="text-[0.75rem] font-black uppercase tracking-[0.2em] text-text-secondary/60 flex items-center gap-2 block">Message</label>
              <textarea id="message" className="form-textarea grow min-h-[150px] placeholder:text-text-secondary/40" placeholder="Tell me about your project..." required></textarea>
            </div>

            <button type="submit" className="btn btn-primary w-full p-4 mt-4 flex justify-center items-center gap-2 cursor-pointer transition-all active:scale-[0.98] shadow-lg">
              <Send size={18} /> Send Message
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
