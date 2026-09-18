import StringUtils from "@utils/StringUtils";
import type { ComponentProps, ReactNode } from "react";

type CardProps = ComponentProps<"div"> & {
  children: ReactNode;
  className?: string;
};

export default function Card({ children, className, ...args }: CardProps) {
  const newClassName = StringUtils.JoinClassName(
    "rounded-lg p-6 bg-card",
    className,
  );

  return (
    <div className={newClassName} {...args}>
      {children}
    </div>
  );
}
