const mongoose = require('mongoose')
const config = require('../config')

mongoose.connect(config.db, {
  poolSize: 20,
  useNewUrlParser: true
}, function (err) {
  if (err) {
    console.log('connect to' + config.db + 'error:' + err.message)
    process.exit(1)
  }
})

require('./user')
require('./article')
require('./tag')

exports.User = mongoose.model('User')
exports.Article = mongoose.model('Article')
exports.Tag = mongoose.model('Tag')