import { expect, test } from "@playwright/test";

test("hero shows name, role and a CTA that scrolls to contact", async ({
  page,
}) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", { level: 1, name: "Héctor Rodríguez Tovar" }),
  ).toBeVisible();
  await expect(
    page.getByText("QA Analyst especializado en automatización"),
  ).toBeVisible();

  await page.getByRole("button", { name: "Hablemos" }).click();
  await expect(page.locator("#contacto")).toBeInViewport();
});
