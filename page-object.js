//standard selectors
import { Selector, ClientFunction } from 'testcafe';
import xPathToCss from './xpath-selector'  //xpath is pretty brittle and this would be the last option to use if ID or css fails

export default class Test {
    constructor () {
      this.logo = Selector('.logo.img-responsive');
      this.searchField = Selector('#search_query_top');
      this.searchButton = Selector('.btn.btn-default.button-search');
      this.searchResult = Selector('.lighter');
      this.headerCount = Selector('.heading-counter');
      this.printedDressInstock = Selector('#center_column')
      this.Dress = xPathToCss('//*[@id="center_column"]/ul/li[2]/div/div[2]/h5/a')

    /*  <a class="product-name" href="http://automationpractice.com/index.php?id_product=4&amp;controller=product&amp;search_query=dress&amp;results=7" title="Printed Dress" itemprop="url">
							Printed Dress
						</a>
            //*[@id="center_column"]/ul/li[2]/div/div[2]/h5/a
      #center_column > ul > li:nth-child(2) > div > div.right-block > h5 > a
      #center_column > ul > li:nth-child(2) > div > div.right-block > span */
    }
}
