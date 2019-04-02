const mongoose = require('mongoose')
const DatePlguin = require('./plugins/date')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  name: { type: String },
  password: { type: String },
  create_at: { type: Date, default: Date.now },
  update_at: { type: Date, default: Date.now }
})

UserSchema.plugin(DatePlguin(false))

mongoose.model('User', UserSchema)