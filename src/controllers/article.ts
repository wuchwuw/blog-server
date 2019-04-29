import { ArticleProxy } from '../proxy'
import { validator } from '../common/validator'
import { BaseContext } from 'koa'

const ArticleCreateRule = {
  title: [
    { rule: 'required', errorMsg: '请输入文章标题'}
  ]
}

export default class ArticleController {
  
  public static async create (ctx: BaseContext) {
    try {
      let { title, content, tags } = ctx.request.body
      await validator({ title }, ArticleCreateRule)
      let article = await ArticleProxy.newAndSave(title, content, tags)
      ctx.body = {
        success: true,
        data: {
          title: article.title,
          content: article.content,
          tags: article.tag,
          create_at_format: article.create_at_format
        },
        message: '保存文章成功'
      }
    } catch (err) {
      ctx.throw(500, err)
    }
  }
  
}