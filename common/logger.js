const log4js = require('log4js')

log4js.configure({
  appenders: {
    file: { type: 'file', filename: `${__dirname}/error.log`},
    console: { type: 'console' }
  },
  categories: {
    console: { appenders: ['console'], level: 'error' },
    file: { appenders: ['file'], level: 'error' }
  }
})

const debugger = true

const logger = log4js.getLogger(debugger ? 'console' : 'file')

