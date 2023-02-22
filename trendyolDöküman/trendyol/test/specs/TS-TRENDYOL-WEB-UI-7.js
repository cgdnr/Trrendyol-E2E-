const LoginPage = require('../pageobjects/login.page')
const allureReporter = require('@wdio/allure-reporter').default
const HomePage = require('../pageobjects/home.page')
const { config } = require('../../wdio.conf')

describe('TS-TRENDYOL-WEB-UI-7', () => {
    it('Space in Mail', async () => {
        await LoginPage.open();
        await browser.maximizeWindow();
        await HomePage.back.click();
        await browser.pause(1000);
        await HomePage.logIn.moveTo();
        await HomePage.logInBtn.click();
        await browser.pause(1000);
        await LoginPage.inputUsername.setValue(config.spaceMail);
        await LoginPage.inputPassword.setValue(config.password);
        await LoginPage.btnSubmit.click();
        await browser.pause(3000);
        let mailreq = await LoginPage.mailError.isExisting();
        if(mailreq==false){
            validationError();
        }
        let mail = "Lütfen geçerli bir e-posta adresi giriniz.";
        let mailText = await LoginPage.mailError.getText();
        if(mail!=mailText){
            validationTextMail();
        }
        await browser.pause(3000);

            allureReporter.addFeature('Feature');
    })
})


