// scrollButton.test.js
import * as basicFunctions from '../common/basicFunctions'
import HomePage from '../pages/Home.page'
 
describe('Verify scrolling feature', () => {
    it('TC 25: Verify Scroll Up using button and Scroll Down functionality', async () => {
        await HomePage.getHomePage()
        await basicFunctions.scrollPage('\uE015')
        await HomePage.subscriptionTxt.isDisplayed()
        await HomePage.autoScrollUp.click()
        await HomePage.carousel[0].waitForDisplayed()
        await expect(HomePage.carousel[0]).toHaveText('Full-Fledged practice website for Automation Engineers')        
  })

  it('TC 26: Verify Scroll Up without using button and Scroll Down functionality', async () => {
    await HomePage.getHomePage()
    await basicFunctions.scrollPage('\uE015')
    await HomePage.subscriptionTxt.isDisplayed()
    await basicFunctions.scrollPage('\uE013')
    await HomePage.carousel[0].waitForDisplayed()
    await expect(HomePage.carousel[0]).toHaveText('Full-Fledged practice website for Automation Engineers')        
    })
})