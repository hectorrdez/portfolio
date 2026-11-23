import { expect, test } from "@playwright/test";

test("landing page exposes SEO and social metadata", async ({ page }) => {
  await page.goto("/");

  const title = "Héctor Rodríguez Tovar — Full-Stack Developer con IA";
  await expect(page).toHaveTitle(title);
  const description = page.locator('meta[name="description"]');
  await expect(description).toHaveAttribute("content", /full-stack/i);
  await expect(description).toHaveAttribute("content", /harness/i);
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", "https://hectorrdez.es/");

  const og = (property: string) => page.locator(`meta[property="${property}"]`);
  await expect(og("og:type")).toHaveAttribute("content", "website");
  await expect(og("og:title")).toHaveAttribute("content", title);
  await expect(og("og:description")).toHaveAttribute("content", /full-stack/i);
  await expect(og("og:description")).toHaveAttribute("content", /harness/i);
  await expect(og("og:url")).toHaveAttribute("content", "https://hectorrdez.es/");
  await expect(og("og:image")).toHaveAttribute("content", "https://hectorrdez.es/og-image.png");
  await expect(og("og:image:width")).toHaveAttribute("content", "1200");
  await expect(og("og:image:height")).toHaveAttribute("content", "630");
  await expect(og("og:locale")).toHaveAttribute("content", "es_ES");
  await expect(page.locator('meta[name="twitter:card"]')).toHaveAttribute("content", "summary_large_image");

  const jsonLd = await page.locator('script[type="application/ld+json"]').textContent();
  expect(jsonLd).not.toBeNull();
  const person = JSON.parse(jsonLd!);
  expect(person["@type"]).toBe("Person");
  expect(person.name).toBe("Héctor Rodríguez Tovar");
  expect(person.jobTitle).toBe("Full-Stack Developer");
  expect(person.sameAs).toEqual(expect.arrayContaining([
    "https://www.linkedin.com/in/hectorrdez/",
    "https://github.com/hectorrdez",
  ]));
  expect(person).not.toHaveProperty("telephone");
});

test("crawler resources and social image are available", async ({ request }) => {
  const robots = await request.get("/robots.txt");
  expect(robots.status()).toBe(200);
  expect(await robots.text()).toContain("Sitemap: https://hectorrdez.es/sitemap.xml");

  const sitemap = await request.get("/sitemap.xml");
  expect(sitemap.status()).toBe(200);
  expect(await sitemap.text()).toContain("<loc>https://hectorrdez.es/</loc>");

  const image = await request.get("/og-image.png");
  expect(image.status()).toBe(200);
  expect(image.headers()["content-type"]).toMatch(/^image\/png(?:;|$)/i);
});
