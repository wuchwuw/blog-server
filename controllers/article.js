const ArticleProxy = require('../proxy').Article
const validator = require('../common/validator')

const ArticleRule = {
  title: [
    { rule: 'required', errorMsg: '请输入文章标题'}
  ]
}

exports.create = async function (ctx, next) {
  let { title, content, tags } = ctx.request.body
  validator(ctx, { title }, ArticleRule)
  try {
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
  } catch (e) {
    ctx.throw(500, 'error')
  }
}