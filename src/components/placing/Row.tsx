import StringUtils from "@/utils/StringUtils";
import type { ComponentProps, ReactNode } from "react";

type RowProps = ComponentProps<"div"> & {
  children: ReactNode;
  className?: string;
};

export default function Row({ children, className, ...args }: RowProps) {
  const newClassName = StringUtils.JoinClassName("flex flex-row", className);

  return (
    <div className={newClassName} {...args}>
      {children}
    </div>
  );
}
