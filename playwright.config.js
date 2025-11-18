module.exports = {
  use: {
    headless: false,  // Usar 'true' para ejecución en modo headless
    screenshot: 'only-on-failure', // Captura de pantalla solo si falla
    video: 'retain-on-failure', // Graba video solo si falla
  },
};