import StringUtils from "@/utils/StringUtils";
import type { ComponentProps, ReactNode } from "react";

type RowInvertedProps = ComponentProps<"div"> & {
  children: ReactNode;
  className?: string;
};

export default function RowInverted({
  children,
  className,
  ...args
}: RowInvertedProps) {
  const newClassName = StringUtils.JoinClassName(
    "flex flex-row-reverse",
    className,
  );

  return (
    <div className={newClassName} {...args}>
      {children}
    </div>
  );
}
