import { TagProxy } from '../proxy'
import { BaseContext } from 'koa'

export default class TagController {

  public static async createTag (ctx: BaseContext) {
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

  public static async getAllTag (ctx: BaseContext) {
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
}
