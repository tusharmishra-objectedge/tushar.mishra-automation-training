// addRecommended.test.js
import Cart from '../pages/Cart.page'
import HomePage from '../pages/Home.page'
import ProductsPage from '../pages/Products.page'

describe('Adding recommended items to cart', () => {
    it('TC 22: Add to cart from Recommended items', async () => {
        await HomePage.getHomePage()
        await expect(ProductsPage.recommendedItemTxt).toHaveText('RECOMMENDED ITEMS')

        await ProductsPage.recommendedItems[0].waitForClickable()
        await ProductsPage.recommendedItems[0].click()
        await ProductsPage.dismissAlert.waitForClickable()
        await ProductsPage.dismissAlert.click()
        await HomePage.getCart()
        await expect(Cart.itemNames[0]).toBeDisplayed()
  })
})