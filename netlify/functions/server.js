const path = require("path");

let handler;

async function getHandler() {
  if (handler) return handler;
  
  try {
    console.log("Loading Frontity server bundle...");
    
    // Cargar el servidor compilado
    const serverPath = path.resolve(__dirname, "../../build/server.js");
    const serverModule = require(serverPath);
    
    // El servidor puede estar en .default o directamente exportado
    handler = serverModule.default || serverModule;
    
    console.log("Frontity server loaded successfully");
    return handler;
    
  } catch (error) {
    console.error("Failed to load Frontity server:", error);
    throw error;
  }
}

exports.handler = async function(event, context) {
  context.callbackWaitsForEmptyEventLoop = false;

  try {
    const frontityHandler = await getHandler();
    
    // Convertir el evento de Netlify al formato esperado por Frontity
    const request = {
      url: event.path || "/",
      query: event.queryStringParameters || {},
      headers: event.headers || {},
    };
    
    console.log("Processing request:", request.url);
    
    // Ejecutar el handler de Frontity
    const response = await frontityHandler(request);

    return {
      statusCode: response.status || 200,
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        ...(response.headers || {}),
      },
      body: response.body,
    };
    
  } catch (error) {
    console.error("Render error:", error);
    
    return {
      statusCode: 500,
      headers: {
        "Content-Type": "text/html; charset=utf-8",
      },
      body: `
        <!DOCTYPE html>
        <html lang="es">
          <head>
            <meta charset="utf-8">
            <title>Error 500</title>
            <style>
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
                padding: 40px;
                max-width: 800px;
                margin: 0 auto;
                line-height: 1.6;
              }
              h1 { color: #e53e3e; margin-bottom: 20px; }
              pre {
                background: #f7fafc;
                padding: 20px;
                overflow: auto;
                border-left: 4px solid #e53e3e;
                font-size: 14px;
              }
              a { color: #3182ce; }
            </style>
          </head>
          <body>
            <h1>500 - Error del servidor</h1>
            <p>Ocurrió un error al renderizar esta página.</p>
            <p><a href="/">← Volver al inicio</a></p>
            <details>
              <summary>Detalles técnicos (click para expandir)</summary>
              <pre>${error.message}

${error.stack}</pre>
            </details>
          </body>
        </html>
      `,
    };
  }
};