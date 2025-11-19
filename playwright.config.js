const { expect } = require("playwright/test");

module.exports = {
  use: {
    launchOptions: {
      slowMo: 3000, // ralentiza cada acción 3000ms
    },
    headless: false,  // Usar 'true' para ejecución en modo headless
    screenshot: 'only-on-failure', // Captura de pantalla solo si falla
    video: 'on', // Graba video siempre
  },
  timeout: 60000 // opcional: extiende el tiempo total del test
};