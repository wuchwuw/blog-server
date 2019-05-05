import { ArticleModel } from '../models'
import { ArticleData, ArticleInterface, ArticleFindParams } from '../types/model'

export default class ArticleProxy {

  public static async newAndSave ({ title, content, tag }: ArticleData): Promise<ArticleInterface> {
    let article = new ArticleModel({
      title,
      content,
      tag
    })
    article = await article.save()
    return article
  }

  public static async findById (id: string): Promise<ArticleInterface | null> {
    let article = await ArticleModel.findById(id, 'create_at update_at').exec()
    return article
    // return new Promise((resolve, reject) => {
    //   ArticleModel.findById(id, 'create_at update_at', (err, article) => {
    //     if (err) {
    //       reject(err)
    //     } else {
    //       resolve(article)
    //     }
    //   })
    // })
  }

  public static async find ({tag, page, pageSize}: ArticleFindParams): Promise<ArticleInterface[]>{
    let skip = (page - 1) * pageSize 
    let articles = await ArticleModel.find({ tag }, 'create_at update_at').skip(skip).limit(pageSize).exec()
    return articles
    // return new Promise((resolve, reject) => {
    //   ArticleModel.find({ tag }, 'create_at update_at').skip(skip).limit(pageSize).exec((err, articles) => {
    //     if (err) {
    //       reject(err)
    //     } else {
    //       resolve(articles)
    //     }
    //   })
    // })
  }
}