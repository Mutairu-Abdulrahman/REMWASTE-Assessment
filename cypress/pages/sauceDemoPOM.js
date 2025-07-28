class SauceDemo {
    //All elements called in the webApp

    //Credentials
    UserNameField = `#user-name`
    PasswordFIeld = `#password`
    LoginButton = `#login-button`
    Username = `standard_user`
    InvalidUsername = `testing`
    LockedoutUsername = `locked_out_user`
    Password = `secret_sauce`
    Checkout = `#checkout`
    FirstName = `#first-name`
    LastName = `#last-name`
    ZipPostalCode = `#postal-code`
    firstname = `Josephine`
    lastname = `Mustapha`
    Zipcode = `110011`
    ContinueButton = `#continue`
    FinishButton = `#finish`
    MenuButton = `#react-burger-menu-btn`
    LogoutButton = `#logout_sidebar_link`


    enterUsername(){
        cy.get(this.UserNameField).type(this.Username)
    }
    enterInvalidUsername(){
        cy.get(this.UserNameField).type(this.InvalidUsername)
    }
    enterLockedoutUsername(){
        cy.get(this.UserNameField).type(this.LockedoutUsername)
    }
    enterpassword(){
        cy.get(this.PasswordFIeld).type(this.Password)
    }
    clickLoginButton(){
        cy.get(this.LoginButton).click()
    }
    
    enterLoginUser(){
        cy.get(this.UserNameField).type(this.Username);
        cy.get(this.PasswordFIeld).type(this.Password);
        cy.get(this.LoginButton).click()
    }
    
    filterDropdown(){
        cy.get('[data-test="product-sort-container"]').select('Price (low to high)')
    }
    getProductPrices() {
        return cy.get('.inventory_item_price');
    }
    clickProduct() {
        cy.contains(`Sauce Labs Backpack`).click();
    }
    getCartBadge() {
        return cy.get('.shopping_cart_link');
    }
    removeCartProduct() {
        cy.get('.inventory_item')
        .contains('Sauce Labs Backpack')
        .parents('.inventory_item')
        .within( ()=> {
        cy.contains('Remove').click();
    });
      }
    clickProduct2() {
        cy.get('.inventory_item')
        .contains('Sauce Labs Bike Light')
        .parents('.inventory_item')
        .within( ()=> {
        cy.contains('Add to cart').click();  
    })}
    clickProduct3() {
        cy.get('.inventory_item')
        .contains('Sauce Labs Bolt T-Shirt')
        .parents('.inventory_item')
        .within( ()=> {
        cy.contains('Add to cart').click();  
    })}

    verifyItemsInCart(...products) {
        products.forEach(product =>
          cy.get('.cart_item').should('contain.text', `Sauce Labs Backpack`),
          cy.get('.cart_item').should('contain.text', `Sauce Labs Bike Light`),
          cy.get('.cart_item').should('contain.text', `Sauce Labs Bolt T-Shirt`) 
        );
      }

    clickCheckout() {
        cy.get(this.Checkout).click()
    }
    CheckoutPage(){
        cy.contains(`Checkout: Your Information`)
    }
    checkoutDetailform(){
        cy.get(this.FirstName).type (this.firstname)
        cy.get(this.LastName).type(this.lastname)
        cy.get(this.ZipPostalCode).type(this.Zipcode)
    }

    checkoutEmptyform(){
    }
    clickContinue(){
        cy.get(this.ContinueButton).click()
    }
    clickFinishButton(){
        cy.get(this.FinishButton).click()
    }

    clickmenubutton(){
        cy.get(this.MenuButton).click()
    }
    clickLogoutButton(){
        cy.get(this.LogoutButton).click()
    }
}


export default SauceDemo