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
        const l = await basicFunctions.waitForMultipleElements(this.checkoutItems)
        if (l != n){
            throw 'checkout item mismatch'
          }
        await this.deliveryMob.waitForDisplayed()
        await browser.pause(2000)
//        console.log('addressssssss', this.deliveryAddress, this.billingAddress, address)
        for (let i = 0; i < 3; i++) {
          console.log('addresssss', i, await this.deliveryAddress[i].getText(), await this.billingAddress[i].getText())
            if(await this.deliveryAddress[i].getText() != address[i]
            || await this.billingAddress[i].getText() != address[i]){
                throw 'checkout address mismatch!'
            }
          }
        if (await this.deliveryMob.getText() != mobileNo || await this.billingMob.getText() != mobileNo){
            throw 'checkout mobile no. mismatch'
          }
        console.log('checkout verified')
    }
    async placeOrder (comment) {
        await basicFunctions.docLoaded()
        await this.commentSection.setValue(comment)
        await this.placeOrderBtn.click()
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