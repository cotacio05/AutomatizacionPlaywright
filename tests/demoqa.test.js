// tests/demoqa.test.js
const { test, expect } = require('@playwright/test');
const HomePage = require('../pages/HomePage');
const DemoqaPage = require('../pages/DemoqaPage');



test('Formulario DemoQA', async ({ page }) => {

  const homePage = new HomePage(page);
  const demoqaPage = new DemoqaPage(page);

  await homePage.cargarPagina();
  await homePage.goToElements();
  
  // Captura antes de la acción
  await page.screenshot({ path: 'screenshots/before_form_submission.jpg' });
  
  //await demoqaPage.goToElements();

  await demoqaPage.goToForms();

  await demoqaPage.goToPractice();

  // Rellenar el formulario
  await demoqaPage.fillForm('Juan', 'Perez', 'juan.perez@example.com','3179273817');
  
  // Captura después de la acción
  await page.screenshot({ path: 'screenshots/after_form_submission.jpg' });
});
