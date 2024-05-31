import { Locator, Page } from "@playwright/test"

export class HomePage {

    readonly page: Page
    readonly simpleDemoFormLink: Locator
    readonly dragAndDropSliderLink: Locator
    readonly inputFormSubmitLink: Locator

    constructor (page: Page) {
        this.page = page
        this.simpleDemoFormLink = page.getByRole("link", { name: "Simple Form Demo" })
        this.dragAndDropSliderLink = page.getByRole("link", { name: "Drag & Drop Sliders" })
        this.inputFormSubmitLink = page.getByRole("link", { name: "Input Form Submit" })
    }
}