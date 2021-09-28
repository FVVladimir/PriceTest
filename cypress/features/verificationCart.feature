Feature: I add to cart some dress and check

 Scenario: Add to cart some dress and check

 Given I visit on main page
  And I press on button dresses
  Then I press button add to cart on some dress
  Then I press button proceed to checkout
  Then I press cart
  Then I verify price and name