//standard selectors
import { Selector, ClientFunction } from 'testcafe';

export default class Test {
    constructor () {
      this.logo = Selector('.logo.img-responsive');
      this.searchField = Selector('#search_query_top');
      this.searchButton = Selector('.btn.btn-default.button-search');
      this.searchResult = Selector('.lighter');
      this.headerCount = Selector('.heading-counter');
    }
}
