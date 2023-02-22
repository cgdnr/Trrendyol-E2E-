const LoginPage = require('../pageobjects/login.page')
const allureReporter = require('@wdio/allure-reporter').default
const HomePage = require('../pageobjects/home.page')
const { config } = require('../../wdio.conf')

describe('PTN-TS-TRENDYOL-WEB-UI-31', () => {
    it('Pay', async () => {
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
        await HomePage.accept.click();
        await browser.pause(1000);
        await HomePage.order.click();
        await browser.pause(1000);
        await HomePage.saveAndGo.click();
        await browser.pause(3000);

        await HomePage.agreement.click();
        let frame = await browser.$('/html[1]/body[1]/div[1]/div[1]/div[1]/main[1]/div[2]/div[1]/div[2]/div[2]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/iframe[1]')
        await browser.switchToFrame(frame);
        await browser.setTimeout({'implicit': 10000});
        await HomePage.cardNumberInput.click();
        await HomePage.cardNumberInput.setValue(config.cardNumber);
        await browser.pause(1000);
        await HomePage.cardMonth.click();
        await browser.pause(1000);
        await HomePage.jan.click();
        await browser.pause(1000);
        await HomePage.cardYear.click();
        await browser.pause(1000);
        await HomePage.twentyFive.click();
        await browser.pause(2000);
        await HomePage.cardSecurity.click();
        await HomePage.cardSecurity.setValue(config.securityCode);
        await browser.pause(1000);
        
        await HomePage.pay.click();
        await browser.pause(3000);

            allureReporter.addFeature('Feature');
    })
})


