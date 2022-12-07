// Payment.page.js
import Page from './page'
import * as basicFunctions from '../common/basicFunctions'

class PaymentPage extends Page {
    get namE () { return $('input[name="name_on_card"]') }
    get cardNo () { return $('input[name="card_number"]') }
    get cvc () { return $('input[name="cvc"]') }
    get month () { return $('input[name="expiry_month"]') }
    get year () { return $('input[name="expiry_year"]') }
    get confirm () { return $('button#submit') }
    get confirmation () { return $('h2[data-qa="order-placed"]') }

    async pay (namE, cardNo, cvc, month, year) {
        await basicFunctions.docLoaded()
        await this.namE.setValue(namE)
        await this.cardNo.setValue(cardNo)
        await this.cvc.setValue(cvc)
        await this.month.setValue(month)
        await this.year.setValue(year)
        await this.confirm.click()
        await basicFunctions.docLoaded()
        await expect(this.confirmation).toHaveText('ORDER PLACED!')        
    }
}

export default new PaymentPage()