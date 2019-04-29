import { ArticleModel } from '../models'
import { ArticleData, ArticleInterface } from '../types/model'

export default class ArticleProxy {

  public static async newAndSave ({ title, content, tags}: ArticleData): Promise<ArticleInterface> {
    let article = new ArticleModel({
      title,
      content,
      tags
    })
    article = await article.save()
    return article
  }

}