import { ArticleModel } from '../models'

export function newAndSave (title, content, tags) {
  let article = new ArticleModel({
    title,
    content,
    tags
  })
  return article.save()
}