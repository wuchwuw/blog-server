import { TagProxy } from '../proxy'
import { BaseContext } from 'koa'
import { validator } from '../common/validator'

export default class TagController {

  public static async create (ctx: BaseContext) {
    try {
      let { name } = ctx.request.body
      validator(ctx, { name }, {
        name: [
          { rule: 'required', errorMsg: '请输入文章标签' }
        ]
      })
      let tag = await TagProxy.newAndSave(name)
      ctx.body = {
        success: true,
        data: {
          tag
        },
        message: '创建标签成功'
      }
    } catch (err) {
      ctx.throw(500, err)
    }
  }

  public static async getAllTag (ctx: BaseContext) {
    try {
      let tags = await TagProxy.find()
      ctx.body = {
        success: true,
        data: {
          tags
        },
        message: '获取所有标签成功'
      }
    } catch (err) {
      ctx.throw(500, err)
    }
  }

}
