import { test, expect } from "../fixture/base"

test.beforeEach(async ({ page, url }) => {
    await page.goto(url.url)
})

test.describe("Test Scenario 1", () => {
    test("Simple Form Demo", async ({ page, homePage, simpleDemoFormPage }) => {
        const message: string = "Welcome to LambdaTest"

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
})