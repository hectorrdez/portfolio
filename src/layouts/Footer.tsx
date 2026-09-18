import Column from "@components/placing/Column";
import Row from "@components/placing/Row";
import { ExternalLink } from "lucide-react";
import PathUtils from "@utils/PathUtils";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";

type FooterLink = {
  text: string;
  path: string;
  external?: boolean;
};
const columnLinks: Array<Array<FooterLink>> = [
  [
    { text: "Página principal", path: "landing" },
    { text: "Productos", path: "products" },
    { text: "Planes y precios", path: "pricing" },
    { text: "Sobre nosotros", path: "about-us" },
  ],
  [{ text: "", path: "" }],
  [
    { text: "Preguntas frecuentes", path: "support-faq" },
    { text: "Crear un ticket", path: "support-create-ticket" },
    { text: "Gestionar mis tickets", path: "support-manage-tickets" },
    // { text: "Crear un ticket", path: "support-create-ticket" },
  ],
  [
    { text: "Politica de Cookies", path: "" },
    {
      text: "Terminos de uso",
      path: "",
    },
    { text: "Politica de datos", path: "" },
    // { text: "Crear un ticket", path: "support-create-ticket" },
  ],
  [
    { text: "Github", path: "https://github.com/", external: true },
    {
      text: "Linkedin",
      path: "https://www.linkedin.com/",
      external: true,
    },
    { text: "Youtube", path: "https://www.youtube.com/", external: true },
    // { text: "Crear un ticket", path: "support-create-ticket" },
  ],
];

export default function Footer() {
  return (
    <footer className="bg-footer text-footer flex flex-row justify-center items-center">
      <Row className="max-w-7xl justify-between p-4 items-start w-full">
        <Column>A</Column>
        <FooterColumn links={columnLinks[0]}>Mapa web</FooterColumn>
        <FooterColumn links={columnLinks[1]}>Enlaces de interes</FooterColumn>
        <FooterColumn links={columnLinks[2]}>Ayuda</FooterColumn>
        <FooterColumn links={columnLinks[3]}>Legal</FooterColumn>
        <FooterColumn links={columnLinks[4]}>Redes sociales</FooterColumn>
      </Row>
    </footer>
  );
}

type FooterColumnProps = {
  children: ReactNode;
  links: Array<FooterLink>;
};

function FooterColumn({ children, links }: FooterColumnProps) {
  return (
    <Column className="gap-2">
      <h2 className="text-base font-semibold">{children}</h2>
      <ul className="flex flex-col gap-1">
        {links.map((link, index) => (
          <ColumnLink
            key={index}
            to={link.path}
            external={link.external != undefined}
          >
            {link.text}
          </ColumnLink>
        ))}
      </ul>
    </Column>
  );
}

type ColumnLinkProps = {
  children: ReactNode;
  to: string;
  external: boolean;
};

function ColumnLink({ children, to, external, ...args }: ColumnLinkProps) {
  return (
    <li {...args}>
      <Link
        to={external ? to : PathUtils.getRoutePath(to)}
        target={external ? "_blank" : "_self"}
        className="transition text-footer  text-xs flex flex-row gap-1 items-center w-fit"
      >
        <span className="hover:border-b">{children}</span>
        {external && <ExternalLink size={12} />}
      </Link>
    </li>
  );
}
