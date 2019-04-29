import { TagModel } from '../models'

export default class TagProxy {

  public static newAndSave (name) {
    let tag = new TagModel({
      name,
      articles: []
    })
    return tag.save()
  }

  public static function findAll () {
    return TagModel.find({})
  }
  
}
