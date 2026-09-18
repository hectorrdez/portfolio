import About from "@components/sections/About";
import Contact from "@components/sections/Contact";
import EducationSkills from "@components/sections/EducationSkills";
import Experience from "@components/sections/Experience";
import Hero from "@components/sections/Hero";
import Projects from "@components/sections/Projects";
import Page from "@layouts/Page";

export default function LandingPage() {
  return (
    <Page>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <EducationSkills />
      <Contact />
    </Page>
  );
}
