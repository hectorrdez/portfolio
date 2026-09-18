import type { AsideData, AuthData, CookiesData, ThemeData } from "@/types/data";
import { createContext, useContext } from "react";

export const ThemeContext = createContext<ThemeData>({});
export const AuthContext = createContext<AuthData>({});
export const CookiesContext = createContext<CookiesData>({
  answered: false,
  analysis: false,
  marketing: false,
  technical: false,
});
export const AsideContext = createContext<AsideData>({ collapsed: false });

export function useAuth(): AuthData {
  return useContext(AuthContext);
}

export function useTheme(): ThemeData {
  return useContext(ThemeContext);
}

export function useCookies(): CookiesData {
  return useContext(CookiesContext);
}
