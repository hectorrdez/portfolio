import About from "@components/sections/About";
import Experience from "@components/sections/Experience";
import Hero from "@components/sections/Hero";
import Page from "@layouts/Page";
import { SECTIONS } from "@utils/sections";

const builtIds = ["home", "sobre-mi", "experiencia"];
const placeholderIds = SECTIONS.filter(
  (section) => !builtIds.includes(section.id),
).map((section) => section.id);

export default function LandingPage() {
  return (
    <Page>
      <Hero />
      <About />
      <Experience />
      {placeholderIds.map((id) => (
        <section key={id} id={id} className="min-h-screen" />
      ))}
    </Page>
  );
}
