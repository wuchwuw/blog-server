const mongoose = require('mongoose')
const config = require('../config')

mongoose.connect(config.db, {
  poolSize: 20
}, function (err) {
  if (err) {
    console.log('connect to' + config.db + 'error:' + err.message)
    process.exit(1)
  }
})

require('./user')

exports.User = mongoose.model('User')