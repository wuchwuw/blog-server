import { TagProxy } from '../proxy'
import { BaseContext } from 'koa'
import { validator, TagFieldRule } from '../common/validator'

export default class TagController {

  public static async create (ctx: BaseContext) {
    try {
      let { name } = ctx.request.body
      await validator({ name }, { name: TagFieldRule.tag })
      await TagProxy.newAndSave(name)
      ctx.body = {
        success: true,
        message: '创建标签成功'
      }
    } catch (e) {
      console.log(e)
      ctx.throw(500, 'error')
    }
  }

  public static async getAllTag (ctx: BaseContext) {
    console.log(111111)
    try {
      let tags = await TagProxy.find()
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
}
