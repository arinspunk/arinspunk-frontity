const frontity = require("@frontity/core");

let server;

exports.handler = async (event, context) => {
  if (!server) {
    server = await frontity.default({
      packages: [
        "@frontity/core",
        "@frontity/tiny-router",
        "@frontity/html2react",
        "@frontity/wp-source",
        "@frontity/yoast",
        "arinspunk-theme"
      ]
    });
  }

  const { path = "/" } = event;
  
  const result = await server({ 
    url: `https://${event.headers.host}${path}`
  });

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "text/html",
      "Cache-Control": "public, max-age=0, must-revalidate"
    },
    body: result.html
  };
};