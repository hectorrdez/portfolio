import { expect, test } from "@playwright/test";

test("hero shows name, role and a CTA that scrolls to contact", async ({
  page,
}) => {
  await page.goto("/");

  const hero = page.locator("#home");
  await expect(
    hero.getByRole("heading", { level: 1, name: "Héctor Rodríguez Tovar" }),
  ).toBeVisible();
  await expect(
    hero.getByText("QA Analyst especializado en automatización"),
  ).toBeVisible();

  await page.getByRole("button", { name: "Hablemos" }).click();
  await expect(page.locator("#contacto")).toBeInViewport();
});
