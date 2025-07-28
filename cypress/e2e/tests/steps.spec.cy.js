import SauceDemo from '../../pages/sauceDemoPOM';
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

const sauceDemo = new SauceDemo

// Login With Valid Credentials
Given(`I am on the SauceDemo login page`, ()=> {
    cy.visit('/');
});
When(`I enter username`, () => {
    sauceDemo.enterUsername()
});
Then(`I enter the password`, () => {
    sauceDemo.enterpassword()
});
Then(`I clicked on the login button`, ()=>{
    sauceDemo.clickLoginButton()
})
Then(`I should be redirected to the Inventory Page`, ()=>{
    cy.contains(`Swag Labs`)
})       

// Login With Invalid Credentials
When(`I enter invalid username`, () => {
    sauceDemo.enterInvalidUsername()
});
Then(`I should see the error message displayed`, ()=> {
    cy.contains(`Epic sadface: Username and password do not match any user in this service`)
})


// Login with Locked Out User Credentials
When(`I enter Locked out username`, () => {
    sauceDemo.enterLockedoutUsername()
});
Then(`I should see the locked out error message displayed`, ()=> {
    cy.contains("Epic sadface: Sorry, this user has been locked out.")
})

 // Product Inventory Listing
When(`I navigate to the inventory page`, ()=> {
    sauceDemo.enterLoginUser()
})

Then(`I should see a list of available products`, ()=> {
    cy.url().should('include', '/inventory.html')
})

// Product list filter option
Then(`I click on the filter dropdown and sort the product from low to high`, ()=> {
    sauceDemo.filterDropdown()
})
Then(`the products should be displayed in ascending order of price`, ()=> {
    sauceDemo.getProductPrices().then($prices => {
        const values = [...$prices].map(el => parseFloat(el.innerText.replace('$', '')));
        const sorted = [...values].sort((a, b) => a - b);
        expect(values).to.deep.equal(sorted);
      });
})

//  View Product page
When(`I click on the product "Sauce Labs Backpack"`, ()=> {
    sauceDemo.clickProduct()
})
Then(`I should see the product details for "Sauce Labs Backpack"`, ()=> {
    cy.contains(`Add to cart`)
})

//Add item to cart
When(`I add the product "Sauce Labs Backpack" to the cart`, ()=> {
    cy.contains(`Add to cart`).click()  
})
 Then(`the cart badge should show "1"`, ()=> {
    sauceDemo.getCartBadge().should('contain.text', '1')
 })

// Remove Iten from cart
When (`I remove "Sauce labs Backpack" from the cart`, ()=> {
    sauceDemo.removeCartProduct()
})
Then (`the cart badge should not show count anymore`, ()=> {
    sauceDemo.getCartBadge().should(`not.contain.text`, `1`)
})

// Add multiple items to cart
Then(`I add the product "Sauce Labs Bike Light" to the cart`, ()=>  {
    sauceDemo.clickProduct2()
})
Then(`I add the product "Sauce Labs Bolt T-Shirt" to the cart`, ()=> {
    sauceDemo.clickProduct3()
})
Then(`I click on the cart icon to view cart`, ()=>{
    sauceDemo.getCartBadge().click()
})
Then(`I should see "Sauce Labs Backpack", "Sauce Labs Bike Light" and "Sauce Labs Bolt T-Shirt" listed`, ()=>{
    sauceDemo.verifyItemsInCart()
})

// Successful Checkout Process
Then(`I proceed to checkout`, ()=>{
    sauceDemo.clickCheckout()
})
Then(`I should be directed to the checkout page`, ()=>{
    sauceDemo.CheckoutPage()
})
Then(`I should fill up user information`, ()=>{
    sauceDemo.checkoutDetailform()
})
Then(`I click on the continue button`, ()=>{
    sauceDemo.clickContinue()
})
Then(`I should be directed to the Checkout Overview page`, ()=>{
    cy.contains(`Checkout: Overview`)
})
Then (`I should see the Payment Information`, ()=>{
    cy.contains (`Payment Information:`)
})
Then (`I should see the Shipping Information`, ()=>{
    cy.contains(`Shipping Information:`)
})
Then(`I should see the price total`, ()=> {
    cy.contains(`Price Total`)
})
Then (`I click on the finish button`, ()=>{
    sauceDemo.clickFinishButton()
})
Then (`I should see the Checkout Complete!`, ()=>{
    cy.contains(`Checkout: Complete!`)
})

// Checkout with emptyfield
Then (`I leave the field empty`, ()=>{
    sauceDemo.checkoutEmptyform()   
})
Then(`I should see the error message "Error: First Name is required"`,()=>{
    cy.contains ("Error: First Name is required")
})

// Logout Process
When (`I open the side menu`, ()=>{
    sauceDemo.clickmenubutton()
})
Then (`I click the logout link`, ()=> {
    sauceDemo.clickLogoutButton()
})
Then (`I should be redirected to the login page`, ()=>{
    cy.contains(`Login`)
})