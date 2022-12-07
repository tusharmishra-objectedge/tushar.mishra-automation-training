// viewCategory.test.js
import * as basicFunctions from '../common/basicFunctions'
import HomePage from '../pages/Home.page'
import ProductsPage from '../pages/Products.page'

describe('Verify if categories are existing', () => {
    it('TC 18 : View Category Products', async () => {
        await HomePage.getHomePage()
        await ProductsPage.category.isDisplayed()
        await ProductsPage.categories[0].click()
        await ProductsPage.subCategories[0].click()
        await basicFunctions.docLoaded()
        await expect(ProductsPage.welcomeTxt).toHaveTextContaining('PRODUCTS')
        await ProductsPage.categories[1].click()
        await ProductsPage.subCategories[3].click()
        await basicFunctions.docLoaded()
        await expect(ProductsPage.welcomeTxt).toHaveTextContaining('PRODUCTS')
  })
})