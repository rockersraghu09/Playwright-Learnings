import { test,expect } from "@playwright/test";
import path from "node:path";

test(`Upload and Download Files`,async ({page}) => {
    await page.goto(`https://the-internet.herokuapp.com/upload`);
    const uploadFile = page.locator(`#file-upload`);
    await uploadFile.setInputFiles(path.join(__dirname,`../../Data/Sample.docx`));

    const filePromise = page.waitForEvent("filechooser");
    await page.locator(`[id="drag-drop-upload"]`).click();
    const fileUpload = await filePromise
    await fileUpload.setFiles(path.join(__dirname,`../../Data/Testleaf_logo.jpeg`));
    const uploadedFileLoc = page.locator(`(//div[@class="dz-filename"])[1]`);
    await expect(uploadedFileLoc).toHaveText("Testleaf_logo.jpeg");

})

test(`Download a file`, async({page}) => {
    await page.goto(`https://the-internet.herokuapp.com/download`);
    const filePromise1 = page.waitForEvent("download")
    const targetFile = page.getByRole('link', { name: 'file.json' });
    await targetFile.click();
    const fDown = await filePromise1;
    const fs = require('fs');
    const filePath = 'downloads/my-file.pdf';
    await fDown.saveAs(filePath);
    expect(fs.existsSync(filePath)).toBeTruthy();
    
})