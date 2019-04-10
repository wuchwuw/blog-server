import { TagModel } from '../models'

export function newAndSave (name) {
  let tag = new TagModel({
    name,
    articles: []
  })
  return tag.save()
}

export function findAll () {
  return TagModel.find({})
}