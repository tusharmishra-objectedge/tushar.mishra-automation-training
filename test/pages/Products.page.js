// home.page.js
import Page from './page'
import * as basicFunctions from '../common/basicFunctions'

class ProductsPage extends Page {
    get welcomeTxt () { return $('h2[class="title text-center"]') }
    get recommendedItemTxt () { return $('div.recommended_items>h2') }
    get recommendedItems () { return $$('div.recommended_items a[data-product-id="3"]') }
    get category () { return $('div.left-sidebar>h2') }
    get categories () { return $$('a[data-parent="#accordian"]') }
    get subCategories () { return $$('a[href*="/category_products/"]') }
    get brand () { return $('div.brands_products>h2') }
    get brands () { return $$('a[href^="/brand_products/"]') }
    get searchField () { return $('input#search_product') }
    get searchBtn () { return $('button#submit_search') }
    
    get dismissAlert () { return $('button[data-dismiss]') }
    get viewCartAlert () { return $('p>a[href="/view_cart"]') }
    get viewProduct () { return $$('a[href*="/product_details"]') }
    get addToCartBtn () { return $$('div>img~a[data-product-id]') }
    get itemPrices () { return $$('div[class="productinfo text-center"] h2') }
    get itemNames () { return $$('div[class="productinfo text-center"] h2+p') }

    get searchedProductTxt () { return $('div>h2[class]') }
    get reviewTxt () { return $('a[href="#reviews"]') }
    get reviewName () { return $('input#name') }
    get reviewEmail () { return $('input#email') }
    get reviewComment () { return $('textarea#review') }
    get reviewBtn () { return $('button#button-review') }
    get reviewMsg () { return $('div#review-section div[class="alert-success alert"]') }

    async checkPage () {
        await basicFunctions.docLoaded()
        await expect(this.welcomeTxt).toHaveText('ALL PRODUCTS')
    }
    async getList () {
        await basicFunctions.docLoaded()
        if(this.viewProduct.length === 0) {
            throw 'no product list available!'
        }
    }
    async searchProduct (name) {
        await basicFunctions.docLoaded()
        await this.searchField.setValue(name)
        await this.searchBtn.click()
        await basicFunctions.docLoaded()
        await expect(this.searchedProductTxt).toHaveText('SEARCHED PRODUCTS')
        await this.getList()
    }
    async addingToCart (n) {
        await basicFunctions.docLoaded()
        const productPrices = []
        const productNames = []
        for (let i = 0; i < n; i++) {
            productNames.push(this.itemNames[i].getText())
            productPrices.push(this.itemPrices[i].getText())
        }
        for (let i = 0; i < n; i++) {
            await this.addToCartBtn[i].waitForClickable({ timeout: 25000 })
            await this.addToCartBtn[i].click()
            await this.dismissAlert.waitForClickable({ timeout: 25000 })
            await this.dismissAlert.click()
        }
        return [productNames, productPrices]
    }
    async giveReview (name, email, comment) {
        await basicFunctions.docLoaded()
        await expect(this.reviewTxt).toHaveText('WRITE YOUR REVIEW')
        await this.reviewName.setValue(name)
        await this.reviewEmail.setValue(email)
        await this.reviewComment.setValue(comment)
        await this.reviewBtn.click()
        await this.reviewMsg.waitForDisplayed()
    }
}

export default new ProductsPage()