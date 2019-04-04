const mongoose = require('mongoose')
const DatePlguin = require('./plugins/date')
const Schema = mongoose.Schema

const ArticleSchema = new Schema({
  name: { type: String },
  content: { type: String },
  create_at: { type: Date, default: Date.now },
  update_at: { type: Date, default: Date.now }
})

ArticleSchema.plugin(DatePlguin(false))

mongoose.model('Article', UserSchema)