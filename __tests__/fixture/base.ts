import { test as base } from "@playwright/test"
import { HomePage } from "../page/home-page"
import { SimpleDemoFormPage } from "../page/simple-demo-form-page"
import { DragAndDropSliderPage } from "../page/drag-drop-slider-page"
import { InputFormSubmitPage } from "../page/input-form-submit-page"
import url from "../util/url"

type Fixtures = {
    url: any
    homePage: HomePage
    simpleDemoFormPage: SimpleDemoFormPage
    dragAndDropSliderPage: DragAndDropSliderPage
    inputFormSubmitPage: InputFormSubmitPage
}

export const test = base.extend<Fixtures>({
    url: url,
    homePage: async ({ page }, use) => {
        await use(new HomePage(page))
    },
    simpleDemoFormPage: async ({ page }, use) => {
        await use(new SimpleDemoFormPage(page))
    },
    dragAndDropSliderPage: async ({ page }, use) => {
        await use(new DragAndDropSliderPage(page))
    },
    inputFormSubmitPage: async ({ page }, use) => {
        await use(new InputFormSubmitPage(page))
    }
})

export { expect } from "@playwright/test"