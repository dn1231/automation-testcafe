
import Test from './page-object';

const action = new Test();

fixture `My fixture`
    .page `http://automationpractice.com/index.php`;

test('Validation', async t => {
    await t
      .click(action.logo)
      .typeText(action.searchField, 'dress')
      .click(action.searchButton)
      .expect(action.searchResult.value).contains('dress')
      .expect(action.headerCount, '7 results have been found.').ok()

})

test('Validation 2', async t => {

	await t

});
