// verifyAddress.test.js
import * as basicFunctions from '../common/basicFunctions'
import Cart from '../pages/Cart.page'
import CheckoutPage from '../pages/Checkout.page'
import HomePage from '../pages/Home.page'
import LoginPage from '../pages/Login.page'
import ProductsPage from '../pages/Products.page'
import RegisterPage from '../pages/Register.page'
import UserData from '../testData/userData'

describe('Verify address details in checkout page', () => {
    it('TC 23: Verify address details in checkout page', async () => {
      await HomePage.getHomePage()
      await HomePage.getLogin()

      await LoginPage.signup(UserData.SIGNUP_NAME, UserData.SIGNUP_EMAIL)
      await RegisterPage.signup (UserData.PASSWORD, UserData.DAY, UserData.MONTH, UserData.YEAR, 
        UserData.FIRST_NAME, UserData.LAST_NAME, UserData.COMPANY, UserData.ADDRESS_1,
        UserData.ADDRESS_2, UserData.STATE, UserData.CITY, UserData.ZIPCODE, UserData.MOBILE)

      await expect(HomePage.userName).toHaveText(UserData.SIGNUP_NAME)
      const numberOfItems = 1
      await ProductsPage.addingToCart(numberOfItems)
      await HomePage.getCart()
      await expect(browser).toHaveUrlContaining('cart')
      await Cart.checkoutBtn.click()
      await basicFunctions.docLoaded()
      await CheckoutPage.verify(numberOfItems, [UserData.COMPANY, UserData.ADDRESS_1, UserData.ADDRESS_2], UserData.MOBILE)
      await HomePage.deleteAccount()
  })
})