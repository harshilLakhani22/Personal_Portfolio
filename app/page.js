import { personalData } from "@/utils/data/personal-data";
import AboutSection from "./components/homepage/about";
import ProjectsSection from "./components/homepage/blog";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import AchievementsSection from "./components/homepage/projects";
import Skills from "./components/homepage/skills";

export default async function Home() {
  return (
    <div suppressHydrationWarning >
      <HeroSection />
      <AboutSection />
      <Skills />
      <Education />
      <ProjectsSection />
      <AchievementsSection />
      <Experience />
      <ContactSection />
    </div>
  )
};