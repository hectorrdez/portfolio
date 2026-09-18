import type { Page } from "@/types/page";
import ProfilePage from "./private/ProfilePage";
import AboutUsPage from "./public/AboutUsPage";
import LandingPage from "./public/LandingPage";
import PricingPage from "./public/PricingPage";
import ProductsPage from "./public/ProductsPage";
import ResourcesPage from "./public/ResourcesPage";
import SupportPage from "./public/SupportPage";
import CookiesPage from "./public/policies/CookiesPage";
import DataPolicyPage from "./public/policies/DataPolicyPage";
import UserTermsPage from "./public/policies/UserTermsPage";

export const SiteMap: Array<Page> = [
  { name: "landing", path: "/", component: <LandingPage /> },
  { name: "products", path: "/features", component: <ProductsPage /> },
  { name: "pricing", path: "/pricing", component: <PricingPage /> },
  { name: "resources", path: "/resources", component: <ResourcesPage /> },
  { name: "support", path: "/support", component: <SupportPage /> },
  { name: "about-us", path: "/about-us", component: <AboutUsPage /> },
  { name: "cookies", path: "/policy/cookies", component: <CookiesPage /> },
  {
    name: "user-terms",
    path: "/policy/user-terms",
    component: <UserTermsPage />,
  },
  { name: "data-policy", path: "/policy/data", component: <DataPolicyPage /> },
  // { name: "cookies", path: "/policy/cookies", component: <CookiesPage /> },
  {
    name: "profile",
    path: "/profile/:id",
    component: <ProfilePage />,
    private: true,
  },
  // { name: "products", path: "/features", component: <ProductsPage /> },
];
