import StringUtils from "@utils/StringUtils";
import type { ComponentProps } from "react";

type ButtonToogleProps = Omit<ComponentProps<"button">, "onChange" | "value"> & {
  value: boolean;
  onChange?: (value: boolean) => void;
  cantInteract?: boolean;
};

export default function ButtonToogle({
  value,
  onChange,
  className,
  cantInteract = false,
  ...args
}: ButtonToogleProps) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={value}
      aria-disabled={cantInteract}
      onClick={() => !cantInteract && onChange?.(!value)}
      className={StringUtils.JoinClassName(
        "relative inline-flex h-7 w-13 shrink-0 rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-primary",
        cantInteract ? "cursor-not-allowed opacity-60" : "cursor-pointer",
        value ? "bg-primary" : "bg-gray-300",
        className,
      )}
      {...args}
    >
      <span
        className={StringUtils.JoinClassName(
          "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-md transition duration-200 ease-in-out mt-0.5",
          value ? "translate-x-6" : "translate-x-0.5",
        )}
      />
    </button>
  );
}
