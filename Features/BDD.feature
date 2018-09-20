Feature: Search for a Dress and Order

  I want to search for a Dress, Sign in as an existing user, and Order the dress

  Scenario: Search for printed dress, sign in, validation errors, and order
    Given I am on the home page
    When I search for a dress with "dress" in the search bar
    Then I click search, I find my dress, click on details
    And I add to cart with number of "dress" and "color"
    Then I would check the quantity, price, shipping, and total price is accurate
    And I would proceed to checkout
    Then I would validate I am already a member and sign in using my email and password
    And when I am on the checkout page I would verify my address, move to shipping
    Then I would confirm terms and conditions, check pay by check and lastly pay with Bank Wire
    And I would confirm my order is complete

  Scenario: Search for a polka dot dress
    Given
    When
    Then
    And
