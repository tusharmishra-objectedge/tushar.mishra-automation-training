// home.page.js
import Page from './page'
import * as basicFunctions from '../common/basicFunctions'

class Cart extends Page {
    get checkoutBtn () { return $('div>a[class="btn btn-default check_out"]') }
    get loginBtn () { return $('p>a[href="/login"]') }
    get cartMenu () { return $('tr.cart_menu') }
    get cartItems () { return $$('tr[id*="product"]') }
    get itemNames () { return $$('a[href*="/product_details/"]') }
    get itemPrices () { return $$('td.cart_price>p') }
    get itemQty () { return $$('button.disabled') }
    get itemTotalPrice () { return $$('p.cart_total_price') }
    get removeItem () { return $$('a.cart_quantity_delete') }
    get emptyCartText () { return $('span#empty_cart') }

    async verify (nameList, priceList) {
        await basicFunctions.docLoaded()
        for (let i = 0; i < this.cartItems.length; i++) {
            if(this.itemNames[i].getText()!= nameList[i] || this.itemPrices[i].getText()!= priceList[i]){
                throw 'cart items mismatch!'
            }
          }
        console.log('cart verified')
    }
}

export default new Cart()