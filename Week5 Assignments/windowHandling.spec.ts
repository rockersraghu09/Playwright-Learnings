import { test, expect } from '@playwright/test';

test('Merge Leads - Window Handling', async ({ page,context }) => {

  await page.goto('http://leaftaps.com/opentaps/control/main');
  await page.locator('#username').fill("DemoSalesManager");
  await page.locator('#password').fill("crmsfa");
  await page.locator('.decorativeSubmit').click();
  await page.locator(`#label`).click();
  await page.getByRole('link', { name: 'Leads' }).click();
  await page.getByRole('link', { name: 'Merge Leads' }).click();
  const newPage = context.waitForEvent("page");
  await page.getByAltText('Lookup', { exact: true }).first().click();
  const childPage = await newPage;
  await childPage.waitForLoadState("domcontentloaded");
  await childPage.locator(`(//a[@class="linktext"])[1]`).click();
  const newPage1 = context.waitForEvent("page");
  await page.getByAltText('Lookup', { exact: true }).last().click();  
  const childPage1 = await newPage1;
  await childPage1.waitForLoadState("domcontentloaded");
  await childPage1.locator(`(//table[@class='x-grid3-row-table']//td[1]/div/a)[2]`).click();
  page.on('dialog', async (alert) => {
    console.log(`Alert Type is : ${alert.type()}`);
    console.log(`Alert Message is : ${alert.message()}`);
  
    if (alert.type() === 'prompt') {
        await alert.accept("Okay");
    } else if (alert.type() === 'confirm') {
        await alert.accept()
    } else {
        await alert.dismiss();
    }
  })
  await page.getByText('Merge', { exact: true }).click();
  await page.waitForLoadState('domcontentloaded');
  const pageTitle = await page.title();
  console.log(`The Title of the landing page is ${pageTitle}`);

})