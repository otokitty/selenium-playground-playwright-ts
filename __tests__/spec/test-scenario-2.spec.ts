import { test, expect } from "../fixture/base"

test.beforeEach(async ({ page, url }) => {
    await page.goto(url.url)
})

test.describe("Test Scenario 2", () => {
    test("Drag & Drop Sliders", async ({ page, homePage, dragAndDropSliderPage }) => {

        await homePage.dragAndDropSliderLink.click()

        await test.step("Drag the slider to 95", async () => {
            await expect(dragAndDropSliderPage.slider15).toBeVisible()

            let counter = 1
            const box: any = await dragAndDropSliderPage.slider15.boundingBox()
            const x = (box.x + box.width / 2) / 2
            const y = box.y + box.height / 2

            await page.mouse.move(x, y)
            await page.mouse.down()

            while(await dragAndDropSliderPage.rangeValue.textContent() !== "95") {
                await page.mouse.move(x + counter, y)
                counter++
            }
        })
    })
})