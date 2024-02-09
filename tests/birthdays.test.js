import { expect, test } from '@playwright/test';

test('list of birthdays on route /birthdays', async ({ page }) => {
	// Doties uz maršrutu
	await page.goto('/birthdays');

	//
	// TODO: await expect(page.?);
	await expect(page.getByText("Hercules")).toBeInvisible();
	await expect(page.getByText("Athena")).toBeInvisible();
});
