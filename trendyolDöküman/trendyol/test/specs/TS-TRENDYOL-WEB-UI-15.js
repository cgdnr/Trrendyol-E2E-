const LoginPage = require('../pageobjects/login.page')
const allureReporter = require('@wdio/allure-reporter').default
const HomePage = require('../pageobjects/home.page')
const { config } = require('../../wdio.conf')

describe('TS-TRENDYOL-WEB-UI-15', () => {
    it('Forgot Password Button', async () => {
        await LoginPage.open();
        await browser.maximizeWindow();
        await HomePage.back.click();
        await HomePage.logIn.moveTo();
        await HomePage.logInBtn.click();
        await LoginPage.inputUsername.setValue(config.wrongMail);
        await LoginPage.inputPassword.setValue(config.spacePass);
        await LoginPage.btnSubmit.click();
        await browser.pause(3000);
        let mailreq = await LoginPage.wrongMailError.isExisting();
        if(mailreq==false){
            validationError();
        }
        await browser.pause(2000);
        await LoginPage.forgotPass.click();
        let inpt = await LoginPage.forgotEmailInput.isExisting();
        if(inpt==false){
            forgotPassError();
        }
        let btn = await LoginPage.forgotEmailBtn.isClickable();
        if(btn==false){
            forgotPassBtnError();
        }
        await browser.pause(3000);

            allureReporter.addFeature('Feature');
    })
})


