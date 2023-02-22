const LoginPage = require('../pageobjects/login.page')
const allureReporter = require('@wdio/allure-reporter').default
const HomePage = require('../pageobjects/home.page')
const { config } = require('../../wdio.conf')

describe('PTN-TS-TRENDYOL-WEB-UI-28', () => {
    it('Add Favorite Product to Basket', async () => {
        await LoginPage.open();
        await browser.maximizeWindow();
        await HomePage.back.click();
        await HomePage.logIn.moveTo();
        await HomePage.logInBtn.click();
        await LoginPage.inputUsername.setValue(config.username);
        await LoginPage.inputPassword.setValue(config.password);
        await LoginPage.btnSubmit.click();
        await browser.pause(3000);

        await HomePage.favoritte.click();
        await HomePage.favoritteBtn.click();
        await HomePage.basket.moveTo();
        let text = await HomePage.productName.isExisting();
        if(text==false){
            notProductAddtoBasket();
        }

            allureReporter.addFeature('Feature');
    })
})


