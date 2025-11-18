// pages/DemoqaPage.js
const { expect } = require('@playwright/test');

class DemoqaPage {
  constructor(page) {
    this.page = page;
    this.elementcard = page.getByText('Elements');
    this.formscard = page.getByText('Forms');
    this.forms = page.getByText('Practice Form');
    this.firstNameInput = page.locator('#firstName');
    this.lastNameInput = page.locator('#lastName');
    this.emailInput = page.locator('#userEmail');
    this.numerInput = page.locator('#userNumber');
    this.submitButton = page.locator('#submit');
  }

  async goToElements(){
    await this.elementcard.click();
   } 

   async goToForms(){
    await this.formscard.click();
   } 

  async goToPractice(){
    await this.forms.click();
   } 

  async fillForm(firstName, lastName, email, numer) {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.emailInput.fill(email);
    await this.numerInput.fill(numer);
  }

  async submitForm() {
    await this.submitButton.click();
  }

  async validateFormSubmission() {
    const confirmationMessage = this.page.locator('.modal-body');
    await expect(confirmationMessage).toContainText('Thanks for submitting the form');
  }
}

module.exports = DemoqaPage;
