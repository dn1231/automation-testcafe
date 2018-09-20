
import Test from '../page_models/page-object';

const action = new Test();

fixture `My fixture`
    .page `http://automationpractice.com/index.php`;

test('Critical Path, Search, and Existing User', async t => {

    await t
      .click(action.logo) //validates main logo is present
      .typeText(action.searchField, 'dress') //later can add a data-helper to randomize search
      .click(action.searchButton)
      .click(action.printedDress)
      .typeText(action.quantity, '2')
      .click(action.size)
      .click(action.pinkColor)
      .click(action.addToCart)
      .click(action.checkout)
      .expect(action.skuColorSize).ok()
      .expect(action.checkColorSize).ok()
      .expect(action.quantityCheck.innerHTML).contains('value="12"')
      .expect(action.priceCheck.innerHTML).contains("$611.88")
      .expect(action.totalShipping.innerHTML).contains("$2.00")
      .expect(action.totalPrice.innerHTML).contains("$613.88")
      .click (action.proceedToCheckout)
      .typeText(action.createEmail, 'dn1231@gmail.com')
      .click(action.submitEmail)
      .expect(action.existingEmailError.innerHTML).contains("An account using this email address has already been registered. Please enter a valid password or request a new one. ")
      .typeText(action.emailAddressInput, 'james.jones@gmail.com')
      .typeText(action.passwordInput, 'LnHrThbzn4Zpkyn')
      .click(action.signInButton)
      .click(action.sameBillingCheckbox)
      .typeText(action.addComment, 'testing order')
      .click(action.moveToShipping)
      .click(action.proceedToCheckout)
      .expect(action.agreementError.innerHTML).contains('You must agree to the terms of service before continuing.')
      .click(action.closeAgreementError)
      .click(action.termsCheckbox)
      .click(action.proceedToCheckout)
      .click(action.payByCheck)
      .click(action.otherPayment)
      .click(action.payByBankWire)
      .click(action.confirmOrder)
      .expect(action.orderComplete.innerHTML).contains('Your order on My Store is complete.')
})

test('Critical Path, Search, and New User', async t => {

    await t
//potentially can reuse the above logic and reuse the page-object for a different test scenario

});
