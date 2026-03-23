import {test, expect} from '@playwright/test' ;

test("Checkbox Selection and Assertions", async ({page}) => {

    await page.goto(`https://leafground.com/checkbox.xhtml`);
    await page.getByText('Basic', { exact: true }).click();
    await page.getByText('Ajax', { exact: true }).click();
    const message = await page.locator(`.ui-growl-message span`).innerText();
    console.log(message)
    if(message === 'Checked') {
        console.log(`Success! Expected Notification message is ${message} and it is displayed`);
    } else {
        console.log('Failure! Expected Notification message is not displayed. Retry');
    }
    await page.waitForSelector(`.ui-growl-message span`, { state: 'hidden' });
    await page.getByText('Javascript', { exact: true }).click()
    await page.locator(`(//div[@id='j_idt87:ajaxTriState']/div)[2]`).click();
    const optionChosen = await page.locator(`//div[@role='alert']/div/p`).innerText()
    console.log(optionChosen);
    if(optionChosen === 'State = 1') {
        console.log(`State of the Tri-state checbox is ${optionChosen} and it is as expected`);
    } else {
        console.log('State of the Tri-state checbox is different from what is selected');
    }
await page.waitForSelector(`//div[@role='alert']/div/p`, { state: 'hidden' });
await page.locator(`//div[contains(@class,'toggleswitch')]`).nth(0).click();
const toggleAlert = await page.locator(`.ui-growl-message span`).innerText()
    console.log(toggleAlert);
    if(toggleAlert === 'Checked') {
        console.log(`Success! Expected ToggleSwitch message is ${toggleAlert} and it is is displayed`);
    } else {
        console.log('Failure! Expected ToggleSwitch message is not displayed. Retry');
    }
await page.waitForSelector(`.ui-growl-message span`, { state: 'hidden' });
await expect.soft(page.getByText("Disabled",{exact:true})).toBeEnabled();
await page.locator(`//div[@id='j_idt87:multiple']`).click();
await page.waitForLoadState();
await page.getByText('London', { exact: true }).last().click();
await page.getByText('Paris', { exact: true }).last().click();
await page.getByText('Berlin', { exact: true }).last().click();
await page.getByRole('link', { name: 'Close' }).click();
await page.locator(`//div[@id='j_idt87:multiple']`).click();
await page.close();

})