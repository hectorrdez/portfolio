import Page from "@layouts/Page";
import { SECTIONS } from "@utils/sections";

export default function LandingPage() {
  return (
    <Page>
      {SECTIONS.map((section) => (
        <section key={section.id} id={section.id} className="min-h-screen" />
      ))}
    </Page>
  );
}
