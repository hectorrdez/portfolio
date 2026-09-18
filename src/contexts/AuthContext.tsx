import type { AuthData } from "@/types/data";
import { useState, type ReactNode } from "react";
import { AuthContext } from "./Contexts";

type AuthProviderProps = {
  children: ReactNode;
};

export function AuthProvider({ children }: AuthProviderProps) {
  const [data] = useState<AuthData>({});

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
}
