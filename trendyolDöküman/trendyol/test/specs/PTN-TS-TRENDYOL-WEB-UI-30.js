const LoginPage = require('../pageobjects/login.page')
const allureReporter = require('@wdio/allure-reporter').default
const HomePage = require('../pageobjects/home.page')
const { config } = require('../../wdio.conf')
const { config } = require('../../wdio.conf')

describe('PTN-TS-TRENDYOL-WEB-UI-30', () => {
    it('Adrress Page', async () => {
        await LoginPage.open();
        await browser.maximizeWindow();
        await HomePage.back.click();
        await HomePage.logIn.moveTo();
        await HomePage.logInBtn.click();
        await LoginPage.inputUsername.setValue(config.username);
        await LoginPage.inputPassword.setValue(config.password);
        await LoginPage.btnSubmit.click();
        await browser.pause(3000);

        await HomePage.basket.click();
        await HomePage.order.click();
        await HomePage.saveAndGo.click();
        let card = await HomePage.cardNumberInput.isExisting();
        if(card==false){
            notSaveAndGo()
        }

            allureReporter.addFeature('Feature');
    })
})


