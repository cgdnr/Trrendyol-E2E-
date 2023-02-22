const LoginPage = require('../pageobjects/login.page')
const allureReporter = require('@wdio/allure-reporter').default
const HomePage = require('../pageobjects/home.page')
const { config } = require('../../wdio.conf')

describe('TS-TRENDYOL-WEB-UI-4', () => {
    it('Just Password Input Null', async () => {
        await LoginPage.open();
        await browser.maximizeWindow();
        await HomePage.back.click();
        await HomePage.logIn.moveTo();
        await HomePage.logInBtn.click();
        await LoginPage.inputUsername.setValue(config.username);
        await LoginPage.btnSubmit.click();
        let passError = await LoginPage.passError.isExisting();
        if(passError==false){
            validationError();
        }
        let passText = await LoginPage.passError.getText();
        let pass = "Lütfen şifrenizi giriniz.";
        if(pass!=passText){
            validationTextError();
        }


            allureReporter.addFeature('Feature');
    })
})


