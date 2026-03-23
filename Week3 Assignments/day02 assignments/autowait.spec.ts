import {test, expect} from '@playwright/test' ;

test("Autowaits and Assertions", async ({page}) => {

    const eleVisible = page.getByRole('button', { name: 'I am here' });    

    await page.goto(`https://leafground.com/waits.xhtml`);
    await page.locator(`//button[@id='j_idt87:j_idt89']`).click();
    await expect(eleVisible).toBeVisible({timeout: 15000});
    const state = await eleVisible.isVisible();
    if(state === true){
        const eleText = await eleVisible.textContent();
        console.log(`The Element is visible and the text of it is : ${eleText}`);
    } else{
        console.log("Element is not Visible");
    }
    const eleHide = page.getByRole('button', { name: 'I am about to hide' });
    await page.locator(`[id="j_idt87:j_idt92"]`).click();
    await eleHide.waitFor({ state: 'hidden', timeout: 15000 });
    await expect(eleHide).toBeHidden();
    
    await page.getByRole('button', { name: 'Click First Button' }).click();
    await page.locator('.ui-growl-item').nth(0).waitFor({ state: 'hidden' });
    await page.locator('.ui-growl-item').nth(1).waitFor({ state: 'hidden' });
    await page.locator('.ui-growl-item').nth(2).waitFor({ state: 'hidden' });
    const secondButton = page.getByRole('button', { name: 'Click Second' });
    await expect(secondButton).toBeEnabled();
    secondButton.click();
    const staticEleRef = page.getByRole('button', { name: 'I am going to change!' });
    const staticTextValue = await staticEleRef.textContent();
    await page.locator('button[name="j_idt87:j_idt98"]').click();
    console.log(`The text of the Static Element visible is : ${staticTextValue}`);
    await page.getByRole('button', { name: 'Did you notice?' }).waitFor({state : 'visible',timeout:15000});
    const changedEleRef = page.getByRole('button', { name: 'Did you notice?' })
    await expect(changedEleRef).toHaveText('Did you notice?');
    const changedTextValue = await changedEleRef.textContent();
    console.log(`The text of the Changed Element is : ${changedTextValue}`);
    await page.close();
})

