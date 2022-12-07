// testCases.test.js
import HomePage from '../pages/Home.page'

describe('Checking test-cases page', () => {
    it('TC 7 : Verify test-cases page', async () => {
        await HomePage.getHomePage()
        await HomePage.getTestCases()
        await expect(browser).toHaveUrl('https://automationexercise.com/test_cases')
    })
})