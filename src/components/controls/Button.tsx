import StringUtils from "@utils/StringUtils";
import type { ComponentProps } from "react";

type ButtonProps = ComponentProps<"button"> & {
  variant?: "primary" | "secondary";
};
export default function Button({
  variant = "primary",
  children,
  className,
  onClick = () => {},
  ...args
}: ButtonProps) {
  const variants = {
    primary: "text-on-accent bg-accent hover:opacity-90",
    secondary: "text-text bg-surface-alt border border-border hover:bg-border/40",
  };
  const newClassName = StringUtils.JoinClassName(
    "cursor-pointer min-w-[44px] min-h-[44px] flex flex-row justify-center items-center py-2 px-4 rounded-md font-semibold transition-colors duration-200",
    variants[variant],
    className,
  );

  return (
    <button className={newClassName} onClick={onClick} {...args}>
      {children}
    </button>
  );
}
