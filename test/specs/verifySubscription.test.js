// verifySubscription.test.js
import HomePage from '../pages/Home.page'
import UserData from '../testData/userData'

describe('Verify subscription feature', () => {
    it('TC 10 : Verify Subscription in home page', async () => {
        await HomePage.getHomePage()
        await HomePage.subscribe(UserData.PERMANENT_EMAIL)
  })

    it('TC 11 : Verify Subscription in cart page', async () => {
        await HomePage.getHomePage()
        await HomePage.getCart()

        await HomePage.subscribe(UserData.PERMANENT_EMAIL)
    })
})