import type { CookiesData } from "@/types/data";
import Button from "@components/controls/Button";
import ButtonToogle from "@components/controls/ButtonToogle";
import Column from "@components/placing/Column";
import Row from "@components/placing/Row";
import { useCookies } from "@contexts/Contexts";
import { ExternalLink } from "lucide-react";
import PathUtils from "@utils/PathUtils";
import { useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import Card from "./Card";

export default function CookiesCard() {
  const [cookieForm, setCookies] = useState<CookiesData>({
    marketing: true,
    analysis: true,
    technical: true,
    answered: false,
  });
  const { setFunction } = useCookies();

  const submitCookies = (data: CookiesData) => {
    const withAnswered = { ...data, answered: true };
    setCookies(withAnswered);
    if (setFunction) {
      setFunction(withAnswered);
    }
  };

  const handleSelectAll = () => {
    const allSelected = { ...cookieForm, marketing: true, analysis: true };
    setCookies((prev) => ({ ...prev, marketing: true }));
    setTimeout(() => {
      setCookies((prev) => ({ ...prev, analysis: true }));
      submitCookies(allSelected);
    }, 500);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submitCookies(cookieForm);
  };

  return (
    <div className="w-screen h-screen fixed z-50 bg-black/20 flex justify-center items-center">
      <Card className="max-w-xl max-h-lg min-w-96 min-h-80 flex flex-col gap-4">
        <h2 className="text-2xl">Selecciona como tratamos tu información</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <Column className="gap-3">
            <CookieSection
              value={cookieForm.marketing ?? true}
              onChange={(val) =>
                setCookies((prev) => ({ ...prev, marketing: val }))
              }
              title="Marketing"
            >
              Cosas como que anuncios ves, que partes de la web te interesan
              mas, todo lo relacionado con una posible relacion comercial con un
              tercero.
            </CookieSection>
            <hr />
            <CookieSection
              value={cookieForm.analysis ?? true}
              onChange={(val) =>
                setCookies((prev) => ({ ...prev, analysis: val }))
              }
              title="Análisis"
            >
              Datos de uso de la plataforma para mejorar la experiencia y
              detectar errores. No se comparten con terceros.
            </CookieSection>
            <hr />
            <CookieSection
              value={cookieForm.technical ?? true}
              onChange={(val) =>
                setCookies((prev) => ({ ...prev, technical: val }))
              }
              title="Técnicas"
              obligated
            >
              Datos de gestión de sesiones, preferencias y personalización de la
              interfaz. Son obligatorias para el correcto uso de la plataforma.
            </CookieSection>
          </Column>
          <Row className="justify-end items-center gap-2">
            <Link
              to={PathUtils.getRoutePath("cookies")}
              className="text-primary hover:border-b-2 border-b-primary font-semibold flex gap-2 items-center"
            >
              Saber más <ExternalLink size={14} />
            </Link>
            <Button type="submit" variant="secondary">
              Aceptar selección
            </Button>
            <Button onClick={handleSelectAll} type="button">
              Aceptar todas
            </Button>
          </Row>
        </form>
      </Card>
    </div>
  );
}

type CookieSectionProps = {
  title: string;
  children: ReactNode;
  value: boolean;
  onChange: (value: boolean) => void;
  obligated?: boolean;
};

function CookieSection({
  title,
  children,
  value,
  onChange,
  obligated = false,
}: CookieSectionProps) {
  return (
    <section className="flex flex-row justify-between gap-4 items-center">
      <Column>
        <Row className="items-center">
          <h3 className="text-lg font-semibold">{title}</h3>
          {obligated && (
            <Row className="gap-1">
              <span className="text-red-500">*</span>
              <Column className="justify-center">
                <span className="text-xs text-footer-muted italic">
                  (Obligatorias)
                </span>
              </Column>
            </Row>
          )}
        </Row>
        <p>{children}</p>
      </Column>
      <ButtonToogle
        cantInteract={obligated}
        type="button"
        value={value}
        onChange={onChange}
      />
    </section>
  );
}
