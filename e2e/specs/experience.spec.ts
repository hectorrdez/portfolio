import { expect, test } from "@playwright/test";

test("experience section lists both DXC roles with dates", async ({
  page,
}) => {
  await page.goto("/");
  const experience = page.locator("#experiencia");
  await experience.scrollIntoViewIfNeeded();

  await expect(
    experience.getByRole("heading", {
      level: 3,
      name: "QA Automation & Accessibility Analyst",
    }),
  ).toBeVisible();
  await expect(
    experience.getByText("Agosto 2024 – Agosto 2026"),
  ).toBeVisible();

  await expect(
    experience.getByRole("heading", {
      level: 3,
      name: "Software QA Intern – Accessibility & Testing Mobile",
    }),
  ).toBeVisible();
  await expect(
    experience.getByText("Abril 2024 – Junio 2024"),
  ).toBeVisible();
});

test("current role shows real technology tags", async ({ page }) => {
  await page.goto("/");
  const experience = page.locator("#experiencia");
  await experience.scrollIntoViewIfNeeded();

  await expect(experience.getByText("Axe-core", { exact: true })).toBeVisible();
  await expect(experience.getByText("Docker", { exact: true })).toBeVisible();
});
