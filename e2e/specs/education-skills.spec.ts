import { expect, test } from "@playwright/test";

test("formacion section lists education and key skills", async ({ page }) => {
  await page.goto("/");
  const section = page.locator("#formacion");
  await section.scrollIntoViewIfNeeded();

  await expect(section.getByText("IES Doctor Balmis")).toHaveCount(2);
  await expect(section.getByText("IES Cavanilles")).toBeVisible();

  await expect(section.getByText("Java", { exact: true })).toBeVisible();
  await expect(section.getByText("Selenium", { exact: true })).toBeVisible();
  await expect(section.getByText("Cucumber", { exact: true })).toBeVisible();
});

test("skills are grouped into the 3 technical categories", async ({
  page,
}) => {
  await page.goto("/");
  const section = page.locator("#formacion");
  await section.scrollIntoViewIfNeeded();

  await expect(
    section.getByText("Automatización & Accesibilidad (Core)"),
  ).toBeVisible();
  await expect(section.getByText("Lenguajes & UI")).toBeVisible();
  await expect(section.getByText("DevOps & Gestión")).toBeVisible();
});
