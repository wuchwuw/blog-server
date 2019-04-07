const mongoose = require('mongoose')
const DatePlguin = require('./plugins/date')
const Schema = mongoose.Schema

const TagSchema = new Schema({
  name: { type: String },
  articles: [Schema.Types.ObjectId],
  create_at: { type: Date, default: Date.now },
  update_at: { type: Date, default: Date.now }
})

TagSchema.plugin(DatePlguin(false))

mongoose.model('Tag', TagSchema)