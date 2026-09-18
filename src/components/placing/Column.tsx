import StringUtils from "@/utils/StringUtils";
import type { ComponentProps, ReactNode } from "react";

type ColumnProps = ComponentProps<"div"> & {
  children: ReactNode;
  className?: string;
};

export default function Column({ children, className, ...args }: ColumnProps) {
  const newClassName = StringUtils.JoinClassName("flex flex-col", className);
  return (
    <div className={newClassName} {...args}>
      {children}
    </div>
  );
}
