import Button from "@components/controls/Button";
import StringUtils from "@utils/StringUtils";
import { useScrollReveal } from "@utils/useScrollReveal";

export default function Hero() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6"
    >
      <div
        ref={ref}
        className={StringUtils.JoinClassName(
          "reveal max-w-2xl text-center flex flex-col items-center gap-4",
          visible ? "reveal-visible" : undefined,
        )}
      >
        <h1 className="text-4xl sm:text-6xl font-semibold text-text tracking-tight">
          Héctor Rodríguez Tovar
        </h1>
        <p className="text-lg sm:text-xl text-text-muted">
          QA Analyst especializado en automatización de pruebas y accesibilidad
        </p>
        <p className="text-base text-text-muted max-w-lg">
          Combino testing automatizado, manual y auditorías de accesibilidad
          para que los productos funcionen bien — y funcionen para todos.
          Alicante, España.
        </p>
        <Button
          className="mt-4"
          onClick={() =>
            document
              .getElementById("contacto")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Hablemos
        </Button>
      </div>
    </section>
  );
}
