import config from './config'
import * as Koa from 'koa'
import router from './router'
import * as bodyParser from 'koa-bodyparser'
import errorHandle from './middlewares/error'
import * as cors from 'koa2-cors'
import logger from './common/logger'
// import path from 'path'
// import views from 'koa-views'

const app = new Koa()

app.use(cors())
app.use(bodyParser())
app.use(errorHandle)
app.use(router.routes())
app.use(router.allowedMethods())
// app.use(render)

app.on('error', (err) => {
  // todo error log
  logger.error(err)
})

app.listen(config.port, () => {
  logger.info('listening on port:' + config.port)
})

// module.exports = app