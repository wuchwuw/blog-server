import mongoose from 'mongoose'
import DatePlguin from './plugins/date'
const Schema = mongoose.Schema

const UserSchema = new Schema({
  name: { type: String },
  password: { type: String },
  create_at: { type: Date, default: Date.now },
  update_at: { type: Date, default: Date.now }
})

UserSchema.plugin(DatePlguin(false))

const UserModel = mongoose.model('User', UserSchema)

export default UserModel