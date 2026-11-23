import { expect, test } from "@playwright/test";

test("projects section lists 17 projects and preserves the original access links", async ({
  page,
}) => {
  await page.goto("/");
  const section = page.locator("#proyectos");
  await section.scrollIntoViewIfNeeded();
  await expect(section.getByRole("article")).toHaveCount(17);

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

test("nav includes Proyectos between Experiencia and Formación", async ({
  page,
}) => {
  await page.goto("/");
  const navigation = page.getByRole("navigation", { name: "Secciones" });
  const names = await navigation.getByRole("link").allTextContents();
  expect(names.map((name) => name.trim())).toEqual(
    expect.arrayContaining(["Experiencia", "Proyectos", "Formación"]),
  );
  const projectsIndex = names.findIndex((name) => name.trim() === "Proyectos");
  expect(names[projectsIndex - 1].trim()).toBe("Experiencia");
  expect(names[projectsIndex + 1].trim()).toBe("Formación");
  await page
    .getByRole("navigation", { name: "Secciones" })
    .getByRole("link", { name: "Proyectos" })
    .click();
  await expect(page.locator("#proyectos")).toBeInViewport();
});

test("category filters expose their state and show matching projects", async ({ page }) => {
  await page.goto("/");
  const section = page.locator("#proyectos");
  const filters = section.getByRole("group", { name: "Filtrar proyectos por categoría" });
  const categories = ["Todos", "IA", "Web", "Móvil", "Testing", "Herramientas"];

  await expect(filters.getByRole("button")).toHaveCount(categories.length);
  for (const category of categories) {
    await expect(filters.getByRole("button", { name: category, exact: true })).toHaveAttribute(
      "aria-pressed", category === "Todos" ? "true" : "false",
    );
  }

  await filters.getByRole("button", { name: "IA", exact: true }).click();
  await expect(filters.getByRole("button", { name: "IA", exact: true })).toHaveAttribute("aria-pressed", "true");
  await expect(filters.getByRole("button", { name: "Todos", exact: true })).toHaveAttribute("aria-pressed", "false");
  const cards = section.getByRole("article");
  expect(await cards.count()).toBeGreaterThanOrEqual(2);
  for (const card of await cards.all()) {
    await expect(card.getByText("IA", { exact: true })).toBeVisible();
  }
  await expect(section.getByRole("article", { name: "Dev harness y skills" })).toBeVisible();
  await expect(section.getByRole("article", { name: "Nazaret336" })).toHaveCount(0);

  await filters.getByRole("button", { name: "Web", exact: true }).click();
  await expect(filters.getByRole("button", { name: "Web", exact: true })).toHaveAttribute("aria-pressed", "true");
  await expect(filters.getByRole("button", { name: "IA", exact: true })).toHaveAttribute("aria-pressed", "false");
  await expect(section.getByRole("article", { name: "Nazaret336" })).toBeVisible();
});

test("private project case study opens and closes with keyboard", async ({ page }) => {
  await page.goto("/");
  const card = page.locator("#proyectos").getByRole("article", { name: "Dev harness y skills" });
  await expect(card.getByText("Repositorio privado", { exact: true })).toBeVisible();
  await expect(card.getByRole("link")).toHaveCount(0);
  const button = card.getByRole("button", { name: "Ver caso de estudio" });
  await expect(button).toHaveAttribute("aria-expanded", "false");
  await button.focus();
  await page.keyboard.press("Enter");
  await expect(button).toHaveAttribute("aria-expanded", "true");
  for (const name of ["Problema", "Solución", "Resultado"]) {
    await expect(card.getByRole("heading", { name, exact: true })).toBeVisible();
  }
  await page.keyboard.press("Enter");
  await expect(button).toHaveAttribute("aria-expanded", "false");
  await expect(card.getByRole("heading", { name: "Problema" })).toBeHidden();
});

test("public project links to its repository", async ({ page }) => {
  await page.goto("/");
  const card = page.locator("#proyectos").getByRole("article", { name: "Portfolio" });
  await expect(card.getByRole("link", { name: "Ver repositorio: Portfolio" })).toHaveAttribute(
    "href", "https://github.com/hectorrdez/portfolio",
  );
});
