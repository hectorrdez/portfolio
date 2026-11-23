import { expect, test } from "@playwright/test";

test("skip link jumps keyboard focus to main content", async ({ page }) => {
  await page.goto("/");
  await page.keyboard.press("Tab");
  const skipLink = page.getByRole("link", {
    name: "Saltar al contenido principal",
  });
  await expect(skipLink).toBeFocused();
  await skipLink.click();
  await expect(page.locator("#main-content")).toBeVisible();
});

test("nav lists sections in the new order", async ({ page }) => {
  await page.goto("/");
  const nav = page.getByRole("navigation", { name: "Secciones" });
  const labels = await nav.getByRole("link").allTextContents();
  expect(labels).toEqual([
    "Sobre mí",
    "Experiencia",
    "Proyectos",
    "Formación",
    "IA",
    "Contacto",
  ]);
});

test("footer has no GitHub link and no unverified certification claim", async ({
  page,
}) => {
  await page.goto("/");
  const footer = page.locator("footer");
  await expect(footer.getByRole("link", { name: /github/i })).toHaveCount(0);
  await expect(footer.getByText(/istqb/i)).toHaveCount(0);
});
