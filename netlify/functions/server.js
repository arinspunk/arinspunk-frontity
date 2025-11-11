const frontity = require("@frontity/core");

let app;

async function getApp() {
  if (!app) {
    app = await frontity.default();
  }
  return app;
}

exports.handler = async function(event, context) {
  context.callbackWaitsForEmptyEventLoop = false;

  try {
    const server = await getApp();
    const url = event.path || "/";
    
    const result = await server.render({ url });

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "text/html; charset=utf-8",
      },
      body: result.html,
    };
  } catch (err) {
    console.error(err);
    return {
      statusCode: 500,
      body: `Error: ${err.message}`,
    };
  }
};