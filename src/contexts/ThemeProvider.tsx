import type { ThemeData } from "@/types/data";
import { useEffect, useState, type ReactNode } from "react";
import { ThemeContext } from "./Contexts";

type ThemeProviderProps = {
  children: ReactNode;
};

const STORAGE_KEY = "theme";

function getInitialTheme(): "light" | "dark" {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "light" || stored === "dark") return stored;
  } catch {
    // localStorage unavailable (private mode, SSR) - fall back to system preference
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<"light" | "dark">(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // ignore - persistence is a nice-to-have, not a requirement
    }
  }, [theme]);

  const data: ThemeData = {
    theme,
    toggleTheme: () => setTheme((current) => (current === "dark" ? "light" : "dark")),
  };

  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
}
