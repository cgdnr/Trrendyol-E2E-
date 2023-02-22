const LoginPage = require('../pageobjects/login.page')
const allureReporter = require('@wdio/allure-reporter').default
const HomePage = require('../pageobjects/home.page')

describe('TS-TRENDYOL-WEB-UI-3', () => {
    it('Login Input Null', async () => {
        await LoginPage.open();
        await browser.maximizeWindow();
        await HomePage.back.click();
        await HomePage.logIn.moveTo();
        await HomePage.logInBtn.click();
        await LoginPage.btnSubmit.click();
        let req = await LoginPage.nullRequiredText.isExisting();
        if(req==false){
            validationError();
        }
        let reqText = await LoginPage.nullRequiredText.getText();
        let text = "Lütfen geçerli bir e-posta adresi giriniz.";
        if(reqText!=text){
            validationTextError();
        }

            allureReporter.addFeature('Feature');
    })
})


