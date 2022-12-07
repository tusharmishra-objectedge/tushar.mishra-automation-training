//checkoutRegister.test.js
import * as basicFunctions from '../common/basicFunctions'
import HomePage from '../pages/Home.page'
import ProductsPage from '../pages/Products.page'
import Cart from '../pages/Cart.page'
import CheckoutPage from '../pages/Checkout.page'
import RegisterPage from '../pages/Register.page'
import LoginPage from '../pages/Login.page'
import PaymentPage from '../pages/Payment.page'
import UserData from '../testData/userData'

describe('Verify checkout and register feature', () => {
    it('TC 14 : Place Order: Register while Checkout', async () => {
       await HomePage.getHomePage()
        
        const numberOfItems = 1
        await ProductsPage.addingToCart(numberOfItems)
        await HomePage.getCart()
        await expect(browser).toHaveUrlContaining('cart')
        await Cart.checkoutBtn.click()
        await Cart.loginBtn.waitForClickable({ timeout: 25000 })
        await Cart.loginBtn.click()

        await LoginPage.signup(UserData.SIGNUP_NAME, UserData.SIGNUP_EMAIL)
        await RegisterPage.signup (UserData.PASSWORD, UserData.DAY, UserData.MONTH, UserData.YEAR, 
          UserData.FIRST_NAME, UserData.LAST_NAME, UserData.COMPANY, UserData.ADDRESS_1,
          UserData.ADDRESS_2, UserData.STATE, UserData.CITY, UserData.ZIPCODE, UserData.MOBILE)

       // await expect(HomePage.userName).toHaveText(UserData.SIGNUP_NAME)
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