// loginCart.test.js
import * as basicFunctions from '../common/basicFunctions'
import Cart from '../pages/Cart.page'
import HomePage from '../pages/Home.page'
import LoginPage from '../pages/Login.page'
import ProductsPage from '../pages/Products.page'
import UserData from '../testData/userData'

describe('Verify if cart is working fine after login', () => {
    it('TC 20: Search Products and Verify Cart After Login', async () => {
        await HomePage.getHomePage()  
        await HomePage.getProducts()

        await expect(ProductsPage.welcomeTxt).toHaveText('ALL PRODUCTS')
        await ProductsPage.searchProduct('men')

        const products = await basicFunctions.waitForMultipleElements(ProductsPage.addToCartBtn)
        const _not_needed = await ProductsPage.addingToCart(products)
        await HomePage.getCart()

        let cartLength = await basicFunctions.waitForMultipleElements(Cart.cartItems)
        if (cartLength != products){throw 'not all products are in cart'}
        await Cart.checkoutBtn.click()
        await Cart.loginBtn.waitForDisplayed()
        await Cart.loginBtn.click()
        await basicFunctions.docLoaded()
        await LoginPage.login(UserData.PERMANENT_EMAIL, UserData.PASSWORD)
        await HomePage.getCart()
        cartLength = await basicFunctions.waitForMultipleElements(Cart.cartItems)
        if (cartLength != products){throw 'not all products are in cart after logging in!'}
  })
})
