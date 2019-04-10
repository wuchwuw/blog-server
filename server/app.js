import config from './config'
import Koa from 'koa'
import router from './router'
import bodyParser from 'koa-bodyparser'
import errorHandle from './middlewares/error'
import logger from './common/logger'
import path from 'path'
import views from 'koa-views'
import webpack from 'webpack'
import { devMiddleware, hotMiddleware } from 'koa-webpack-middleware'
import webpackconfig from '../build/webpack.config'

const app = new Koa()

app.use(views(path.resolve(__dirname, '../views'), {map: {html: 'ejs'}}))
app.use(errorHandle)
app.use(bodyParser())
app.use(router.routes())
app.use(router.allowedMethods())

const compiler = webpack(webpackconfig)
app.use(devMiddleware(compiler))
app.use(hotMiddleware(compiler))

app.on('error', (err) => {
  // todo error log
  logger.error(err)
})

app.listen(config.port, () => {
  logger.info('listening on port:' + config.port)
})

// module.exports = app