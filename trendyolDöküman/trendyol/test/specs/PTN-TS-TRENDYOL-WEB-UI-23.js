const LoginPage = require('../pageobjects/login.page')
const allureReporter = require('@wdio/allure-reporter').default
const HomePage = require('../pageobjects/home.page')
const { config } = require('../../wdio.conf')

describe('PTN-TS-TRENDYOL-WEB-UI-23', () => {
    it('Add Basket', async () => {
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
       
        await HomePage.money.click();
        await HomePage.thityMoney.click();
        await HomePage.moneySel.click();
        await browser.pause(2000);
       
        await HomePage.suggested.click();
        await HomePage.smallest.click();
        await HomePage.smallestPro.click();
        await browser.pause(3000);

        await HomePage.addBasket.click();
        await browser.pause(2000);
        let order = await HomePage.order.isExisting();
        if(order==false){
            notAddBasket();
        }
        await browser.pause(3000);
            allureReporter.addFeature('Feature');
    })
})


