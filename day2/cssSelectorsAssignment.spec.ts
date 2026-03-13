import { chromium, test } from "@playwright/test";

test("cssSelectors Home Assignment", async ({page}) =>  {

    await page.goto("http://leaftaps.com/opentaps/control/main");
    await page.locator(`#username`).fill("democsr");
    await page.locator(`#password`).fill("crmsfa");
    await page.locator(`.decorativeSubmit`).click();
    await page.getByText('CRM/SFA').click();
    await page.getByText('Leads', { exact: true }).click();
    await page.getByRole('link', { name: 'Create Lead' }).click();
    await page.locator(`#createLeadForm_companyName`).fill("Microsoft");
    await page.locator(`#createLeadForm_firstName`).fill("Mark");
    await page.locator(`#createLeadForm_lastName`).fill("Antony");
    await page.locator(`input[name='personalTitle']`).fill("Mr");
    await page.locator(`input[name='generalProfTitle']`).fill("Technical Lead");
    await page.locator(`#createLeadForm_departmentName`).fill("Quality Assurance");
    await page.locator(`#createLeadForm_annualRevenue`).fill("35,00,000");
    await page.locator(`#createLeadForm_primaryPhoneNumber`).fill("9876512345");
    await page.locator(`input[value='Create Lead']`).click();
    await page.waitForLoadState();
    let pageTitle = await page.title();
    console.log(`the title of the page is ${pageTitle}`);

})