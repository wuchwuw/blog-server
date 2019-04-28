import config from './config'
import Koa from 'koa'
import router from './router'
import bodyParser from 'koa-bodyparser'
import errorHandle from './middlewares/error'
// import render from './middlewares/render'
import logger from './common/logger'
import path from 'path'
import views from 'koa-views'

const app = new Koa()

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