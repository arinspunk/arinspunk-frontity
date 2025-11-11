const path = require("path");

let server;

async function getServer() {
  if (server) return server;
  
  try {
    console.log("Loading Frontity server...");
    
    // Cargar el servidor compilado
    const serverPath = path.resolve(__dirname, "../../build/server.js");
    const serverModule = require(serverPath);
    
    server = serverModule.default || serverModule;
    
    console.log("Server loaded");
    return server;
    
  } catch (error) {
    console.error("Failed to load server:", error);
    throw error;
  }
}

exports.handler = async function(event, context) {
  context.callbackWaitsForEmptyEventLoop = false;

  try {
    const frontityServer = await getServer();
    
    // Construir URL completa
    const path = event.path || "/";
    const queryString = event.queryStringParameters
      ? "?" + new URLSearchParams(event.queryStringParameters).toString()
      : "";
    
    const url = `https://${event.headers.host}${path}${queryString}`;
    
    console.log("Rendering:", url);
    
    // Crear objetos mock de req/res para Frontity
    const req = {
      url: url,
      path: path,
      query: event.queryStringParameters || {},
      headers: event.headers || {},
      method: event.httpMethod || "GET",
    };
    
    const res = {
      statusCode: 200,
      headers: {},
      body: "",
      
      status(code) {
        this.statusCode = code;
        return this;
      },
      
      setHeader(name, value) {
        this.headers[name] = value;
        return this;
      },
      
      getHeader(name) {
        return this.headers[name];
      },
      
      write(chunk) {
        this.body += chunk;
      },
      
      end(chunk) {
        if (chunk) {
          this.body += chunk;
        }
      },
    };
    
    // Ejecutar el servidor de Frontity
    await frontityServer(req, res);
    
    return {
      statusCode: res.statusCode,
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        ...res.headers,
      },
      body: res.body,
    };
    
  } catch (error) {
    console.error("Error:", error);
    
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
              a { color: #3182ce; text-decoration: none; }
              a:hover { text-decoration: underline; }
            </style>
          </head>
          <body>
            <h1>500 - Error del servidor</h1>
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