// home.page.js
import Page from './page'
import * as basicFunctions from '../common/basicFunctions'

class PDP extends Page {
    get itemName () { return $('img+h2') }
    get itemPrice () { return $('span>span') }
    get itemQty () { return $('input#quantity') }
    get addToCartBtn () { return $('button[class="btn btn-default cart"]') }
    get itemAvailability () { return $('span+p') }
    get itemCondition () { return $('span+p+p') }
    get itemBrand () { return $('span+p+p+p') }

    async checkPage () {
        await basicFunctions.docLoaded()
        await expect(browser).toHaveUrlContaining('product_details')
    }
    async isVisible () {
        await basicFunctions.docLoaded()
        await this.itemName.isDisplayed()
        await this.itemPrice.isDisplayed()
        await this.itemQty.isDisplayed()
        await this.itemAvailability.isDisplayed()
        await this.itemCondition.isDisplayed()
        await this.itemBrand.isDisplayed()
    }
    async setQty (n) {
        await basicFunctions.docLoaded()
        await this.itemQty.setValue(n)
        await this.addToCartBtn.click()
        await basicFunctions.docLoaded()
    }
}

export default new PDP()