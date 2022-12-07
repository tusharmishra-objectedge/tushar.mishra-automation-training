export async function docLoaded () {
    await browser.execute(() => document.readyState === 'complete')
    await $('img[src="/static/images/home/logo.png"]').waitForDisplayed()
}
export async function scrollPage (key) {
    let i=0
    while(i<777){
        browser.keys(key)
        i+=1
    }
}