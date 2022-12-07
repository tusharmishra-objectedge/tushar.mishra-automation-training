// Register.page.js
import Page from './page'
import * as basicFunctions from '../common/basicFunctions'

class RegisterPage extends Page {
    get signupTxt () { return $('div.login-form>h2>b') }
    get gender () { return $('#id_gender1') }
    get password () { return $('#password') }
    get days () { return $('#days') }
    get months () { return $('#months') }
    get years () { return $('#years') }
    get newsletter () { return $('#newsletter') }
    get optin () { return $('#optin') }
    get first_name () { return $('#first_name') }
    get last_name () { return $('#last_name') }
    get company () { return $('#company') }
    get address1 () { return $('#address1') }
    get address2 () { return $('#address2') }
    get state () { return $('#state') }
    get city () { return $('#city') }
    get zipcode () { return $('#zipcode') }
    get mobile_number () { return $('#mobile_number') }
    get signupBtn () { return $('button[type="submit"][data-qa="create-account"]') }

    get successMsg () { return $('h2[data-qa="account-created"]') }
    get continueBtn () { return $('a[data-qa="continue-button"]') }

    async signup (password, day, month, year, first_name, last_name, company, 
        address1, address2, state, city, zipcode, mobile_number) {
            await basicFunctions.docLoaded()
            await expect(this.signupTxt).toHaveText('ENTER ACCOUNT INFORMATION')
            await this.gender.click()
            await this.password.setValue(password)
            await this.days.selectByVisibleText(day)
            await this.months.selectByVisibleText(month)
            await this.years.selectByVisibleText(year)
            await this.newsletter.click()
            await this.optin.click()
            await this.first_name.setValue(first_name)
            await this.last_name.setValue(last_name)
            await this.company.setValue(company)
            await this.address1.setValue(address1)
            await this.address2.setValue(address2)
            await this.state.setValue(state)
            await this.city.setValue(city)
            await this.zipcode.setValue(zipcode)
            await this.mobile_number.setValue(mobile_number)
            await this.signupBtn.click()
            await basicFunctions.docLoaded()
            await this.successMsg.isDisplayed()
            await this.continueBtn.click()
            await basicFunctions.docLoaded()
            await browser.refresh()
            await basicFunctions.docLoaded()
    }
}

export default new RegisterPage()