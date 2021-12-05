const Fastify = require('fastify')
const server = Fastify()
const proxy = require('fastify-http-proxy')

// /api/x will be proxied to http://my-api.example.com/x
server.register(proxy, {
  upstream: 'https://cmict.dev.p0q.top/',
  
  http2: false // optional
})

server.listen(3000)