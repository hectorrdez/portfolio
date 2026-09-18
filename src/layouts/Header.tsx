import ButtonLink from "@/components/controls/ButtonLink";
import Row from "@/components/placing/Row";
import PathUtils from "@/utils/PathUtils";
import DropdownFloating, {
  type DropdownItemDef,
} from "@components/dropdowns/DropdownFloating";
import { File, User } from "lucide-react";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";

const dropdownItems: Array<DropdownItemDef> = [
  { label: "HolaHolaHolaHolaHola" },
  { label: "Hola" },
  { label: "Hola" },
];

export default function Header() {
  return (
    <header className="h-16 flex justify-center items-center w-full bg-header border-b-2 border-b-header">
      <Row className="items-center justify-between px-8 w-full">
        <Row className="gap-8 items-center">
          <Link to="/">
            <Logo></Logo>
          </Link>
          <NavMenu></NavMenu>
        </Row>
        <Row className="gap-8 items-center">
          <ButtonLink to="/register">Probar gratis</ButtonLink>
          <DropdownFloating items={dropdownItems}>
            <ProfilePhotoButton></ProfilePhotoButton>
          </DropdownFloating>
        </Row>
      </Row>
    </header>
  );
}

function Logo() {
  return (
    <Row className="gap-2 items-center text-header-logo">
      <File fill="#7188F0" />
      <span className="text-2xl font-semibold">ScoutLog</span>
    </Row>
  );
}

function NavMenu() {
  return (
    <ul className="flex gap-6">
      <NavMenuOption link="products">Productos</NavMenuOption>
      <NavMenuOption link="pricing">Planes y precios</NavMenuOption>
      <NavMenuOption link="resources">Recursos</NavMenuOption>
      <NavMenuOption link="support">Soporte</NavMenuOption>
    </ul>
  );
}

type NavMenuOptionProps = {
  children: ReactNode;
  link: string;
  external?: boolean;
};

function NavMenuOption({
  children,
  link,
  external = false,
}: NavMenuOptionProps) {
  return (
    <li>
      <Link
        to={external ? link : PathUtils.getRoutePath(link)}
        target={external ? "_blank" : "_self"}
        className="hover:border-b"
      >
        {children}
      </Link>
    </li>
  );
}

function ProfilePhotoButton() {
  return (
    <Link
      to="/login"
      className="rounded-full w-9 h-9 bg-gray-600 flex justify-center items-center"
    >
      <User />
    </Link>
  );
}
