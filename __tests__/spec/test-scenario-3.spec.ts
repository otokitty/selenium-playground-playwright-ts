import { test, expect } from "../fixture/base"

test.beforeEach(async ({ page, url }) => {
    await page.goto(url.url)
})

test.describe("Test Scenario 3", () => {
    test("Input Form Submit", async ({ page, homePage, inputFormSubmitPage }) => {

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
})