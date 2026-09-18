import { expect, test } from "@playwright/test";

test("clicking an anchor link moves keyboard focus to the target section", async ({
  page,
}) => {
  await page.goto("/");
  await page
    .getByRole("navigation", { name: "Secciones" })
    .getByRole("link", { name: "Contacto" })
    .click();

  await expect
    .poll(() => page.evaluate(() => document.activeElement?.id ?? null))
    .toBe("contacto");
});

test("focus ring uses the primary color token on a link", async ({
  page,
}) => {
  await page.goto("/");
  const contactLink = page
    .getByRole("navigation", { name: "Secciones" })
    .getByRole("link", { name: "Contacto" });
  await contactLink.focus();
  await expect(contactLink).toBeFocused();
});
