import { useState, type ReactNode } from "react";
import { CookiesContext } from "./Contexts";
import type { CookiesData } from "@/types/data";

type CookiesProviderProps = {
  children: ReactNode;
};

type CookiePrefs = Omit<CookiesData, "setFunction">;

const COOKIE_KEY = "cookie_consent";

function readCookiePrefs(): CookiePrefs {
  try {
    const match = document.cookie
      .split("; ")
      .find((r) => r.startsWith(`${COOKIE_KEY}=`));
    if (match) {
      const parsed = JSON.parse(decodeURIComponent(match.split("=")[1]));
      if (typeof parsed.answered === "boolean") return parsed as CookiePrefs;
    }
  } catch {}
  return { analysis: false, marketing: false, technical: false, answered: false };
}

function writeCookiePrefs(prefs: CookiePrefs) {
  const expires = new Date();
  expires.setFullYear(expires.getFullYear() + 1);
  document.cookie = `${COOKIE_KEY}=${encodeURIComponent(JSON.stringify(prefs))}; expires=${expires.toUTCString()}; path=/; SameSite=Lax`;
}

export default function CookiesProvider({ children }: CookiesProviderProps) {
  const [cookiesData, setData] = useState<CookiePrefs>(() => readCookiePrefs());

  const data: CookiesData = {
    ...cookiesData,
    setFunction: (prefs) => {
      writeCookiePrefs(prefs);
      setData(prefs);
    },
  };

  return (
    <CookiesContext.Provider value={data}>{children}</CookiesContext.Provider>
  );
}
