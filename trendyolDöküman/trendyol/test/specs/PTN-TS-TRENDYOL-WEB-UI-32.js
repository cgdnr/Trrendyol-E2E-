const LoginPage = require('../pageobjects/login.page')
const allureReporter = require('@wdio/allure-reporter').default
const HomePage = require('../pageobjects/home.page')

describe('PTN-TS-TRENDYOL-WEB-UI-32', () => {
    it('', async () => {
        await LoginPage.open()

            allureReporter.addFeature('Feature');
    })
})


