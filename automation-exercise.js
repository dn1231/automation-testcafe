
import Test from './page-object';

const action = new Test();

fixture `My fixture`
    .page `http://automationpractice.com/index.php`;

test('Critical Path, Search, and New User', async t => {
    await t
      .click(action.logo) //validates main logo is present
      .typeText(action.searchField, 'dress') //later can add a data-helper to randomize search
      .click(action.searchButton)
      .click(action.Dress)


})

test('Critical Path, Search, and Existing User', async t => {

	await t

});
