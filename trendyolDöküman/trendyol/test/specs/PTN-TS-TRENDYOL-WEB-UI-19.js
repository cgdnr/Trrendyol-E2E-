const LoginPage = require('../pageobjects/login.page')
const allureReporter = require('@wdio/allure-reporter').default
const HomePage = require('../pageobjects/home.page')
const { config } = require('../../wdio.conf')

describe('PTN-TS-TRENDYOL-WEB-UI-19', () => {
    it('Brand Filtering', async () => {
        await LoginPage.open();
        await browser.maximizeWindow();
        await browser.pause(2000);
        await HomePage.back.click();
        await HomePage.logIn.moveTo();
        await HomePage.logInBtn.click();
        await LoginPage.inputUsername.setValue(config.username);
        await LoginPage.inputPassword.setValue(config.password);
        await LoginPage.btnSubmit.click();
        await browser.pause(3000);
        await HomePage.search.click();
        await HomePage.search.setValue('Bilgisayar');
        await HomePage.searchBtn.click();
        await HomePage.lenovo.click();
        await browser.pause(3000);
        let pc = await HomePage.lenovoText.getText();
        let text = "LENOVO"
        if(pc!=text){
            brandFilterError();
        }
            allureReporter.addFeature('Feature');
    })
})


