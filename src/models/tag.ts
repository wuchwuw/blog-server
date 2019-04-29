import mongoose, { Schema, Document, Model } from 'mongoose'
import DatePlguin from './plugins/date'
import { TagInterface } from '../types/model'

const TagSchema: Schema = new Schema({
  name: { type: String },
  articles: [Schema.Types.ObjectId],
  create_at: { type: Date, default: Date.now },
  update_at: { type: Date, default: Date.now }
})

TagSchema.plugin(DatePlguin(false))

const TagModel: Model<TagInterface> = mongoose.model<TagInterface>('Tag', TagSchema)

export default TagModel