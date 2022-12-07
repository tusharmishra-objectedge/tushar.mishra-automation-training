// loginCheckout.test.js
import * as basicFunctions from '../common/basicFunctions'
import Cart from '../pages/Cart.page'
import CheckoutPage from '../pages/Checkout.page'
import HomePage from '../pages/Home.page'
import LoginPage from '../pages/Login.page'
import PaymentPage from '../pages/Payment.page'
import ProductsPage from '../pages/Products.page'
import UserData from '../testData/userData'


describe('Verify login before checkout feature', () => {
    it('TC 16 : Place Order: Login before Checkout', async () => {
        await HomePage.getHomePage()
        await HomePage.getLogin()
        await LoginPage.login(UserData.LOGIN_EMAIL, UserData.PASSWORD)

        await expect(HomePage.userName).toHaveText(UserData.SIGNUP_NAME)
        const numberOfItems = 1
        const _not_needed = await ProductsPage.addingToCart(numberOfItems)
        await HomePage.getCart()
        await expect(browser).toHaveUrlContaining('cart')
        await Cart.checkoutBtn.click()
        await basicFunctions.docLoaded()
        await CheckoutPage.verify(numberOfItems, [UserData.COMPANY, UserData.ADDRESS_1, UserData.ADDRESS_2], UserData.MOBILE)
        await CheckoutPage.placeOrder('some comment')
        await PaymentPage.pay (UserData.CARDNAME, UserData.CARDNO, UserData.CVC, UserData.CARDMONTH, UserData.CARDYEAR)
        await HomePage.deleteAccount()
  })
})