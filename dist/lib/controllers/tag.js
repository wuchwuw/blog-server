"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const proxy_1 = require("../proxy");
const validator_1 = require("../common/validator");
class TagController {
    static async create(ctx) {
        try {
            let { name } = ctx.request.body;
            await validator_1.validator({ name }, { name: validator_1.TagFieldRule.tag });
            await proxy_1.TagProxy.newAndSave(name);
            ctx.body = {
                success: true,
                message: '创建标签成功'
            };
        }
        catch (e) {
            console.log(e);
            ctx.throw(500, 'error');
        }
    }
    static async getAllTag(ctx) {
        try {
            let tags = await proxy_1.TagProxy.find();
            ctx.body = {
                success: true,
                data: {
                    tags
                },
                message: '获取所有标签成功'
            };
        }
        catch (e) {
            ctx.throw(500, 'error');
        }
    }
}
exports.default = TagController;
//# sourceMappingURL=tag.js.map