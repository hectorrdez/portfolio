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
    primary:
      "text-on-primary-container bg-primary-container hover:bg-primary-container/90 font-semibold",
    secondary:
      "text-on-surface bg-surface-container border border-outline-variant hover:bg-surface-container-high font-mono",
  };
  const newClassName = StringUtils.JoinClassName(
    "cursor-pointer min-w-[44px] min-h-[44px] flex flex-row justify-center items-center py-2 px-4 rounded-lg transition-colors duration-200",
    variants[variant],
    className,
  );

  return (
    <button className={newClassName} onClick={onClick} {...args}>
      {children}
    </button>
  );
}
