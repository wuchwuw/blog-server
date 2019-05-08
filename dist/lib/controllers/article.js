"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const proxy_1 = require("../proxy");
const validator_1 = require("../common/validator");
const validator_2 = require("../common/validator");
class ArticleController {
    static async create(ctx) {
        try {
            let { title, content, tag } = ctx.request.body;
            await validator_1.validator({ title, content, tag }, validator_2.ArticleFieldRule);
            let article = await proxy_1.ArticleProxy.newAndSave({ title, content, tag });
            ctx.body = {
                success: true,
                data: {
                    title: article.title,
                    content: article.content,
                    tag: article.tag,
                    create_at_format: article.create_at_format
                },
                message: '保存文章成功'
            };
        }
        catch (err) {
            ctx.throw(500, err);
        }
    }
    static async getArticleById(ctx) {
        try {
            let { arcitleId } = ctx.params;
            await validator_1.validator({ id: arcitleId }, { id: validator_2.ArticleFieldRule.id });
            let article = await proxy_1.ArticleProxy.findById(arcitleId);
            ctx.body = {
                success: true,
                data: article,
                message: '查找文章成功'
            };
        }
        catch (err) {
            ctx.throw(500, err);
        }
    }
    static async getArticles(ctx) {
        try {
            // todo nomarlize page pagesize
            let { tag, page, pageSize } = ctx.query;
            await validator_1.validator({ tag }, { tag: validator_2.ArticleFieldRule.tag });
            // await validator({ page, pageSize }, { page: defaultRule.page, pageSize: defaultRule.pageSize })
            let articles = await proxy_1.ArticleProxy.find({ tag, page, pageSize });
            ctx.body = {
                success: true,
                data: articles,
                message: '查找文章成功'
            };
        }
        catch (err) {
            ctx.throw(500, err);
        }
    }
}
exports.default = ArticleController;
//# sourceMappingURL=article.js.map