import { expect, test } from "@playwright/test";

test("about section shows the professional summary", async ({ page }) => {
  await page.goto("/");
  const about = page.locator("section#sobre-mi");
  await about.scrollIntoViewIfNeeded();

  await expect(
    about.getByRole("heading", { level: 2, name: "Sobre mí" }),
  ).toBeVisible();
  await expect(
    about.getByText("Si tu equipo quiere entregar más rápido con agentes de IA sin que la calidad se resienta, hablamos el mismo idioma."),
  ).toBeVisible();
  for (const chip of ["TypeScript", "React 19", "Node.js", "Playwright"]) {
    await expect(about.getByText(chip, { exact: true })).toBeVisible();
  }
  await expect(about.getByText("Español", { exact: true })).toBeVisible();
  await expect(about.getByText("NATIVO")).toBeVisible();
});

test("about section has no unverified ISO certification claim", async ({
  page,
}) => {
  await page.goto("/");
  await expect(page.locator("section#sobre-mi").getByText(/ISO\/IEC/i)).toHaveCount(
    0,
  );
});
