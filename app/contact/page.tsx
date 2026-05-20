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
                <Mail size={18} className="text-accent-pink" />
                <span>hello@example.com</span>
              </div>
              <div className="outline-box mb-0">
                <Phone size={18} className="text-accent-purple" />
                <span>+855 12 345 678</span>
              </div>
              <div className="outline-box mb-0">
                <MapPin size={18} className="text-accent-blue" />
                <span>Phnom Penh, Cambodia</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-4 mt-8">
              <a href="#" className="btn btn-outline p-2.5 rounded-full flex" aria-label="GitHub">
                <FaGithub size={18} />
              </a>
              <a href="#" className="btn btn-outline p-2.5 rounded-full flex" aria-label="LinkedIn">
                <FaLinkedin size={18} />
              </a>
              <a href="#" className="btn btn-outline p-2.5 rounded-full flex" aria-label="Twitter">
                <FaTwitter size={18} />
              </a>
            </div>
          </div>
        </aside>

        {/* Right Side: Contact Form */}
        <div className="glass-card">
          <h2 className="text-2xl mb-6">Send Me A Message</h2>
          
          <form className="flex flex-col h-full gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-0">
              <div className="form-group mb-0">
                <label htmlFor="name" className="form-label">Your Name</label>
                <input type="text" id="name" className="form-input" placeholder="John Doe" required />
              </div>
              <div className="form-group mb-0">
                <label htmlFor="email" className="form-label">Your Email</label>
                <input type="email" id="email" className="form-input" placeholder="john@example.com" required />
              </div>
            </div>

            <div className="form-group mb-0">
              <label htmlFor="subject" className="form-label">Subject</label>
              <input type="text" id="subject" className="form-input" placeholder="Project Inquiry" required />
            </div>

            <div className="form-group mb-0 grow flex flex-col">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea id="message" className="form-textarea grow min-h-[150px]" placeholder="Tell me about your project..." required></textarea>
            </div>

            <button type="submit" className="btn btn-primary w-full p-4 mt-4 flex justify-center items-center gap-2">
              <Send size={18} /> Send Message
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
