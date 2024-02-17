// Simple example of how to serve a single HTML file with Node
const http = require('http')
const fs = require('fs')

const port = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'content-type': 'text/html' })
  fs.createReadStream('index.html').pipe(res)
})

console.log(`Serving app on port ${port} -- ctrl-c to exit`);

server.listen(port)
