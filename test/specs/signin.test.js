// signin.test.js
import HomePage from '../pages/Home.page'
import LoginPage from '../pages/Login.page'
import UserData from '../testData/userData'

describe('Signin Form', () => {
    it('TC 2 : Valid user login', async () => {
        await browser.url('login')
        await LoginPage.login(UserData.PERMANENT_EMAIL, UserData.PASSWORD)
        await expect(HomePage.userName).toHaveText(UserData.SIGNUP_NAME)
    })

    it('TC 3 : Invalid user login', async () => {
        await browser.deleteCookies()
        await browser.url('login')
        await LoginPage.login('random@test.test', '123Qwerty#')
        await expect(LoginPage.invalidMsg).toHaveText('Your email or password is incorrect!')
    })
})