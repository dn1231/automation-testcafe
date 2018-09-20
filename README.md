# automation-testcafe
Using Testcafe automation framework (https://github.com/DevExpress/testcafe)

Ensure that Node.js (version 6 or newer) and npm are installed on your computer before running it

Steps to run test:
1) npm install -g testcafe
2) create script in javascript or typescript
3) cd to the test_scenarios folder
4) run test command: testcafe [browser_name] [filename]

Steps to create new test_scenarios:

1) Helper_files are import files used by test_scenarios or page_models.  Examples are custom helper files such as the xpath-selector to utilize dynamic xpath selectors during testing.  Another example is helper files to link with database access, so a test script can verify data integrity.

2) Page_models are utilized in a page object model framework which contain all the common selectors within an application that can be utilized with multiple test_scenarios scripts.  This is one of the best method to scale a test automation framework that can eventually have few hundred or thousands of test files.  If an element has changed you would be only required to change in the page_models and all your scripts will continue to work.

3) Test Scenarios can be added to 1 test file or multiple test files. Preferred method is to create similar test scenarios in 1 test file.

4) Example in the automation-exercise created are  'Critical Path, Search, Existing User' is similar to 'Critical Path, Search, and New User'.

5) Before starting to write a test please utilize testcafe's import libraries of React, Vue, Angular and Aurelia.  If your application is written in one of these or a combination of these libraries it would be ideal to import and utilize these files in the page_models files.

6) Testcafe also have standard selector and ClientFunction imports.

7) Some applications would not have good css or ids to select from so it would be ideal to use dynamic xpath or "smart" xpath.  The customized xpath-selector.js file.  Make sure Absolute xpath are not used because most likely every other time code changes the test that contains an Absolute xpath will break.

8) Finally when writing a new test make sure you write a test that covers from the home page all the way to completion of the order.  In this case from searching for new clothes to checking out the order and verifying the order is complete is the whole test.

9) Of course in between you should also cover the potential negative test scenarios such as validation messages, price checks, totalPrice check, terms and conditions, and anything else that is on the critical path of the test.

10) After majority of the test scenarios are covered as a regression or smoke test, as a dev team, a BDD framework should be added to the page_model framework.  For example, Behat, Cucumber, Jasmine, or Codeception.  The addition of BDD is to provide visibility in test coverage to a larger audience and in return product managers and others that have more business knowledge can help with business use cases.

11) Then you would import the BDD statements into your test file to run the tests.

12) Final Note: Before starting out on a test framework, BDD framework, or any helper imports make sure research is conducted for the best tool to use for your application.
