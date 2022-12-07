// existingUser.test.js
import LoginPage from '../pages/Login.page'
import HomePage from '../pages/Home.page'
import UserData from '../testData/userData'

describe('Signup form', () => {
    it('TC 5 : Existing user signup', async () => {
        await HomePage.getHomePage()
        await HomePage.getLogin()

        await LoginPage.signup(UserData.SIGNUP_NAME, UserData.PERMANENT_EMAIL)
        await expect(LoginPage.invalidMsg).toHaveText('Email Address already exist!')
    })
})