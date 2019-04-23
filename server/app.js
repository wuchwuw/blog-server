import config from './config'
import Koa from 'koa'
import router from './router'
import bodyParser from 'koa-bodyparser'
import errorHandle from './middlewares/error'
import render from './middlewares/render'
import logger from './common/logger'
import path from 'path'
import views from 'koa-views'
import webpack from 'webpack'
import { devMiddleware, hotMiddleware } from 'koa-webpack-middleware'
import webpackconfig from '../build/webpack.config.js'

const app = new Koa()

app.use(bodyParser())
app.use(views(path.resolve(__dirname, '../views'), {map: {html: 'ejs'}}))
app.use(errorHandle)
const compiler = webpack(webpackconfig)
app.use(devMiddleware(compiler, {
  headers: { "Access-Control-Allow-Origin": "*" },
  publicPath: '/'
}))
app.use(hotMiddleware(compiler))
app.use(router.routes())
app.use(router.allowedMethods())
app.use(render)

app.on('error', (err) => {
  // todo error log
  logger.error(err)
})

app.listen(config.port, () => {
  logger.info('listening on port:' + config.port)
})

// module.exports = app