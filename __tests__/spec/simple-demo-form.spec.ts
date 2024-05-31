import { chromium } from 'playwright';
import { test, expect } from "@playwright/test";
import { HomePage } from "../page/home-page";
import { SimpleDemoFormPage } from "../page/simple-demo-form-page";

let homePage: HomePage
let simpleDemoFormPage: SimpleDemoFormPage

test("Simple Form Demo", async ({ page }) => {   

    const message: string = "Welcome to LambdaTest"

    homePage = new HomePage(page)
    simpleDemoFormPage = new SimpleDemoFormPage(page)

    await page.goto("/selenium-playground")

    await homePage.simpleDemoFormLink.click()

    await test.step("Validate the URL", async () => {
        expect(page.url()).toContain("simple-form-demo")
    })

    await test.step("Enter a message", async () => {
        await simpleDemoFormPage.enterMessageTextBox.fill(message)
        await simpleDemoFormPage.getCheckedValueButton.click()
    })

    await test.step("Validate the message", async () => {
        await expect(simpleDemoFormPage.messageBox).toBeAttached()
        await expect(simpleDemoFormPage.messageBox).toBeVisible()
        await expect(simpleDemoFormPage.messageBox).toContainText(message)
    })
})