const LoginPage = require('../pageobjects/login.page')
const allureReporter = require('@wdio/allure-reporter').default
const HomePage = require('../pageobjects/home.page')
const { config } = require('../../wdio.conf')

describe('PTN-TS-TRENDYOL-WEB-UI-21', () => {
    it('Suggested Filter', async () => {
        await LoginPage.open();
        await browser.maximizeWindow();
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
        await HomePage.money.click();
        await browser.pause(2000);
        await HomePage.thityMoney.click();
        await browser.pause(2000);
        await HomePage.moneySel.click();
        await browser.pause(2000);
        let money = await HomePage.filterMoneyPro.getText();
        if(money<34999){
            notFilteringMoney();
        }
        await HomePage.suggested.click();
        await HomePage.smallest.click();
        let product = await HomePage.smallestPro.getText();
        if(product>36000){
            notSuggested();

        }

            allureReporter.addFeature('Feature');
    })
})


