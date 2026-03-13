import { firefox,webkit, test } from "@playwright/test";

test("Multiple Contexts - Launch Firefox Browser and goto Flipkart website", async () => {


     const browser = await firefox.launch();
     const context = await browser.newContext(); 
     const page    = await context.newPage() ;

     await page.goto('https://www.flipkart.com/');
     const pgTitle = await page.title();
     console.log(`The Title of the page is ${pgTitle}`);
     const pgURL = await page.url();
    console.log(`The URL of the page is ${pgURL} `);
     await page.waitForTimeout(3000);
 
    
})


test("Multiple Contexts - Launch Safari Browser and goto Redbus website", async () => {


     const browser1 = await webkit.launch();
     const context1 = await browser1.newContext(); 
     const page1    = await context1.newPage() ;

     await page1.goto('https://www.redbus.in/');
     const pgTitle1 = await page1.title();
     console.log(`The Title of the page is ${pgTitle1}`);
     const pgURL1 = await page1.url();
    console.log(`The URL of the page is ${pgURL1} `);
     await page1.waitForTimeout(3000);
 
    
})
