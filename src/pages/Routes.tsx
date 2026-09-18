import type { Page } from "@/types/page";
import LandingPage from "./public/LandingPage";

export const SiteMap: Array<Page> = [
  { name: "landing", path: "/", component: <LandingPage /> },
];
