const TagModel = require('../models').Tag

exports.newAndSave = function (name) {
  let tag = new TagModel({
    name,
    articles: []
  })
  return tag.save()
}

exports.findAll = function () {
  return TagModel.find({})
}