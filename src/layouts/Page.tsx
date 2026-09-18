import StringUtils from "@utils/StringUtils";
import type { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

type PageProps = {
  children?: ReactNode;
  className?: string;
};

export default function Page({ children, className = "" }: PageProps) {
  const newClassName = StringUtils.JoinClassName("min-h-screen", className);
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary-container focus:text-on-primary-container focus:rounded-lg focus:font-mono focus:text-code-md"
      >
        Saltar al contenido principal
      </a>
      <Header />
      <main id="main-content" className={newClassName}>
        {children}
      </main>
      <Footer />
    </>
  );
}
