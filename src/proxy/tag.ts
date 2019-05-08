import { TagModel } from '../models'
import { TagInterface } from '../types/model'

export default class TagProxy {

  public static async newAndSave (name: string): Promise<TagInterface> {
    let tag = new TagModel({
      name
    })
    tag = await tag.save()
    return tag
  }

  public static async find (): Promise<TagInterface[]> {
    let tags = await TagModel.find({}, 'name id')
    return tags
  }

}
