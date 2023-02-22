const homePage = require('../pageobjects/home.page');
const LoginPage = require('../pageobjects/login.page')
const allureReporter = require('@wdio/allure-reporter').default

describe('TS-TRENDYOL-WEB-UI-1', () => {
    it('Open Home Page', async () => {
        await LoginPage.open();
        let log = await homePage.logo.isExisting();
        if(log == false){
            notOpenHomePage();
        }
            allureReporter.addFeature('Feature');
    })
})


