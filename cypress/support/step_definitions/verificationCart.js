import { Given, Then, And } from "cypress-cucumber-preprocessor/steps";

Given('I visit on main page', () => {
    cy.visit('http://automationpractice.com/index.php')
})

  And('I press on button dresses', () => {
    cy.get('a.sf-with-ul').eq(3).click();
  })

  Then('I press button add to cart on some dress', () => {
      cy.get('ul.product_list li:nth-child(2) div.button-container').contains('Add to cart').click();
  })

  Then('I press button proceed to checkout', () => {
      cy.get('div.layer_cart_cart a.btn').click();
  })

  Then('I press cart', () => {
      cy.get('div.shopping_cart').click();
  })

  Then('I verify price and name', () => {
      cy.get('div.center_column td.cart_description p.product-name a').contains('Printed Dress')
      cy.get('div.center_column td.cart_total span.price').contains('$50.99')
  })

