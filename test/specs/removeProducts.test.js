// removeProducts.test.js
import Cart from '../pages/Cart.page'
import HomePage from '../pages/Home.page'
import ProductsPage from '../pages/Products.page'

describe('Verify removing product from cart feature', () => {
    it('TC 17 : Remove Products From Cart', async () => {
        await HomePage.getHomePage()
        const numberOfItems = 1
        const _not_needed = await ProductsPage.addingToCart(numberOfItems)

        await HomePage.getCart()
        await expect(browser).toHaveUrlContaining('cart')
        await Cart.removeItem[0].click()
        await Cart.emptyCartText.waitForDisplayed()
  })
})