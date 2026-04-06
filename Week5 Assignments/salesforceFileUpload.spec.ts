import { test,expect } from "@playwright/test";
import path from "node:path";

test(`File Upload in Salesforce Application`,async ({page}) => {
    await page.goto(`https://login.salesforce.com/`);
    await page.locator(`#username`).fill("dilipkumar.rajendran@testleaf.com");
    await page.locator(`#password`).fill("TestLeaf@2025");
    await page.locator(`#Login`).click();
    await page.waitForEvent("domcontentloaded");
    await page.getByTitle('App Launcher', { exact: true }).click();
    await page.waitForTimeout(2000);
    await page.getByLabel('View All Applications').click();
    await page.getByPlaceholder('Search apps or items...', { exact: true }).fill("Accounts");
    await page.locator(`span[part='formatted-rich-text'] p mark`).click();
    await page.getByText('New', { exact: true }).click();
    const accountName = "Test Account2";
    await page.getByRole('textbox', { name: 'Name' }).fill(accountName);
    await page.locator(`button[aria-label="Type"]`).click();
    await page.getByTitle('Prospect', { exact: true }).click();
    //const indDropdwn = page.locator(`button[aria-label="Industry"]`) ;
    await page.locator(`button[aria-label="Industry"]`).press('Enter');
    //await indDropdwn.click();
    await page.getByText('Banking', { exact: true }).click(); 
    await page.locator(`button[name='SaveEdit']`).click();
    const accountEle = page.locator(`lightning-formatted-text[slot='primaryField']`);
    await expect(accountEle).toContainText(accountName);
    const filePromise = page.waitForEvent("filechooser");
    await page.locator(`div[title="Upload Files"]`).first().click();
    const fileUpload = await filePromise ;
    await fileUpload.setFiles(path.join(__dirname,`../../Data/Testleaf_logo.jpeg`));
    const uploadAssertEle = page.locator(`//span[contains(@class,'slds-float')]`);
    await expect(uploadAssertEle).toHaveText("1 of 1 file uploaded");
    await page.getByRole('button', { name: 'Done' }).click();

})