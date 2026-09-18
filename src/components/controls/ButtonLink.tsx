import { Link } from "react-router-dom";
import Button from "./Button";
import type { ComponentProps } from "react";
import StringUtils from "@utils/StringUtils";
import PathUtils from "@utils/PathUtils";

type ButtonLinkProps = ComponentProps<"button"> & {
  to: string;
  target?: string;
  external?: boolean;
};

export default function ButtonLink({
  to,
  children,
  className,
  target = "_self",
  external = false,
  ...args
}: ButtonLinkProps) {
  const newClassName = StringUtils.JoinClassName("", className);

  return (
    <Link
      to={external ? to : (PathUtils.getRoutePath(to) ?? "")}
      className="w-fit h-fit"
      target={target}
    >
      <Button className={newClassName} {...args}>
        {children}
      </Button>
    </Link>
  );
}
