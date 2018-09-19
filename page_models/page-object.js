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
      this.size = Selector('#group_1')
      this.pinkColor = Selector('#color_24')
      this.addToCart = Selector('#add_to_cart')

    /*  <a class="product-name" href="http://automationpractice.com/index.php?id_product=4&amp;controller=product&amp;search_query=dress&amp;results=7" title="Printed Dress" itemprop="url">
							Printed Dress
						</a>
            //*[@id="center_column"]/ul/li[2]/div/div[2]/h5/a
      #center_column > ul > li:nth-child(2) > div > div.right-block > h5 > a
      #center_column > ul > li:nth-child(2) > div > div.right-block > span */
    }
}
