import {test} from '@playwright/test' ;

test("Drodown Selection and Assertions", async ({page}) => {

    await page.goto(`https://leafground.com/select.xhtml`);
    await page.selectOption(`//select[@class='ui-selectonemenu']`, {label :"Playwright"});
    //await page.selectOption(`(//select[@class='ui-selectonemenu']/option)[3]`);
    const dropdownOptions = page.locator(`//select[@class='ui-selectonemenu']/option`);
    const totalOptions = await dropdownOptions.count();
        for (let i = 0;i<totalOptions;i++) {
        console.log(`dropdown option ${i} is ${await dropdownOptions.nth(i).innerText()}`)
         }
    await page.locator(`//div[@id='j_idt87:country']`).click();
    const countrySelected = page.locator(`//li[text()='India']`);
    await countrySelected.click();
    const cities =  page.locator(`(//select[@id='j_idt87:city_input'])/option`);
    const allCities = await cities.allInnerTexts();
    if (allCities.includes("Chennai")) {
        console.log(`You have selected ${await countrySelected.textContent()}, and Cities belonging to it is loaded`)
    } else{
        console.log("You have selected different country other than India")
    }
    const course = page.locator(`//button[contains(@class,'autocomplete-dropdown')]`);
    const coursename =  page.locator(`//ul[contains(@class,'autocomplete-items')]/li`);
    const courseCount = await coursename.count();  
    for (let i = 1; i<=3; i++) {
        await course.click();
        await coursename.nth(i).click();
    }
    await page.locator(`//div[@id='j_idt87:lang']`).click();
    const langList = page.locator(`//ul[@id='j_idt87:lang_items']/li`)
    const totalLang = await langList.count();
        for (let i = 0;i<totalLang;i++) {
        console.log(`Language option ${i} is ${await langList.nth(i).innerText()}`)
         }
    await page.locator(`//li[text()='English']`).click(); 
    await page.close();    
})