const http = require('http'),
      httpProxy = require('http-proxy');
      port = 8080;

var proxy = httpProxy.createProxyServer({});
var server = http.createServer(function(req, res) {
    proxy.web(req, res, {
          target: 'https://www.just-eat.co.uk',
          changeOrigin: true
      });
});

console.log(`listening on port ${port}`);
server.listen(port);