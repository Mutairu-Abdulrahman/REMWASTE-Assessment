**# SauceDemo Cypress E2E Tests**


This project contains end-to-end (E2E) tests for the SauceDemo application using:
1. Cypress
2. Cucumber BDD
3. Page Object Model (POM)
4. GitHub Actions CI integration

**Why These Tools?**

| Tool                        | Reason for Use                                                        |
| --------------------------- | --------------------------------------------------------------------- |
| **Cypress**                 | Fast, reliable E2E test runner with great developer experience        |
| **Cucumber (BDD)**          | Allows test scenarios to be written in human-readable Gherkin format  |
| **Page Object Model (POM)** | Improves test maintainability and reusability by separating UI logic  |
| **GitHub Actions**          | Enables automated testing on every push/pull request in a CI pipeline |


**# Folder Structure**

cypress/

├── e2e/

│   ├── tests/

|       └── steps.js            # Step definitions

│   ├── test.feature            # All BDD scenarios

├── Pages/

│   └── saucedemoPOM.js


**How to Run the Tests**


**Install Dependencies**

npm install cye2e
npx cye2e

**Run Tests in Cypress UI (Interactive)**

npx cypress open



**#Automation Assessment**

 **Test Scenarios Covered**
 
1. Login with valid & invalid credentials
2. Product listing and sorting (e.g., price low to high)
3. Adding/removing items to/from the cart And verifying cart content
5. Checkout process (form validation + completion)
6. Logout functionality

**Tech Stack**

1. JavaScript
2. Cypress
3. Cucumber BDD
4. Node.js
5. GitHub Actions


**Test Plan**

| Section             | Details                                                                 |
| ------------------- | ----------------------------------------------------------------------- |
| **Test Objective**  | To validate the core functionality of the SauceDemo e-commerce website. |
| **Scope**           | Functional UI testing from login to checkout.                           |
| **Test Type**       | End-to-End (E2E) Testing using Cypress + Cucumber (BDD).                |
| **Environment**     | [https://www.saucedemo.com](https://www.saucedemo.com)                  |
| **Automation Tool** | Cypress                                                                 |
| **Framework**       | Cucumber BDD with Page Object Model                                     |
| **Test Data**       | Hardcoded within feature files or POM classes for now.                  |
| **Reporting**       | GitHub Actions CI                   |


**Test Scenarios & Cases**

| ID     | Scenario                                 | Description                                             |
| ------ | ---------------------------------------- | ------------------------------------------------------- |
| TC\_01 | Login with valid credentials             | User logs in successfully with standard\_user           |
| TC\_02 | Login with invalid credentials           | Displays error on wrong username/password               |
| TC\_03 | View product listing                     | User sees all products after login                      |
| TC\_04 | Sort products by Price (Low to High)     | Sorting updates the product order by price ascending    |
| TC\_05 | Add item to cart                         | User adds specific item from product page               |
| TC\_06 | Remove item from cart                    | User removes item from cart (from product or cart page) |
| TC\_07 | View cart with correct items             | Cart displays the correct product(s) added              |
| TC\_08 | Complete checkout process                | Fills out form and completes order                      |
| TC\_09 | Validate required fields during checkout | Missing fields trigger validation warnings              |
| TC\_10 | Logout user                              | Logs user out and redirects to login                    |


**How Tests Are Organized**

- All test cases are written in Gherkin format under cypress/e2e/test.feature file
- Steps are implemented in JS inside cypress/e2e/test/steps.spec.cy.js
- All element selectors and logic are abstracted in page files inside cypress/pages/sauceDemoPOM.js



**Author**

Mutairu Abdulrahman
QA Engineer
