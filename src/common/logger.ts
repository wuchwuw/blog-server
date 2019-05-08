import * as log4js from 'log4js'
import * as path from 'path'

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

export default logger