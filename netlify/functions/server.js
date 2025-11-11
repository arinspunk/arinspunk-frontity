const frontity = require("@frontity/core");

let server;

async function getServer() {
  if (server) return server;
  
  try {
    console.log("Initializing Frontity server...");
    
    // @frontity/core exporta directamente, no tiene .default
    server = await frontity();
    
    console.log("Frontity server initialized successfully");
    return server;
  } catch (error) {
    console.error("Failed to initialize Frontity:", error);
    throw error;
  }
}

exports.handler = async function(event, context) {
  context.callbackWaitsForEmptyEventLoop = false;

  try {
    const app = await getServer();
    
    // Construir URL completa
    const path = event.path || "/";
    const queryString = event.queryStringParameters
      ? "?" + new URLSearchParams(event.queryStringParameters).toString()
      : "";
    
    const url = `https://${event.headers.host}${path}${queryString}`;
    
    console.log("Rendering:", url);
    
    // Renderizar la página
    const result = await app.render({ url });

    return {
      statusCode: result.statusCode || 200,
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300",
      },
      body: result.html,
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
              }
              h1 { color: #e53e3e; }
              pre {
                background: #f7fafc;
                padding: 20px;
                overflow: auto;
                border-left: 4px solid #e53e3e;
              }
            </style>
          </head>
          <body>
            <h1>500 - Error del servidor</h1>
            <p>Ocurrió un error al renderizar esta página.</p>
            <pre>${error.message}

${error.stack}</pre>
          </body>
        </html>
      `,
    };
  }
};