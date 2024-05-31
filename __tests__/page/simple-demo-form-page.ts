import { Locator, Page } from "@playwright/test"

export class SimpleDemoFormPage {

    readonly page: Page
    readonly enterMessageTextBox: Locator
    readonly getCheckedValueButton: Locator
    readonly messageBox: Locator

    constructor (page: Page) {
        this.page = page
        this.enterMessageTextBox = page.getByRole("textbox", { name: "Please enter your Message" })
        this.getCheckedValueButton = page.getByRole("button", { name: "Get Checked Value" })
        this.messageBox = page.locator("#user-message #message")
    }
}