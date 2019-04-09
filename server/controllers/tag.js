const TagProxy = require('../proxy').Tag

exports.create = async function (ctx, next) {
  let { title } = ctx.request.body
  try {
    await TagProxy.newAndSave(title, content, tags)
    ctx.body = {
      success: true,
      message: '创建标签成功'
    }
  } catch (e) {
    console.log(e)
    ctx.throw(500, 'error')
  }
}

exports.all = async function (ctx, next) {
  try {
    let tags = await TagProxy.findAll()
    ctx.body = {
      success: true,
      data: {
        tags
      },
      message: '获取所有标签成功'
    }
  } catch (e) {
    ctx.throw(500, 'error')
  }
}