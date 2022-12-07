// ContactUs.page.js
import Page from './page'
import * as basicFunctions from '../common/basicFunctions'

class ContactUs extends Page {
    get welcomeTxt () { return $('div+h2[class="title text-center"]') }
    get namE () { return $('input[data-qa="name"]') }
    get email () { return $('input[data-qa="email"]') }
    get subject () { return $('input[data-qa="subject"]') }
    get message () { return $('textarea[data-qa="message"]') }
    get chooseFile () { return $('input[name="upload_file"]') }
    get submitBtn () { return $('input[type="submit"]') }
    get successTxt () { return $('h2+div[class*="alert-success"]') }

    async sendMsg (name, email, subject, msg, file) {
        await basicFunctions.docLoaded()
        await expect(this.welcomeTxt).toHaveText('GET IN TOUCH')
        await this.namE.setValue(name)
        await this.email.setValue(email)
        await this.subject.setValue(subject)
        await this.message.setValue(msg)

        const remoteFilePath = await browser.uploadFile(file)
        await this.chooseFile.setValue(remoteFilePath)
        await this.submitBtn.click()
        await browser.acceptAlert()
        await basicFunctions.docLoaded()
        await expect(this.successTxt).toHaveText('Success! Your details have been submitted successfully.')
    }
}

export default new ContactUs()