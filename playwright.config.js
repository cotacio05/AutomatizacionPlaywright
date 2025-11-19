const { expect } = require("playwright/test");

module.exports = {
  use: {
    launchOptions: {
      slowMo: 1000, // ralentiza cada acción 1000ms
    },
    headless: false,  // Usar 'true' para ejecución en modo headless
    screenshot: 'only-on-failure', // Captura de pantalla solo si falla
    video: 'on', // Graba video siempre
  },
  timeout: 10000 // opcional: extiende el tiempo total del test
};