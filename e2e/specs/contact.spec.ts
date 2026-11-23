import { expect, test } from "@playwright/test";

test("contact section exposes direct links and CV download", async ({
  page,
}) => {
  await page.goto("/");
  const contact = page.locator("#contacto");
  await contact.scrollIntoViewIfNeeded();

  await expect(
    contact.getByRole("link", { name: /hectorrdez@gmail\.com/ }),
  ).toHaveAttribute("href", "mailto:hectorrdez@gmail.com");
  await expect(
    contact.getByRole("link", { name: /601 27 45 16/ }),
  ).toHaveAttribute("href", "tel:+34601274516");
  await expect(
    contact.getByRole("link", { name: /linkedin\.com\/in\/hectorrdez/ }),
  ).toHaveAttribute("href", "https://www.linkedin.com/in/hectorrdez/");

  const downloadLink = contact.getByRole("link", {
    name: "Descargar CV en PDF",
  });
  await expect(downloadLink).toHaveAttribute(
    "href",
    "/cv/HectorRodriguezTovar_cv_fullstack-ia.pdf",
  );

  const response = await page.request.get("/cv/HectorRodriguezTovar_cv_fullstack-ia.pdf");
  expect(response.status()).toBe(200);
});
