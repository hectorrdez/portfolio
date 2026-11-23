import { expect, test } from "@playwright/test";

test("formacion section lists education and grouped skills", async ({ page }) => {
  await page.goto("/");
  const section = page.locator("#formacion");
  await section.scrollIntoViewIfNeeded();
  await expect(section.getByText("IES Doctor Balmis")).toHaveCount(2);
  await expect(section.getByText("IES Cavanilles")).toBeVisible();

  const groups = [
    ["Front", "TypeScript"],
    ["Back y datos", "Node.js"],
    ["IA", "Claude Code"],
    ["Testing", "Playwright"],
    ["DevOps", "Docker"],
  ];
  const headings = section.getByRole("heading", { level: 4 });
  await expect(headings).toHaveText(groups.map(([name]) => name));
  for (const [name, skill] of groups) {
    await expect(section.getByRole("heading", { level: 4, name, exact: true })).toBeVisible();
    await expect(section.getByText(skill, { exact: true })).toBeVisible();
  }
  await expect(section.getByText("Java", { exact: true })).toBeVisible();
  await expect(section.getByText("Kotlin", { exact: true })).toBeVisible();
});
