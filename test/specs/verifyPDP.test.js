// verifyPDP.test.js
import * as basicFunctions from '../common/basicFunctions'
import HomePage from '../pages/Home.page'
import ProductsPage from '../pages/Products.page'
import PDP from '../pages/PDP.page'

describe('PDP', () => {
    it('TC 8 : Verify PDP', async () => {
        await HomePage.getHomePage()
        await HomePage.getProducts()

        await ProductsPage.checkPage()
        await ProductsPage.getList()
        await ProductsPage.viewProduct[0].click()
        await basicFunctions.docLoaded()
        
        await PDP.checkPage()
        await PDP.isVisible()
    })
})