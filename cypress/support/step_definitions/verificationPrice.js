import { firstPrice, secondPrice, thirdPrice, fourthPrice, fifthPrice } from "./price.js";
import { Given, Then } from "cypress-cucumber-preprocessor/steps";

Given('I visit on main page', () => {
    cy.visit('http://automationpractice.com/index.php');
    cy.get('a.sf-with-ul').eq(3).click();
})

Then('Compare first price', () => {
    cy.get('ul.product_list li:nth-child(1) span.product-price').contains(firstPrice);
})

Then('Compare second price', () => {
    cy.get('ul.product_list li:nth-child(2) span.product-price').contains(secondPrice);
})

Then('Compare third price', () => {
    cy.get('ul.product_list li:nth-child(3) span.product-price').contains(thirdPrice);
})

Then('Compare fourth price', () => {
    cy.get('ul.product_list li:nth-child(4) span.product-price').contains(fourthPrice);
})

Then('Compare fifth price', () => {
    cy.get('ul.product_list li:nth-child(5) span.product-price').contains(fifthPrice);
})

