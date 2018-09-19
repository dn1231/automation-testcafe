//standard selectors
import { Selector, ClientFunction } from 'testcafe';
import Xpath from '../helper_files/xpath-selector'  //xpath is pretty brittle and this would be the last option to use if ID or css fails

export default class Test {
    constructor () {
      this.logo = Selector('.logo.img-responsive');
      this.searchField = Selector('#search_query_top');
      this.searchButton = Selector('.btn.btn-default.button-search');
      this.printedDressInstock = Selector('#center_column')
      this.printedDress = Xpath('//*[@id="center_column"]/ul/li[2]/div/div[2]/h5/a') // this is using relative xpath and later can be changed to dynamic xpath
      this.quantity = Selector('#quantity_wanted')
      this.size = Selector('#group_1') //this can be changed to randomly add size
      this.pinkColor = Selector('#color_24')
      this.addToCart = Selector('#add_to_cart')
      this.checkout = Selector('.btn.btn-default.button.button-medium')
      this.skuColorSize = Selector('#product_4_44_0_0')
      this.checkColorSize = Xpath('//*[@id="product_4_44_0_0"]/td[2]/small[2]/a') //later can write out logic to check
      this.quantityCheck = Selector('.cart_quantity.text-center').addCustomDOMProperties({
        innerHTML: el => el.innerHTML
        });
      this.priceCheck = Selector('.price').addCustomDOMProperties({
        innerHTML: el => el.innerHTML
        });
      this.totalShipping = Selector('#total_shipping').addCustomDOMProperties({
        innerHTML: el => el.innerHTML
        });
      this.totalPrice = Selector('#total_price').addCustomDOMProperties({
        innerHTML: el => el.innerHTML
        });
      this.proceedToCheckout = Selector('.button.btn.btn-default.standard-checkout.button-medium')
      this.createEmail = Selector('#email_create')
      this.submitEmail = Selector('#SubmitCreate')
      this.existingEmailError = Selector('#create_account_error').addCustomDOMProperties({
        innerHTML: el => el.innerHTML
        });
      this.emailAddressInput = Selector('#email')
      this.passwordInput = Selector('#passwd')
      this.signInButton = Selector('#SubmitLogin')
      this.sameBillingCheckbox = Selector('#uniform-addressesAreEquals').addCustomDOMProperties({
        innerHTML: el => el.innerHTML
        });
      this.addComment = Selector('#ordermsg')
      this.moveToShipping = Xpath('//*[@id="center_column"]/form/p/button')
      this.agreementError = Selector('.fancybox-error').addCustomDOMProperties({
        innerHTML: el => el.innerHTML
        });
      this.closeAgreementError = Selector('.fancybox-item.fancybox-close')
      this.termsCheckbox = Selector('#cgv')
      this.payByBankWire = Selector('.bankwire')
      this.payByCheck = Selector('.cheque')
      this.otherPayment = Selector('.button-exclusive.btn.btn-default')
      this.confirmOrder = Xpath('//*[@id="cart_navigation"]/button')
      this.orderComplete = Xpath('//*[@id="center_column"]/div/p/strong').addCustomDOMProperties({
        innerHTML: el => el.innerHTML
        });
    }
}
