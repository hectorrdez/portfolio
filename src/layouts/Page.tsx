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
      <Header />
      <main className={newClassName}>{children}</main>
      <Footer />
    </>
  );
}
