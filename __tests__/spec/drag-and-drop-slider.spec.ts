import { chromium } from 'playwright';
import { test, expect } from "@playwright/test";
import { HomePage } from "../page/home-page";
import { DragAndDropSliderPage } from "../page/drag-drop-slider-page";
import { setTimeout } from "timers/promises";

let homePage: HomePage
let dragAndDropSliderPage: DragAndDropSliderPage

test("Drag & Drop Sliders", async ({ page }) => {   

    homePage = new HomePage(page)
    dragAndDropSliderPage = new DragAndDropSliderPage(page)

    await page.goto("/selenium-playground")

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