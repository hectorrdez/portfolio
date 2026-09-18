export type AuthData = {
  id?: string;
  role?: string;
  session?: string;
  refresh?: string;
};

export type ThemeData = {
  mode?: "dark" | "light" | "system";
};

export type CookiesData = {
  analysis: boolean;
  marketing: boolean;
  technical: boolean;
  answered: boolean;
  setFunction?: (data: Omit<CookiesData, "setFunction">) => void;
};

export type AsideData = {
  collapsed: boolean;
};
