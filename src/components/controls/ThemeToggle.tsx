import { useTheme } from "@contexts/Contexts";
import { Moon, Sun } from "lucide-react";
import ButtonToogle from "./ButtonToogle";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="flex items-center gap-2">
      <Sun
        size={16}
        aria-hidden
        className={isDark ? "text-text-muted" : "text-accent"}
      />
      <ButtonToogle
        value={isDark}
        onChange={toggleTheme}
        aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
      />
      <Moon
        size={16}
        aria-hidden
        className={isDark ? "text-accent" : "text-text-muted"}
      />
    </div>
  );
}
