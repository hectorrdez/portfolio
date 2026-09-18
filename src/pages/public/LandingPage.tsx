import Hero from "@components/sections/Hero";
import Page from "@layouts/Page";
import { SECTIONS } from "@utils/sections";

const placeholderIds = SECTIONS.filter((section) => section.id !== "home").map(
  (section) => section.id,
);

export default function LandingPage() {
  return (
    <Page>
      <Hero />
      {placeholderIds.map((id) => (
        <section key={id} id={id} className="min-h-screen" />
      ))}
    </Page>
  );
}
