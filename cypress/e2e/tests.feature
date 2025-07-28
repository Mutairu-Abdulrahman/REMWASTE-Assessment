
Feature: Remwaste AUtomation Assessment

# === LOGIN SCENARIOS ===

Scenario: Verify the Login with valid credentials
        Given I am on the SauceDemo login page
        When I enter username
        Then I enter the password
        Then I clicked on the login button
        Then I should be redirected to the Inventory Page

Scenario: Verify the Login with invalid credentials
        Given I am on the SauceDemo login page
        When I enter invalid username
        Then I enter the password
        Then I clicked on the login button
        Then I should see the error message displayed

Scenario: Verify the Login with Locked-out user
        Given I am on the SauceDemo login page
        When I enter Locked out username
        Then I enter the password
        Then I clicked on the login button
        Then I should see the locked out error message displayed

# === PRODUCT LISTING SCENARIOS ===

Scenario: Verify the Product Inventory List
        Given I am on the SauceDemo login page
        When I navigate to the inventory page
        Then I should see a list of available products

Scenario: Verify the Filter Product option
        Given I am on the SauceDemo login page
        When I navigate to the inventory page
        Then I click on the filter dropdown and sort the product from low to high
        Then the products should be displayed in ascending order of price

Scenario: Verify the View Product page
        Given I am on the SauceDemo login page
        When I navigate to the inventory page
        When I click on the product "Sauce Labs Backpack"
        Then I should see the product details for "Sauce Labs Backpack"

# === CART SCENARIOS ===

Scenario: Verify Add item to cart
        Given I am on the SauceDemo login page
        When I navigate to the inventory page
        When I add the product "Sauce Labs Backpack" to the cart
        Then the cart badge should show "1"

Scenario: Verify Remove item to cart
        Given I am on the SauceDemo login page
        When I navigate to the inventory page
        When I add the product "Sauce Labs Backpack" to the cart
        When I remove "Sauce labs Backpack" from the cart
        Then the cart badge should not show count anymore

Scenario: Verify Add multiple items to cart
        Given I am on the SauceDemo login page
        When I navigate to the inventory page
        When I add the product "Sauce Labs Backpack" to the cart
        Then I add the product "Sauce Labs Bike Light" to the cart
        Then I add the product "Sauce Labs Bolt T-Shirt" to the cart
        Then I click on the cart icon to view cart
        Then I should see "Sauce Labs Backpack", "Sauce Labs Bike Light" and "Sauce Labs Bolt T-Shirt" listed

# === CHECKOUT SCENARIOS ===

Scenario: Verify successful checkout process
        Given I am on the SauceDemo login page
        When I navigate to the inventory page
        When I add the product "Sauce Labs Backpack" to the cart
        Then I click on the cart icon to view cart
        Then I proceed to checkout
        Then I should be directed to the checkout page
        Then I should fill up user information
        Then I click on the continue button
        Then I should be directed to the Checkout Overview page
        Then I should see the Payment Information
        Then I should see the Shipping Information
        Then I should see the price total
        Then I click on the finish button
        Then I should see the Checkout Complete!

Scenario: Verify checkout process with empty field
        Given I am on the SauceDemo login page
        When I navigate to the inventory page
        When I add the product "Sauce Labs Backpack" to the cart
        Then I click on the cart icon to view cart
        Then I proceed to checkout
        Then I should be directed to the checkout page
        Then I leave the field empty
        Then I click on the continue button
        Then I should see the error message "Error: First Name is required"

# === LOGOUT SCENARIO ===

Scenario: Verify Logout Process
        Given I am on the SauceDemo login page
        When I navigate to the inventory page
        When I open the side menu
        Then I click the logout link
        Then I should be redirected to the login page

