import { chromium } from 'playwright';
import { test, expect } from "@playwright/test";
import { HomePage } from "../page/home-page";
import { InputFormSubmitPage } from "../page/input-form-submit-page";

let homePage: HomePage
let inputFormSubmitPage: InputFormSubmitPage

test("Input Form Submit", async ({ page }) => {   

    homePage = new HomePage(page)
    inputFormSubmitPage = new InputFormSubmitPage(page)

    await page.goto("/selenium-playground")

    await homePage.inputFormSubmitLink.click()

    await test.step("Validate required fields", async () => {
        await inputFormSubmitPage.submitButton.click()

        const validationMessage = await inputFormSubmitPage.nameTextBox.evaluate((element) => {
            const input = element as HTMLInputElement
            return input.validationMessage
        })
        expect(validationMessage.toLowerCase()).toContain("fill out this field")
    })

    await test.step("Fill out the form", async () => {
        await inputFormSubmitPage.fillOutForm()
    })

    await test.step("Validate submission of form", async () => {
        await expect(inputFormSubmitPage.successMessage).toBeAttached()
        await expect(inputFormSubmitPage.successMessage).toHaveText("Thanks for contacting us, we will get back to you shortly.")
    })
})
