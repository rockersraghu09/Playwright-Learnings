import {test, expect} from '@playwright/test';

test('Automating alerts', async ({page}) => {

    await page.goto(`https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm`);
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

    const frame1 = page.frameLocator(`#iframeResult`);
    await frame1.getByRole( 'button', {name: 'Try it'}).click();
    const retrievedText = await frame1.locator(`#demo`).textContent();
    console.log(retrievedText);
    expect(retrievedText).toBe("You pressed OK!");   

})