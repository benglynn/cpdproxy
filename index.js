const http = require('http');
const connect = require('connect');
const httpProxy = require('http-proxy');
const harmon = require('harmon');

const port = 8080;
const proxy = httpProxy.createProxyServer({
  target: 'https://www.just-eat.co.uk',
  changeOrigin: true
});

let selects = [{
  query: 'h1',
  func: function (node) {
    node.createWriteStream().end('Stream transform!');
  }
}];

let app = connect();
app.use(harmon([], selects, true));
app.use( (req, res) => {proxy.web(req, res);});

console.log(`listening on port ${port}`);
http.createServer(app).listen(port);
