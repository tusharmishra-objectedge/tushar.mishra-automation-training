// logout.test.js
import LoginPage from '../pages/Login.page'
import HomePage from '../pages/Home.page'
import UserData from '../testData/userData'

describe('Logout feature', () => {
    it('TC 4 : User logout', async () => {
        await browser.url('login')
        await LoginPage.login(UserData.PERMANENT_EMAIL, UserData.PASSWORD)
        await expect(HomePage.userName).toHaveText(UserData.SIGNUP_NAME)
        await HomePage.logout()
    })
})