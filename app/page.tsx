import HeroSection from "./components/home/HeroSection";
import SkillsSection from "./components/home/ServicesSection";
import AboutSection from "./components/home/AboutSection";
import ToolsSection from "./components/home/ToolsSection";
import ProjectsSection from "./components/home/ProjectsSection";
import EducationSection from "./components/home/EducationSection";
import ContactSection from "./components/home/ContactSection";
import ExperienceSection from "./components/home/ExperienceSection";

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto">
      <HeroSection />
      <SkillsSection />
      <AboutSection />
      <ToolsSection />
      <ProjectsSection />
      <EducationSection />
      <ContactSection />
      <ExperienceSection />
    </main>
  );
}
