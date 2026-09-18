import { expect, test } from "@playwright/test";

test("projects section lists all 4 projects with the right access links", async ({
  page,
}) => {
  await page.goto("/");
  const section = page.locator("#proyectos");
  await section.scrollIntoViewIfNeeded();

  await expect(
    section.getByRole("heading", { level: 3, name: "Nazaret336" }),
  ).toBeVisible();
  await expect(
    section.getByRole("link", { name: "Ver aplicación: Nazaret336" }),
  ).toHaveAttribute("href", "https://prueba-nazaret.hectorrdez.es");

  await expect(
    section.getByRole("heading", { level: 3, name: "Nexo" }),
  ).toBeVisible();
  await expect(
    section.getByRole("link", { name: "Ver aplicación: Nexo" }),
  ).toHaveAttribute("href", "https://nexo.hectorrdez.es");

  await expect(
    section.getByRole("heading", { level: 3, name: "Mambo Bot" }),
  ).toBeVisible();
  await expect(
    section.getByRole("link", { name: "Ver dashboard: Mambo Bot" }),
  ).toHaveAttribute("href", "https://mambo.hectorrdez.es/dashboard");

  await expect(
    section.getByRole("heading", { level: 3, name: "EduGreen" }),
  ).toBeVisible();
  await expect(
    section.getByRole("link", { name: "Repo frontend: EduGreen" }),
  ).toHaveAttribute("href", "https://github.com/hectorrdez/edugreen-web");
  await expect(
    section.getByRole("link", { name: "Repo backend: EduGreen" }),
  ).toHaveAttribute("href", "https://github.com/hectorrdez/edugreen-api");
});

test("EduGreen card has no live-app link, only repo links", async ({
  page,
}) => {
  await page.goto("/");
  const section = page.locator("#proyectos");
  await section.scrollIntoViewIfNeeded();

  const eduGreenCard = section.getByRole("article", { name: "EduGreen" });

  await expect(
    eduGreenCard.getByRole("link", { name: /^Ver aplicación/ }),
  ).toHaveCount(0);
  await expect(eduGreenCard.getByRole("link")).toHaveCount(2);
});

test("project cards show real tech stacks, not the mockup's invented ones", async ({
  page,
}) => {
  await page.goto("/");
  const section = page.locator("#proyectos");
  await section.scrollIntoViewIfNeeded();

  const nexoCard = section.getByRole("article", { name: "Nexo" });
  await expect(nexoCard.getByText("Next.js")).toHaveCount(0);
  await expect(nexoCard.getByText("Vite", { exact: true })).toBeVisible();

  const eduGreenCard = section.getByRole("article", { name: "EduGreen" });
  await expect(eduGreenCard.getByText("Spring Boot")).toHaveCount(0);
  await expect(eduGreenCard.getByText("MySQL", { exact: true })).toBeVisible();
});

test("nav includes Proyectos between Formación and Contacto", async ({
  page,
}) => {
  await page.goto("/");
  await page
    .getByRole("navigation", { name: "Secciones" })
    .getByRole("link", { name: "Proyectos" })
    .click();
  await expect(page.locator("#proyectos")).toBeInViewport();
});
