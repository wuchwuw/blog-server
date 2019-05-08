import * as mongoose from 'mongoose'
import { Schema, Model } from 'mongoose'
import { ArticleInterface } from '../types/model'
import DatePlguin from './plugins/date'

const ArticleSchema: Schema = new Schema({
  title: String,
  content: String,
  tag: String,
  create_at: { type: Date, default: Date.now },
  update_at: { type: Date, default: Date.now }
}, {
  toObject: { virtuals: true },
  toJSON: { virtuals: true }
})

ArticleSchema.plugin(DatePlguin(false))

const ArticleModel: Model<ArticleInterface> = mongoose.model<ArticleInterface>('Article', ArticleSchema)

export default ArticleModel