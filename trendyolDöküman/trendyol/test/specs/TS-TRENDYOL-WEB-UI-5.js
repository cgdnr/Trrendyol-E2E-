const LoginPage = require('../pageobjects/login.page')
const allureReporter = require('@wdio/allure-reporter').default
const HomePage = require('../pageobjects/home.page')
const { config } = require('../../wdio.conf')

describe('TS-TRENDYOL-WEB-UI-5', () => {
    it('Just Username Input Null', async () => {
        await LoginPage.open();
        await browser.maximizeWindow();
        await HomePage.back.click();
        await HomePage.logIn.moveTo();
        await HomePage.logInBtn.click();
        await LoginPage.inputPassword.setValue(config.password);
        await LoginPage.btnSubmit.click();
        let mailreq = await LoginPage.mailError.isExisting();
        if(mailreq==false){
            validationError();
        }
        let mail = "Lütfen geçerli bir e-posta adresi giriniz.";
        let mailText = await LoginPage.mailError.getText();
        if(mail!=mailText){
            validationTextMail();
        }

            allureReporter.addFeature('Feature');
    })
})


