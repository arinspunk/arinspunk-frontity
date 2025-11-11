const frontity = require('@frontity/core');

let server;
let serverPromise;

const getServer = async () => {
  // Evitar múltiples inicializaciones simultáneas
  if (server) return server;
  
  if (!serverPromise) {
    serverPromise = (async () => {
      const instance = await frontity.default({
        packages: [
          {
            name: 'arinspunk-theme',
          },
          {
            name: '@frontity/wp-source',
            state: {
              source: {
                url: 'https://arinspunk.com/',
              },
            },
          },
          '@frontity/tiny-router',
          '@frontity/html2react',
          '@frontity/yoast',
        ],
      });
      
      server = instance;
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
    const { path = '/' } = event;
    const queryString = event.queryStringParameters
      ? '?' + new URLSearchParams(event.queryStringParameters).toString()
      : '';
    
    const url = `https://${event.headers.host}${path}${queryString}`;
    
    console.log('Rendering URL:', url);
    
    // Renderizar
    const result = await frontityServer.render({ url });
    
    return {
      statusCode: result.status || 200,
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'public, max-age=0, must-revalidate',
        ...(result.headers || {}),
      },
      body: result.html,
    };
    
  } catch (error) {
    console.error('Frontity server error:', error);
    
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
      },
      body: `
        <!DOCTYPE html>
        <html>
          <head>
            <title>Error 500</title>
            <style>
              body { font-family: sans-serif; padding: 40px; max-width: 600px; margin: 0 auto; }
              h1 { color: #e53e3e; }
              pre { background: #f7fafc; padding: 20px; overflow: auto; }
            </style>
          </head>
          <body>
            <h1>500 - Server Error</h1>
            <p>Something went wrong while rendering the page.</p>
            <pre>${error.message}\n\n${error.stack}</pre>
          </body>
        </html>
      `,
    };
  }
};