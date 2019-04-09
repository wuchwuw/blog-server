const ArticleModel = require('../models').Article

exports.newAndSave = function (title, content, tags) {
  let article = new ArticleModel({
    title,
    content,
    tags
  })
  return article.save()
}