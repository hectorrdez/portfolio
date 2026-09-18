import type { CookiesData } from "@/types/data";
import CookiesCard from "@components/cards/CookiesCard";
import { useCookies } from "@contexts/Contexts";
import PathUtils from "@utils/PathUtils";
import StringUtils from "@utils/StringUtils";
import type { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import Aside from "./Aside";
import Footer from "./Footer";
import Header from "./Header";

type PageProps = {
  children: ReactNode;
  className?: string;
  containsAside?: boolean;
  customHeader?: boolean;
};

export default function Page({
  children,
  className = "",
  containsAside = false,
  customHeader = false,
}: PageProps) {
  const { answered }: CookiesData = useCookies();
  const { pathname } = useLocation();
  const isCookiesPage = pathname === PathUtils.getRoutePath("cookies");
  const newClassName = StringUtils.JoinClassName("min-h-screen", className);
  return (
    <>
      {!answered && !isCookiesPage && <CookiesCard />}
      {!customHeader && <Header></Header>}
      <>
        {containsAside && <Aside />}
        <main className={newClassName}>{children}</main>
      </>
      <Footer></Footer>
    </>
  );
}
