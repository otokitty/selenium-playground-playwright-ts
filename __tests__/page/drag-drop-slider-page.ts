import { Locator, Page } from "@playwright/test"

export class DragAndDropSliderPage {

    readonly page: Page
    readonly slider15: Locator
    readonly rangeValue: Locator

    constructor (page: Page) {
        this.page = page
        this.slider15 = page.locator("#slider3").getByRole("slider")
        this.rangeValue = page.locator("#rangeSuccess")
    }
}