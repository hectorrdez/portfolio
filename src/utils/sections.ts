export type SectionDef = {
  id: string;
  label: string;
};

export const SECTIONS: SectionDef[] = [
  { id: "home", label: "Inicio" },
  { id: "sobre-mi", label: "Sobre mí" },
  { id: "experiencia", label: "Experiencia" },
  { id: "proyectos", label: "Proyectos" },
  { id: "formacion", label: "Formación" },
  { id: "ia", label: "IA" },
  { id: "contacto", label: "Contacto" },
];

export const SECTION_IDS: string[] = SECTIONS.map((section) => section.id);
