import type { AsideData } from "@/types/data";
import type { ReactNode } from "react";
import { AsideContext } from "./Contexts";

type AsideProviderProps = {
  children: ReactNode;
};

export default function AsideProvider({ children }: AsideProviderProps) {
  const data: AsideData = { collapsed: false };

  return <AsideContext.Provider value={data}>{children}</AsideContext.Provider>;
}
