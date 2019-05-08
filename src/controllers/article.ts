import { ArticleProxy } from '../proxy'
import { validator } from '../common/validator'
import { BaseContext } from 'koa'
import { ArticleFieldRule, defaultRule } from '../common/validator'

export default class ArticleController {

  public static async create (ctx: BaseContext) {
    try {
      let { title, content, tag } = ctx.request.body
      await validator({ title, content, tag }, ArticleFieldRule)
      let article = await ArticleProxy.newAndSave({ title, content, tag })
      ctx.body = {
        success: true,
        data: {
          title: article.title,
          content: article.content,
          tag: article.tag,
          create_at_format: article.create_at_format
        },
        message: '保存文章成功'
      }
    } catch (err) {
      ctx.throw(500, err)
    }
  }

  public static async getArticleById (ctx: BaseContext) {
    console.log(1)
    try {
      console.log(ctx.params)
      let { id } = ctx.params
      // await validator({ id: id }, { id: ArticleFieldRule.id })
      let article = await ArticleProxy.findById(id)
      ctx.body = {
        success: true,
        data: {
          article
        },
        message: '查找文章成功'
      }
    } catch (err) {
      ctx.throw(500, err)
    }
  }

  public static async getArticles (ctx: BaseContext) {
    try {
      // todo nomarlize page pagesize
      let { tag, page, pageSize } = ctx.query
      // await validator({ tag } , { tag: ArticleFieldRule.tag })
      // await validator({ page, pageSize }, { page: defaultRule.page, pageSize: defaultRule.pageSize })
      let articles = await ArticleProxy.find({ tag, page, pageSize })
      ctx.body = {
        success: true,
        data: {
          articles
        },
        message: '查找文章成功'
      }
    } catch (err) {
      console.log(err)
      ctx.throw(500, err)
    }
  }

}