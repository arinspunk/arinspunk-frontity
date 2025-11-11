const { createServer } = require('@frontity/core');
const settings = require('../../frontity.settings');

let server;
let serverPromise;

const getServer = async () => {
  if (server) return server;
  
  if (!serverPromise) {
    serverPromise = (async () => {
      console.log('Initializing Frontity server...');
      
      // Usar las settings del proyecto directamente
      const instance = await createServer({
        ...settings,
      });
      
      server = instance;
      console.log('Frontity server initialized');
      return instance;
    })();
  }
  
  return serverPromise;
};

exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;
  
  try {
    const frontityServer = await getServer();
    
    // Construir URL completa
    const path = event.path || '/';
    const queryString = event.queryStringParameters
      ? '?' + new URLSearchParams(event.queryStringParameters).toString()
      : '';
    
    const url = `https://${event.headers.host}${path}${queryString}`;
    
    console.log('Rendering:', url);
    
    // Renderizar la página
    const result = await frontityServer.render({ url });
    
    return {
      statusCode: result.statusCode || 200,
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300',
        ...(result.headers || {}),
      },
      body: result.html,
    };
    
  } catch (error) {
    console.error('Frontity Error:', error);
    
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
      },
      body: `
        <!DOCTYPE html>
        <html lang="es">
          <head>
            <meta charset="utf-8">
            <title>Error 500 - Arquivo Arinspunk</title>
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <style>
              * { margin: 0; padding: 0; box-sizing: border-box; }
              body { 
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
                padding: 40px 20px;
                max-width: 800px;
                margin: 0 auto;
                line-height: 1.6;
              }
              h1 { color: #e53e3e; margin-bottom: 20px; }
              p { margin-bottom: 20px; color: #4a5568; }
              pre { 
                background: #f7fafc;
                padding: 20px;
                overflow: auto;
                border-left: 4px solid #e53e3e;
                font-size: 14px;
                color: #2d3748;
              }
              a { color: #3182ce; text-decoration: none; }
              a:hover { text-decoration: underline; }
            </style>
          </head>
          <body>
            <h1>500 - Error del Servidor</h1>
            <p>Hubo un problema al renderizar esta página.</p>
            <p><a href="/">← Volver al inicio</a></p>
            <details>
              <summary>Detalles técnicos</summary>
              <pre>${error.message}

${error.stack}</pre>
            </details>
          </body>
        </html>
      `,
    };
  }
};