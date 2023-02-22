const LoginPage = require('../pageobjects/login.page')
const allureReporter = require('@wdio/allure-reporter').default
const HomePage = require('../pageobjects/home.page')
const { config } = require('../../wdio.conf')

describe('TS-TRENDYOL-WEB-UI-16', () => {
    it('Forgot Password Mail Control', async () => {
        await LoginPage.open();
        await browser.maximizeWindow();
        await HomePage.back.click();
        await HomePage.logIn.moveTo();
        await HomePage.logInBtn.click();
        await LoginPage.inputUsername.setValue(config.wrongMail);
        await LoginPage.inputPassword.setValue(config.spacePass);
        await LoginPage.btnSubmit.click();
        await browser.pause(3000);
        let mailreq = await LoginPage.wrongMailError.isExisting();
        if(mailreq==false){
            validationError();
        }

        await LoginPage.forgotPass.click();
        await LoginPage.forgotEmailInput.setValue(config.username);
        await LoginPage.forgotEmailBtn.click();
        await browser.pause(3000);
        await browser.url('https://accounts.google.com/v3/signin/identifier?dsh=S-1543463764%3A1675149066487860&authuser=0&continue=https%3A%2F%2Fmail.google.com&ec=GAlAFw&hl=tr&service=mail&flowName=GlifWebSignIn&flowEntry=AddSession')
        await LoginPage.gmailInput.setValue(config.username);
        await LoginPage.gmailInputBtn.click();
        await browser.pause(3000);
        await LoginPage.gmailPassInput.setValue(config.password);
        await LoginPage.gmailPassInputBtn.click();
        await browser.pause(3000);

        let maill = await LoginPage.mail.isExisting();
        if(maill==false){
            notUpdatePassword();
        }
        let text = await LoginPage.mail.getText();
        if(text!="Trendyol"){
            notMailUpdate();
        }
        await browser.pause(3000);


            allureReporter.addFeature('Feature');
    })
})


