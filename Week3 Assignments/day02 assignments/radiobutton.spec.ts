import {test, expect} from '@playwright/test' ;

test("Radio button and Assertions", async ({page}) => {

    await page.goto(`https://leafground.com/radio.xhtml`);
    const defaultSelectedBrowser =  page.getByText("Safari").last();
    if ( await defaultSelectedBrowser.isChecked()){
        console.log(`The default selected browser is ${await defaultSelectedBrowser.innerText()}`)
    } else {
        console.log("There are no default selected browsers")
    }
    await expect(defaultSelectedBrowser).toBeChecked();
    const defaultSelectedAge =  page.getByText("21-40 Years");
    if ( await defaultSelectedAge.isChecked()){
        console.log(`The default selected age group is ${await defaultSelectedAge.innerText()}`)
    } else {
        console.log("There are no default selected age group")
    }
    await expect(defaultSelectedAge).toBeChecked();
    const browserSelected =  page.getByText("Chrome").first();
    await browserSelected.check();
    await expect(browserSelected).toBeEnabled();
    await page.getByText('Chennai').check();
    if ( await defaultSelectedAge.isChecked()){
        console.log("The age group checkbox is already checked")
    } else {
        defaultSelectedAge.check();
        console.log("The age group checkbox was not checked before and it is checked now")
    }
    await page.waitForTimeout(5000);
    await page.close();
})
