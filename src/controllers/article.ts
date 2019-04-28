import { Article as ArticleProxy } from '../proxy'
import validator from '../common/validator'

const ArticleRule = {
  title: [
    { rule: 'required', errorMsg: '请输入文章标题'}
  ]
}

async function create (ctx, next) {
  try {
    let { title, content, tags } = ctx.request.body
    validator(ctx, { title }, ArticleRule)
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

export default {
  create
}