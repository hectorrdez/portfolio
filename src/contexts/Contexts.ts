import type { ThemeData } from "@/types/data";
import { createContext, useContext } from "react";

export const ThemeContext = createContext<ThemeData>({
  theme: "light",
  toggleTheme: () => {},
});

export function useTheme(): ThemeData {
  return useContext(ThemeContext);
}
