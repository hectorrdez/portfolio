import { expect, test } from "@playwright/test";

test("about section shows the professional summary", async ({ page }) => {
  await page.goto("/");
  const about = page.locator("#sobre-mi");
  await about.scrollIntoViewIfNeeded();

  await expect(
    about.getByRole("heading", { level: 2, name: "Sobre mí" }),
  ).toBeVisible();
  await expect(
    about.getByText("QA Analyst especializado en automatización"),
  ).toBeVisible();
  await expect(about.getByText("Español (nativo)")).toBeVisible();
});
