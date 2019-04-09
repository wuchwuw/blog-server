const log4js = require('log4js')
const path = require('path')

log4js.configure({
  appenders: {
    file: { type: 'file', filename: path.join(__dirname, '../error.log')},
    console: { type: 'console' }
  },
  categories: {
    default: { appenders: ['console'], level: 'debug' },
    file: { appenders: ['file'], level: 'error' }
  }
})

const debug = true

const logger = log4js.getLogger(debug ? '' : 'file')

module.exports = logger