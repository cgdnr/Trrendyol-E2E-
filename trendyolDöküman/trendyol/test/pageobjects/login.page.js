const Page = require('./page');

class LoginPage extends Page {
    
    get inputUsername () {
        return $('#login-email');
    }

    get inputPassword () {
        return $('#login-password-input');
    }

    get btnSubmit () {
        return $('/html/body/div[1]/div[3]/div[3]/div[1]/form/button');
    }
    get nullRequiredText (){
        return $('/html/body/div[1]/div[3]/div[3]/div[1]/span[2]')
    }
    get passError (){
        return $('#error-box-wrapper')
    }
    get mailError (){
        return $('/html/body/div[1]/div[3]/div[3]/div[1]')
    }

    get wrongMailError (){
        return $('/html/body/div[1]/div[3]/div[3]/div[1]/span[2]')
    }

    get forgotPass (){
        return $('/html[1]/body[1]/div[1]/div[3]/div[3]/div[2]/form[1]/div[3]/a[1]/span[1]')
    }
    get forgotEmailInput (){
        return $('/html/body/div[1]/div[3]/div/form/div/input')
    }
    get forgotEmailBtn (){
        return $('/html/body/div[1]/div[3]/div/form/button[1]')
    }

    get mail (){
        return $("//tbody/tr[@id=':24']/td[4]/div[2]/span[1]/span[1]")
    }

    get gmailInput ( ){
        return $('/html/body/div[1]/div[1]/div[2]/div/c-wiz/div/div[2]/div/div[1]/div/form/span/section/div/div/div[1]/div/div[1]/div/div[1]/input')
    }
    get gmailInputBtn (){
        return $('//body/div[1]/div[1]/div[2]/div[1]/c-wiz[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/button[1]')
    }               
    get gmailPassInput (){
        return $('/html/body/div[1]/div[1]/div[2]/div/c-wiz/div/div[2]/div/div[1]/div/form/span/section[2]/div/div/div[1]/div[1]/div/div/div/div/div[1]/div/div[1]/input')
    }
    get gmailPassInputBtn (){
        return $('/html/body/div[1]/div[1]/div[2]/div/c-wiz/div/div[2]/div/div[2]/div/div[1]/div/div/button/span')
    }



    open () {
        return super.open('');
    }
}

module.exports = new LoginPage();
