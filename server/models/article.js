import mongoose from 'mongoose'
import DatePlguin from './plugins/date'
const Schema = mongoose.Schema

const ArticleSchema = new Schema({
  title: { type: String },
  content: { type: String },
  tags: [Schema.Types.ObjectId],
  create_at: { type: Date, default: Date.now },
  update_at: { type: Date, default: Date.now }
})

ArticleSchema.plugin(DatePlguin(false))

const ArticleModel = mongoose.model('Article', ArticleSchema)

export default ArticleModel