import { NavBar } from "@/components/nav-bar";
import { FooterSection } from "./sections/footer-section";
import { HeroSection } from "./sections/hero-section";
import { ProjectsSection } from "./sections/projects-section";
import { SkillsSection } from "./sections/skills-section";
import { EducationSection } from "./sections/education-section";
import { ExperienceSection } from "./sections/experience-section";


export default function Home() {
  return (
    // <div className="flex-0 p-0 m-0 border"></div>
    <div className="flex flex-col items-center justify-items-center min-h-screen p-4 pb-10 sm:p-20 gap-5 md:gap-10">
      <NavBar />
      <HeroSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
      <FooterSection />
    </div>
  );
}
