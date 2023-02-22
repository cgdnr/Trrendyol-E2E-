const LoginPage = require('../pageobjects/login.page')
const allureReporter = require('@wdio/allure-reporter').default
const HomePage = require('../pageobjects/home.page')
const { config } = require('../../wdio.conf')

describe('TS-TRENDYOL-WEB-UI-10', () => {
    it('Invalid Mail', async () => {
        await LoginPage.open();
        await browser.maximizeWindow();
        await HomePage.back.click();
        await HomePage.logIn.moveTo();
        await HomePage.logInBtn.click();
        await LoginPage.inputUsername.setValue(config.invalidMail);
        await LoginPage.inputPassword.setValue(config.password);
        await LoginPage.btnSubmit.click();
        await browser.pause(3000);
        let mailreq = await LoginPage.wrongMailError.isExisting();
        if(mailreq==false){
            validationError();
        }
        let mail = "E-posta adresiniz ve/veya şifreniz hatalı.";
        let mailText = await LoginPage.wrongMailError.getText();
        if(mail!=mailText){
            validationTextMail();
        }
        await browser.pause(3000);

            allureReporter.addFeature('Feature');
    })
})


