// login.page.js
import Page from './page'
import * as basicFunctions from '../common/basicFunctions'

class LoginPage extends Page {
    get loginTxt () { return $('div.login-form>h2') }
    get loginEmail () { return $('input[data-qa="login-email"]') }
    get loginPassword () { return $('input[data-qa="login-password"]') }
    get loginBtn () { return $('button[data-qa="login-button"]') }
    get invalidMsg () { return $('p[style]') }

    get signupTxt () { return $('div.signup-form>h2') }
    get signupName () { return $('input[data-qa="signup-name"]') }
    get signupEmail () { return $('input[data-qa="signup-email"]') }
    get signupBtn () { return $('button[data-qa="signup-button"]') }

    async login (email, pwd) {
        await basicFunctions.docLoaded()
        await expect(this.loginTxt).toHaveText('Login to your account')
        await this.loginEmail.setValue(email)
        await this.loginPassword.setValue(pwd)
        await this.loginBtn.click()
        await basicFunctions.docLoaded()
    }

    async signup (name, email) {
        await basicFunctions.docLoaded()
        await expect(this.signupTxt).toHaveText('New User Signup!')
        await this.signupName.setValue(name)
        await this.signupEmail.setValue(email)
        await this.signupBtn.click()
        await basicFunctions.docLoaded()
    }
}

export default new LoginPage()