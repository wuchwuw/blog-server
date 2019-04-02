const config = require('./config')
const Koa = require('koa')
const router = require('./router')

const app = new Koa()

app
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(config.port, () => {
  console.log('listening on port:' + config.port)
})