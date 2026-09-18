import type { ReactNode } from "react";

export type Page = {
  path: string;
  name: string;
  component: ReactNode;
  private?: boolean;
  roles?: Array<string>;
};
