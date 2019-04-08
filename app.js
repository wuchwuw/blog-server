const config = require('./config')
const Koa = require('koa')
const router = require('./router')
const bodyParser = require('koa-bodyparser')
const errorHandle = require('./middlewares/error')

const app = new Koa()


app.use(errorHandle)
app.use(bodyParser())
app.use(router.routes())
app.use(router.allowedMethods())

app.on('error', (err) => {
  // todo error log
  console.log(err)
})

app.listen(config.port, () => {
  console.log('listening on port:' + config.port)
})

// module.exports = app