import { expect, test } from "@playwright/test";

test("experience lists all roles in order with their details", async ({ page }) => {
  await page.goto("/");
  const experience = page.locator("#experiencia");
  await experience.scrollIntoViewIfNeeded();
  await expect(experience.getByRole("heading", { level: 2, name: "Trayectoria técnica" })).toBeVisible();
  const articles = experience.getByRole("article");
  await expect(articles).toHaveCount(3);
  const roles = [
    "Desarrollador full-stack · Creador de dev-harness-skills",
    "QA Automation & Accessibility Analyst",
    "Software QA Intern – Accessibility & Testing Mobile",
  ];
  for (const [index, role] of roles.entries()) {
    await expect(articles.nth(index)).toHaveAccessibleName(role);
    await expect(articles.nth(index).getByRole("heading", { level: 3, name: role })).toBeVisible();
  }
  await expect(articles.nth(0).getByText("PROYECTOS PROPIOS", { exact: true })).toBeVisible();
  await expect(articles.nth(0).getByText("Junio 2026 – Actualidad")).toBeVisible();
  await expect(articles.nth(0).getByText("Alicante, España · Remoto")).toBeVisible();
  await expect(articles.nth(1).getByText("Agosto 2024 – Actualidad")).toBeVisible();
  await expect(articles.nth(2).getByText("Abril 2024 – Junio 2024")).toBeVisible();
  await expect(experience.getByText("Agosto 2026")).toHaveCount(0);
  await expect(articles.nth(1).getByText("Axe-core", { exact: true })).toBeVisible();
  await expect(articles.nth(1).getByText("Docker", { exact: true })).toBeVisible();
  await expect(experience.getByRole("link")).toHaveCount(0);
});
