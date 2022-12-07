export async function docLoaded () {    
    // await browser.execute(() => document.readyState === 'complete')
    // await $('img[src="/static/images/home/logo.png"]').waitForDisplayed()
    await browser.waitUntil(
        async () => await browser.execute(async () => document.readyState === 'complete'),
        {
          timeout: 10 * 1000, // 60 seconds
          timeoutMsg: 'Message on failure'
        }
      );
}
export async function scrollPage (key) {
    let i=0
    while(i<777){
        browser.keys(key)
        i+=1
    }
}
export async function waitForMultipleElements (selector) {
    return await browser.waitUntil( async () => {return await selector.length}, {timeout: 10000})
}
export async function waitForElementsExistance (selector) {
    return await browser.waitUntil( async () => {return await selector.length}, {timeout: 10000})
}