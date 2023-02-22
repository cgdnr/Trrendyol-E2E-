const Page = require('./page');

class HomePage extends Page {
    
    get logo () {
        return $('#logo');
    }
    get back (){
        return $('/html/body/div[1]/div[3]/div[3]/div[2]/div/div/div/div/div[1]')
    }
    get logIn (){
        return $('/html/body/div[1]/div[1]/div/div[2]/div/div/div[3]/div/div/div/div[1]/div[1]/p')
    }
    get logInBtn (){
        return $('/html/body/div[1]/div[1]/div/div[2]/div/div/div[3]/div/div/div/div[1]/div[2]/div/div[1]')
    }
    get search (){
        return $('/html/body/div[1]/div[1]/div/div[2]/div/div/div[2]/div/div/div/input')
    }
    get searchBtn (){
        return $('/html/body/div[1]/div[1]/div/div[2]/div/div/div[2]/div/div/div/i')
    }
    get lenovo(){
        return $('/html/body/div[1]/div[3]/div[2]/div[2]/div/div/div/div[1]/div[1]/div/div/div[2]/div[3]/div/div/div[1]/div/a/div[2]')
    }
    get lenovoText(){
        return $('div.search-app-container div.srch-rslt-cntnt div.srch-prdcts-cntnr div.prdct-cntnr-wrppr div.p-card-wrppr.with-campaign-view:nth-child(3) div.p-card-chldrn-cntnr.card-border div.product-down div:nth-child(1) div.prdct-desc-cntnr div.prdct-desc-cntnr-ttl-w.two-line-text > span.prdct-desc-cntnr-ttl')
    }
    get money (){
        return $("//body/div[@id='container']/div[3]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]")
    }
    get thityMoney (){
        return $('/html/body/div[1]/div[3]/div[2]/div[2]/div/div/div/div[1]/div[1]/div/div/div[4]/div[3]/a[5]/div[2]')
    }
    get moneySel (){
        return $('/html/body/div[1]/div[3]/div[2]/div[2]/div/div/div/div[1]/div[1]/div/div/div[4]/div[3]/a[2]/div[2]')
    }
    get filterMoneyPro(){
        return $("//body/div[@id='container']/div[3]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/div[4]/div[1]/div[1]/div[2]/div[1]/a[1]/div[2]/div[3]/div[2]/div[2]")
    }
    get suggested (){
        return $("//body[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/select[1]")
    }
    get smallest(){
        return $("//body[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/select[1]")
    }
    get smallestPro (){
        return $("//body/div[@id='container']/div[3]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/div[4]/div[1]/div[1]/div[2]/div[1]/a[1]/div[2]/div[3]/div[1]/div[1]")
    }

    get productName (){
        return $("//a[contains(text(),'LENOVO')]")
    }
    get productImg (){
        return $("//body/div[@id='container']/div[5]/main[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/img[1]")
    }
    get price (){
        return $("//body/div[@id='container']/div[5]/main[1]/div[1]/div[2]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[5]/div[1]/div[1]/div[1]/div[2]/span[2]")
    }
    get addBasket (){
        return $("//body/div[@id='container']/div[5]/main[1]/div[1]/div[2]/div[1]/div[2]/div[2]/div[5]/button[1]/div[1]")
    }

    get order (){
        return $("//body/div[@id='container']/div[3]/div[1]/div[1]/aside[1]/div[1]/div[4]/a[1]")
    }
    get basket (){
        return $("//p[contains(text(),'Sepetim')]")
    }
    get productInfoBasket (){
        return $("//body/div[@id='container']/div[3]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/a[1]/p[1]")
    }
    get productInfo (){
        return $("//span[contains(text(),'Legion 5 AMD Ryzen 7-5800H 16GB 1TB SSD RTX3070 8G')]")
    }

    get priceInfo(){
        return $("//body/div[@id='container']/div[3]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/div[4]/div[1]/div[1]/div[2]/div[1]/a[1]/div[2]/div[3]/div[2]/div[2]")
    }
    get basketPriceInfo (){
        return $("//body/div[@id='container']/div[3]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[3]/div[1]/div[2]/div[1]/div[1]")
    }
    get deleteBtn (){
        return $("//body[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[3]/button[1]")
    }
    get deleteWarning(){
        return $("//div[contains(text(),'Legion 5 AMD Ryzen 7-5800H 16GB 1TB SSD RTX3070 8G')]")
    }
    get deleteFavorite(){
        return $("//button[contains(text(),'Sil ve Favorilere Ekle')]")
    }
    get deleteText(){
        return $("//span[contains(text(),'Sepetinde ürün bulunmamaktadır.')]")
    }

    get favoritte (){
        return $("//body/div[@id='container']/div[@id='header']/div[@id='headerMain']/div[@id='sticky-header']/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/a[1]/div[1]")
    }
    get favoritteBtn (){
        return $("//body/div[@id='container']/div[3]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[3]")
    }
    get address (){
        return $("//p[contains(text(),'Adres Bilgileri')]")
    }

    get saveAndGo(){
        return $("//body/div[@id='container']/div[1]/div[1]/main[1]/div[2]/aside[1]/div[1]/div[4]/button[1]")
    }
    
    get cardNumberInput(){
        return $('#card-number')
    }
    get cardMonth(){
        return $('#card-date-month')
    }
    get cardYear (){
        return $('#card-date-year')
    }
    get cardSecurity (){
        return $('#card-cvv')
    }
    get jan (){
        return $('/html/body/div/div[2]/div[1]/div/div[1]/select/option[2]')
    }
    get twentyFive(){
        return $('/html/body/div/div[2]/div[1]/div/div[2]/select/option[4]')
    }
    get pay (){
        return $('#p-layout > aside > div > div:nth-child(1) > button')
    }
    get agreement (){
        return $("//body/div[@id='container']/div[1]/div[1]/main[1]/div[2]/aside[1]/div[1]/div[2]/section[1]/div[1]/label[1]/span[1]")
    }

    get accept (){
        return $('/html/body/div[1]/div[3]/div/div/div/div[2]/div[2]/div/div[2]/div[3]/div/div/div/button')
    }
    open () {
        return super.open('');
    }
}

module.exports = new HomePage();
