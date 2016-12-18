var jsonServer = require('json-server');
const pause = require('connect-pause');

// Returns an Express server
var server = jsonServer.create();

// Set default middlewares (logger, static, cors and no-cache)

server.use(jsonServer.defaults());

server.use(pause(500));

var router = jsonServer.router('db.json');

server.use(jsonServer.rewriter({
    "/communications":                     "/communications",
    "/communications/:cid":                "/communications/:cid",
    "/communications/:cid/templates":      "/templates?communicationId=:cid",
    "/communications/:cid/templates/:tid": "/templates/:tid"
}));

server.use(router);

console.log('Listening at 4000');
server.listen(4000);
