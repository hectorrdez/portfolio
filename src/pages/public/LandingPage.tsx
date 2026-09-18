import About from "@components/sections/About";
import Hero from "@components/sections/Hero";
import Page from "@layouts/Page";
import { SECTIONS } from "@utils/sections";

const placeholderIds = SECTIONS.filter(
  (section) => section.id !== "home" && section.id !== "sobre-mi",
).map((section) => section.id);

export default function LandingPage() {
  return (
    <Page>
      <Hero />
      <About />
      {placeholderIds.map((id) => (
        <section key={id} id={id} className="min-h-screen" />
      ))}
    </Page>
  );
}
