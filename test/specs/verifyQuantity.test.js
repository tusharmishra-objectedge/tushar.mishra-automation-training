// verifyQuantity.test.js
import * as basicFunctions from '../common/basicFunctions'
import HomePage from '../pages/Home.page'
import ProductsPage from '../pages/Products.page'
import PDP from '../pages/PDP.page'
import Cart from '../pages/Cart.page'

describe('Verify quantity feature', () => {
    it('TC 13 : Add quantity in Cart', async () => {
        await HomePage.getHomePage()
        await ProductsPage.viewProduct[0].click()
        await basicFunctions.docLoaded()

        await PDP.checkPage()
        await PDP.setQty(4)
        await ProductsPage.viewCartAlert.waitForClickable({ timeout: 25000 })
        await ProductsPage.viewCartAlert.click()
        await basicFunctions.docLoaded()
        await expect(Cart.itemQty[0]).toHaveText('4')
  })
})