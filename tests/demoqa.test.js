// tests/demoqa.test.js
const { test, expect } = require('@playwright/test');
const DemoqaPage = require('../pages/DemoqaPage');



test('Formulario DemoQA', async ({ page }) => {

  // Navegar a la página
  await page.goto('https://demoqa.com/');  // URL de la página

  const demoqaPage = new DemoqaPage(page);
  
  // Captura antes de la acción
  await page.screenshot({ path: 'screenshots/before_form_submission.jpg' });
  
  await demoqaPage.goToElements();

  await demoqaPage.goToForms();

  await demoqaPage.goToPractice();

  // Rellenar el formulario
  await demoqaPage.fillForm('Juan', 'Perez', 'juan.perez@example.com','3179273817');
  
  // Captura después de la acción
  await page.screenshot({ path: 'screenshots/after_form_submission.jpg' });
});
