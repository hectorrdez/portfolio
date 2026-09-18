import type { ThemeData } from "@/types/data";
import { createContext, useContext } from "react";

export const ThemeContext = createContext<ThemeData>({});

export function useTheme(): ThemeData {
  return useContext(ThemeContext);
}
