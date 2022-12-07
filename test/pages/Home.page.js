// home.page.js
import Page from './page'
import * as basicFunctions from '../common/basicFunctions'

class HomePage extends Page {
    get products () { return $('li>a[href="/products"]') }
    get cart () { return $('li>a[href="/view_cart"]') }
    get login () { return $('li>a[href="/login"]') }
    get contact () { return $('li>a[href="/contact_us"]') }
    get testCases () { return $('li>a[href="/test_cases"]') }

    get delete () { return $('li>a[href="/delete_account"]') }
    get deleteMsg () { return $('h2[data-qa="account-deleted"]') }
    get continueBtn () { return $('a[data-qa="continue-button"]') }

    get userName () { return $('i[class="fa fa-user"]+b') }
    get logoutUser () { return $('a[href="/logout"]') }

    get subscriptionTxt () { return $('div.single-widget>h2') }
    get autoScrollUp () { return $('a[href="#top"]') }
    get carousel () { return $$('div.carousel-inner h1+h2') }
    get subscriptionEmail () { return $('input#susbscribe_email') }
    get subscriptionBtn () { return $('button#subscribe') }
    get subscriptionMsg () { return $('div[class="alert-success alert"]') }

    async getHomePage () {
        await browser.url('/')
        await basicFunctions.docLoaded()
    }
    async getProducts () {
        await basicFunctions.docLoaded()
        await this.products.waitForClickable()
        await this.products.click()
        await basicFunctions.docLoaded()
    }
    async getCart () {
        await basicFunctions.docLoaded()
        await this.cart.waitForClickable()
        await this.cart.click()
        await basicFunctions.docLoaded()
    }
    async getLogin () {
        await basicFunctions.docLoaded()
        await this.login.waitForClickable()
        await this.login.click()
        await basicFunctions.docLoaded()
    }
    async getContact () {
        await basicFunctions.docLoaded()
        await this.contact.waitForClickable()
        await this.contact.click()
        await basicFunctions.docLoaded()
    }
    async getTestCases () {
        await basicFunctions.docLoaded()
        await this.testCases.waitForClickable()
        await this.testCases.click()
        await basicFunctions.docLoaded()
    }
    async deleteAccount () {
        await basicFunctions.docLoaded()
        await this.delete.waitForClickable()
        await this.delete.click()
        await basicFunctions.docLoaded()
        await expect(this.deleteMsg).toHaveText('ACCOUNT DELETED!')
        await this.continueBtn.click()
        await basicFunctions.docLoaded()
    }
    async logout () {
        await basicFunctions.docLoaded()
        await this.logoutUser.waitForClickable()
        await this.logoutUser.click()
        await basicFunctions.docLoaded()
        await expect(browser).toHaveUrl('https://automationexercise.com/login')
    }
    async subscribe (email) {
        await basicFunctions.docLoaded()
        await expect(this.subscriptionTxt).toHaveText('SUBSCRIPTION')
        await this.subscriptionEmail.setValue(email)
        await this.subscriptionBtn.click()
        await this.subscriptionMsg.waitForExist()
        await expect(this.subscriptionMsg).toHaveText('You have been successfully subscribed!')
    }
}

export default new HomePage()