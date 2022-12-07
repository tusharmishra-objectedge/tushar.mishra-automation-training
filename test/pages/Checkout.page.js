// home.page.js
import Page from './page'
import * as basicFunctions from '../common/basicFunctions'

class CheckoutPage extends Page {
    get placeOrderBtn () { return $('a[href="/payment"]') }

    get checkoutItems () { return $$('tr[id*="product"]') }
    get deliveryAddress () { return $$('ul#address_delivery li[class="address_address1 address_address2"]') }
    get deliveryMob () { return $('ul#address_delivery li.address_phone') }
    get billingAddress () { return $$('ul#address_invoice li[class="address_address1 address_address2"]') }
    get billingMob () { return $('ul#address_invoice li.address_phone') }
    get commentSection () { return $('textarea.form-control') }
    get invoiceBtn () { return $('a[href*="download_invoice"]') }
    get getHomeAfterInvoice () { return $('div.pull-right>a[href="/"]') }

    async verify (n, address, mobileNo) {
        await basicFunctions.docLoaded()
        await this.checkoutItems[0].waitForDisplayed()
        if (this.checkoutItems.length != n){
            throw 'checkout item mismatch'
          }
        for (let i = 0; i < 3; i++) {
            if(this.deliveryAddress[i].getText() != address[i]
            || this.billingAddress[i].getText() != address[i]){
                throw 'checkout address mismatch!'
            }
          }
        if (this.deliveryMob != mobileNo || this.billingMob != mobileNo){
            throw 'checkout mobile no. mismatch'
          }
        console.log('checkout verified')
    }
    async placeOrder (comment) {
        await basicFunctions.docLoaded()
        this.commentSection.setValue(comment)
        this.placeOrderBtn.click()
        await basicFunctions.docLoaded()
    }
    async getInvoice () {
      await basicFunctions.docLoaded()
      await this.invoiceBtn.click()
      await this.getHomeAfterInvoice.click()
      await basicFunctions.docLoaded()
  }
}

export default new CheckoutPage()