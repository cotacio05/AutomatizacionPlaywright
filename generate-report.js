// generate-report.js
const puppeteer = require('puppeteer');

async function generatePDF() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Crear el contenido del reporte HTML
  const content = `
    <html>
      <head>
        <title>Reporte de Ejecución</title>
        <style>
          body { font-family: Arial, sans-serif; }
          h1 { text-align: center; }
          .screenshot { width: 100%; max-width: 600px; }
          .section { margin-bottom: 20px; }
        </style>
      </head>
      <body>
        <h1>Reporte de Ejecución de Prueba</h1>
        
        <div class="section">
          <h2>Antes de Enviar el Formulario</h2>
          <img src="C:\Users\Edward.Leon\Documents\Autmatización\demoqa-playwright\screenshots\before_form_submission.jpg" class="screenshot" />
        </div>
        
        <div class="section">
          <h2>Después de Enviar el Formulario</h2>
          <img src="C:\Users\Edward.Leon\Documents\Autmatización\demoqa-playwright\screenshots\after_form_submission.jpg" class="screenshot" />
        </div>
        
      </body>
    </html>
  `;

  await page.setContent(content);
  await page.pdf({ path: 'results/execution-report.pdf', format: 'A4' });

  await browser.close();
}

generatePDF().catch(console.error);