// addProducts.test.js
import Cart from '../pages/Cart.page'
import HomePage from '../pages/Home.page'
import ProductsPage from '../pages/Products.page'

describe('Verify cart feature', () => {
    it('TC 12 : Add Products in Cart', async () => {
        await HomePage.getHomePage()
        await HomePage.getProducts()
        const list = await ProductsPage.addingToCart(2)
        const nameList = list[0]
        const priceList = list[1]
        await HomePage.getCart()
        await Cart.verify(nameList, priceList)
  })
})