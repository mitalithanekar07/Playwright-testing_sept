import { test, expect } from '@playwright/test';

test("checkboxes1", async({page})=>{
// checkbox check and uncheck with assertion


    await page.goto("https://automatewithbipin.com/")

    await page.locator("//div[text()='Checkbox']").click();

     let checkbox=await page.locator("//input[@id='terms']");

     await checkbox.check();
     expect(await checkbox.isChecked()).toBe(true)

     await checkbox.uncheck();
     expect(await checkbox.isDisabled()).toBe(false)    
})
test("already checked checkbox", async({page})=>{

     await page.goto("https://automatewithbipin.com/")

    await page.locator("//div[text()='Checkbox']").click();

    let alreadychecked= await page.locator('//input[@id="newsletter"]')
    expect(await alreadychecked.isChecked()).toBe(true)
})

test("disable checkbox", async({page})=>{

    await page.goto("https://automatewithbipin.com/")

    await page.locator("//div[text()='Checkbox']").click();

    let alreadydisabled = await page.locator('//input[@id="insurance"]');

    expect(await alreadydisabled.isDisabled()).toBe(true);


}
)

test("checked options and count", async({page})=>{

   await page.goto("https://automatewithbipin.com/")

    await page.locator("//div[text()='Checkbox']").click();

    await page.locator('//input[@name="meal"][@value="veg"]').check();
    await page.locator('//input[@name="meal"][@value="jain"]').check()

    let checkedonly=await page.locator('input[name="meal"]:checked').count();
    expect(checkedonly).toBe(2)
}
)

test("check master checkbox and check all are checked", async({page})=>{
    await page.goto("https://automatewithbipin.com/")

    await page.locator("//div[text()='Checkbox']").click();

    await page.locator('//input[@type="checkbox"][@id="selectAllAddons"]').check();

     let allchecked = await page.locator('input.addon:checked').count();

    console.log("Checked addon checkboxes:", allchecked);

    expect(allchecked).toBe(3);


}
)