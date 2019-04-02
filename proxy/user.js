const { User } = require('../models')

module.exports = function createUser ({ name, password }, callback) {
  let user = new User({
    name,
    password
  })
  user.save(callback)
}