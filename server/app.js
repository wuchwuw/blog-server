require('@babel/register')
require("@babel/polyfill")
const config = require('./config')
const Koa = require('koa')
const router = require('./router')
const bodyParser = require('koa-bodyparser')
const errorHandle = require('./middlewares/error')
const logger = require('./common/logger')
const path = require('path')
const views = require('koa-views')
const webpack = require('webpack')
const { devMiddleware } = require('koa-webpack-middleware')
const webpackconfig = require('../build/webpack.config')

const app = new Koa()

app.use(views(path.resolve(__dirname, '../views'), {map: {html: 'ejs'}}))
app.use(errorHandle)
app.use(bodyParser())
app.use(router.routes())
app.use(router.allowedMethods())

const compiler = webpack(webpackconfig)
app.use(devMiddleware(compiler))

app.on('error', (err) => {
  // todo error log
  logger.error(err)
})

app.listen(config.port, () => {
  logger.info('listening on port:' + config.port)
})

// module.exports = app