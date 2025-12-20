import FinalCTASection from "./components/FinalCTASection";
import HomeHero from "./components/HomeHero";
import FintechClarityProblemSection from "./components/Problem";
import ProjectSection from "./components/ProjectSection";
import SkillsSection from "./components/SkillsSection";
import HowIWorkFocusSection from "./components/Solution";

export default function Home() {
  return (
    <>
      <HomeHero />
      <ProjectSection />
      <FintechClarityProblemSection />
      <HowIWorkFocusSection />
      <FinalCTASection />
    </>
  );
}
