import { type ReactNode } from "react";
import { ThemeContext } from "./Contexts";

type ThemeProviderProps = {
  children: ReactNode;
};

export function ThemeProvider({ children }: ThemeProviderProps) {
  const data = {};

  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
}
