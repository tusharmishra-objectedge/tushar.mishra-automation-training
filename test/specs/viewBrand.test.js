// viewBrand.test.js
import * as basicFunctions from '../common/basicFunctions'
import HomePage from '../pages/Home.page'
import ProductsPage from '../pages/Products.page'

describe('Verify if brands are existing', () => {
    it('TC 19 : View & Cart Brand Products', async () => {
        await HomePage.getHomePage()
        await HomePage.getProducts()
        await ProductsPage.brand.isDisplayed()
        await ProductsPage.brands[1].click()
        await basicFunctions.docLoaded()
        await expect(ProductsPage.welcomeTxt).toHaveTextContaining('BRAND')

        await ProductsPage.brands[4].click()
        await basicFunctions.docLoaded()
        await expect(ProductsPage.welcomeTxt).toHaveTextContaining('BRAND')
        if (ProductsPage.viewProduct.length == 0){throw 'no products found!'}
  })
})