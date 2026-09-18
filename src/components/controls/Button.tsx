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
    primary: "text-on-primary bg-primary",
    secondary: "text-on-secondary bg-secondary",
  };
  const newClassName = StringUtils.JoinClassName(
    "cursor-pointer min-w-[44px] min-h-[44px] flex flex-row justify-center items-center py-2 px-4 rounded-md font-semibold",
    variants[variant],
    className,
  );

  return (
    <button className={newClassName} onClick={onClick} {...args}>
      {children}
    </button>
  );
}
