import { Locator, Page } from "@playwright/test"
import { fa, faker } from "@faker-js/faker"

export class InputFormSubmitPage {

    readonly page: Page
    readonly submitButton: Locator
    readonly nameTextBox: Locator
    readonly emailTextBox: Locator
    readonly passwordTextBox: Locator
    readonly companyTextBox: Locator
    readonly websiteTextBox: Locator
    readonly countryDropdown: Locator
    readonly cityTextBox: Locator
    readonly address1TextBox: Locator
    readonly address2TextBox: Locator
    readonly stateTextBox: Locator
    readonly zipCodeTextBox: Locator
    readonly successMessage: Locator

    constructor (page: Page) {
        this.page = page
        this.submitButton = page.getByRole("button", { name: "Submit" })
        this.nameTextBox = page.getByPlaceholder("Name", { exact: true })
        this.emailTextBox = page.getByPlaceholder("Email", { exact: true })
        this.passwordTextBox = page.getByPlaceholder("Password", { exact: true })
        this.companyTextBox = page.getByPlaceholder("Company", { exact: true })
        this.websiteTextBox = page.getByPlaceholder("Website", { exact: true })
        this.countryDropdown = page.getByRole("combobox")
        this.cityTextBox = page.getByPlaceholder("City", { exact: true })
        this.address1TextBox = page.getByPlaceholder("Address 1", { exact: true })
        this.address2TextBox = page.getByPlaceholder("Address 2", { exact: true })
        this.stateTextBox = page.getByPlaceholder("State", { exact: true })
        this.zipCodeTextBox = page.getByPlaceholder("Zip code", { exact: true })
        this.successMessage = page.locator(".success-msg")
    }

    async fillOutForm () {
        await this.nameTextBox.fill(faker.person.fullName())
        await this.emailTextBox.fill(faker.internet.email())
        await this.passwordTextBox.fill(faker.internet.password())
        await this.companyTextBox.fill(faker.company.name())
        await this.websiteTextBox.fill("https://www.lambdatest.com/selenium-playground/input-form-demo")
        await this.countryDropdown.click()
        await this.countryDropdown.selectOption({ label: "United States" })
        await this.cityTextBox.fill(faker.location.city())
        await this.address1TextBox.fill(faker.location.streetAddress())
        await this.address2TextBox.fill(faker.location.secondaryAddress())
        await this.stateTextBox.fill(faker.location.state())
        await this.zipCodeTextBox.fill(faker.location.zipCode())
        await this.submitButton.click()
    }

}