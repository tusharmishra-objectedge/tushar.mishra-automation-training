// searchProduct.test.js
import HomePage from '../pages/Home.page'
import ProductsPage from '../pages/Products.page'

describe('Search product', () => {
    it('TC 9 : Verify search product functionality', async () => {
        await HomePage.getHomePage()
        await HomePage.getProducts()

        await ProductsPage.checkPage()
        await ProductsPage.searchProduct('shirt')
  })
})