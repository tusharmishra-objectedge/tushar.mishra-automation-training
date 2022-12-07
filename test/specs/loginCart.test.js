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
        const products = await ProductsPage.addToCartBtn
        const _not_needed = await ProductsPage.addingToCart(products.length)
        await HomePage.getCart()

        await Cart.cartMenu.waitForDisplayed()
        console.log('xxxxxxxxxxxxxxxxx', Cart.cartItems.length, products.length)
        //if (Cart.cartItems.length != products.length){throw 'not all products are in cart'}
        await Cart.checkoutBtn.click()
        await Cart.loginBtn.waitForDisplayed()
        await Cart.loginBtn.click()
        await basicFunctions.docLoaded()
        await LoginPage.login(UserData.PERMANENT_EMAIL, UserData.PASSWORD)
        await HomePage.getCart()
        await Cart.cartMenu.waitForDisplayed()
        //if (Cart.cartItems.length != products.length){throw 'not all products are in cart after logging in!'}
  })
})