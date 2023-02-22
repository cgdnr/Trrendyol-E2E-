const LoginPage = require('../pageobjects/login.page')
const allureReporter = require('@wdio/allure-reporter').default
const HomePage = require('../pageobjects/home.page')

describe('TS-TRENDYOL-WEB-UI-2', () => {
    it('Login Page Open', async () => {
        await LoginPage.open();
        await browser.maximizeWindow();
        await HomePage.back.click();
        await HomePage.logIn.moveTo();
        await HomePage.logInBtn.click();
        await browser.pause(3000);

            allureReporter.addFeature('Feature');
    })
})


