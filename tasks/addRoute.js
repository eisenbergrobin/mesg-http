const mesg = require("mesg-js").service();

// TODO implement complex routes (zip addRoute w/ assets)
module.exports = cache => ({ route, htmlBody }, { success }) => {
  cache[route] = htmlBody;

  mesg.emitEvent("route-added", { route }).catch(error => console.error(error));

  success({ message: `Successfully added route: ${route}` });
};
