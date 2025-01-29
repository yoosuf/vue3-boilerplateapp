import { test, expect } from "@playwright/test";

test("displays product list", async ({ page }) => {
  await page.goto("http://localhost:9000/");
  await expect(page.locator("h2")).toHaveText("Product List");
  await expect(page.locator(".grid > div")).toHaveCount(3);
});
