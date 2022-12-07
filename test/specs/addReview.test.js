// addReview.test.js
import * as basicFunctions from '../common/basicFunctions'
import HomePage from '../pages/Home.page'
import ProductsPage from '../pages/Products.page'
import UserData from '../testData/userData'

describe('Adding review on product', () => {
    it('TC 21: Add review on product', async () => {
        await HomePage.getHomePage()
        await HomePage.getProducts()
        await expect(ProductsPage.welcomeTxt).toHaveText('ALL PRODUCTS')
        await ProductsPage.viewProduct[0].click()
        await basicFunctions.docLoaded()
        await ProductsPage.giveReview(UserData.SIGNUP_NAME, UserData.LOGIN_EMAIL, 'some review comments')
  })
})