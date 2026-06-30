import HeroSection from "./components/home/HeroSection";
import AboutSection from "./components/home/AboutSection";
import EducationSection from "./components/home/EducationSection";
import ServicesSection from "./components/home/ServicesSection";
import ProjectsSection from "./components/home/ProjectsSection";
import SkillsSection from "./components/home/SkillsSection";
import ExperienceSection from "./components/home/ExperienceSection";
import CertificatesSection from "./components/home/CertificatesSection";
import ResumeSection from "./components/home/ResumeSection";
import ContactSection from "./components/home/ContactSection";

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto">
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <ServicesSection />
      <ProjectsSection />
      <SkillsSection />
      <ExperienceSection />
      <CertificatesSection />
      <ResumeSection />
      <ContactSection />
    </main>
  );
}
