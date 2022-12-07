// signup.test.js
import HomePage from '../pages/Home.page'
import LoginPage from '../pages/Login.page'
import RegisterPage from '../pages/Register.page'

import UserData from '../testData/userData'

describe('End to end', () => {
    it('TC 1 : Register User', async () => {
        await HomePage.getHomePage()
        await HomePage.getLogin()

        await LoginPage.signup(UserData.SIGNUP_NAME, UserData.SIGNUP_EMAIL)
        await RegisterPage.signup (UserData.PASSWORD, UserData.DAY, UserData.MONTH, UserData.YEAR, 
            UserData.FIRST_NAME, UserData.LAST_NAME, UserData.COMPANY, UserData.ADDRESS_1,
            UserData.ADDRESS_2, UserData.STATE, UserData.CITY, UserData.ZIPCODE, UserData.MOBILE)

        await expect(HomePage.userName).toHaveText(UserData.SIGNUP_NAME)
        await HomePage.deleteAccount()
    })
})