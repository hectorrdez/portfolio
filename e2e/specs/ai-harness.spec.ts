import { expect, test } from "@playwright/test";

test("IA navigation opens the harness section and its accessible content", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("navigation", { name: "Secciones" })
    .getByRole("link", { name: "IA", exact: true }).click();

  const section = page.locator("section#ia");
  await expect(section).toBeInViewport();
  await expect(section.getByRole("heading", { level: 2, name: "Mi harness de desarrollo con IA" })).toBeVisible();
  await expect(section.getByRole("article")).toHaveCount(4);
  for (const name of ["Feature inmutable", "Gate automático", "Estado trazable", "Relevo entre agentes"]) {
    await expect(section.getByRole("article", { name, exact: true })).toBeVisible();
  }

  const diagram = section.getByRole("img", { name: "Flujo del harness de desarrollo", exact: true });
  await expect(diagram).toBeVisible();
  await expect(diagram).toHaveAccessibleDescription(/Feature, luego Implementación, luego Gate/);

  const skills = section.getByRole("list", { name: "Skills del harness" });
  await expect(skills.getByRole("listitem")).toHaveCount(16);
  for (const name of ["init-app", "add-feature", "kanban"]) {
    await expect(skills.getByRole("listitem").filter({ hasText: new RegExp(`^${name}$`) })).toBeVisible();
  }
  await expect(section.getByText("16 skills portables", { exact: false })).toBeVisible();
  const hrefs = await section.getByRole("link").evaluateAll((links) =>
    links.map((link) => (link as HTMLAnchorElement).href.toLowerCase()),
  );
  expect(hrefs.filter((href) => /github\.com\/hectorrdez\/(dev-harness-skills|claude-code-mods)(?:[/?#]|$)/.test(href))).toEqual([]);
});

test("harness section does not cause horizontal overflow on mobile", async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 800 });
  await page.goto("/");
  await page.locator("section#ia").scrollIntoViewIfNeeded();
  const dimensions = await page.evaluate(() => ({
    scrollWidth: document.documentElement.scrollWidth,
    innerWidth: window.innerWidth,
  }));
  expect(dimensions.scrollWidth).toBeLessThanOrEqual(dimensions.innerWidth);
});
