import * as mongoose from 'mongoose'
import config from '../config'
// import UserModel from './user'
import ArticleModel from './article'
import TagModel from './tag'

mongoose.connect(config.db, {
  poolSize: 20,
  useNewUrlParser: true
}, function (err) {
  if (err) {
    console.log('connect to' + config.db + 'error:' + err.message)
    process.exit(1)
  }
})


export {
  ArticleModel,
  // UserModel,
  TagModel
}
