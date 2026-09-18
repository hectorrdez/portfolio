import StringUtils from "@/utils/StringUtils";
import type { ComponentProps, ReactNode } from "react";

type ColumnInvertedProps = ComponentProps<"div"> & {
  children: ReactNode;
  className?: string;
};

export default function ColumnInverted({
  children,
  className,
  ...args
}: ColumnInvertedProps) {
  const newClassName = StringUtils.JoinClassName(
    "flex flex-col-reverse",
    className,
  );
  return (
    <div className={newClassName} {...args}>
      {children}
    </div>
  );
}
