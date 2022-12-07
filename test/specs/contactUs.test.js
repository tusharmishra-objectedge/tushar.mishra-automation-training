// contactUs.test.js
import * as basicFunctions from '../common/basicFunctions'
import HomePage from '../pages/Home.page'
import ContactUs from '../pages/ContactUs.page'
import UserData from '../testData/userData'


describe('Checking Contact Us form', () => {
    it('TC 6 : Contact Us form', async () => {
        await HomePage.getHomePage()
        await HomePage.getContact()

        await ContactUs.sendMsg (UserData.SIGNUP_NAME, UserData.PERMANENT_EMAIL,
            UserData.SUBJECT, UserData.MESSAGE, UserData.FILEPATH)

        await HomePage.getHomePage()
    })
})