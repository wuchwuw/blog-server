"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
class ArticleProxy {
    static async newAndSave({ title, content, tag }) {
        let article = new models_1.ArticleModel({
            title,
            content,
            tag
        });
        article = await article.save();
        return article;
    }
    static async findById(id) {
        let article = await models_1.ArticleModel.findById(id, 'create_at update_at').exec();
        return article;
        // return new Promise((resolve, reject) => {
        //   ArticleModel.findById(id, 'create_at update_at', (err, article) => {
        //     if (err) {
        //       reject(err)
        //     } else {
        //       resolve(article)
        //     }
        //   })
        // })
    }
    static async find({ tag, page, pageSize }) {
        let skip = (page - 1) * pageSize;
        let articles = await models_1.ArticleModel.find({ tag }, 'create_at update_at').skip(skip).limit(pageSize).exec();
        return articles;
        // return new Promise((resolve, reject) => {
        //   ArticleModel.find({ tag }, 'create_at update_at').skip(skip).limit(pageSize).exec((err, articles) => {
        //     if (err) {
        //       reject(err)
        //     } else {
        //       resolve(articles)
        //     }
        //   })
        // })
    }
}
exports.default = ArticleProxy;
//# sourceMappingURL=article.js.map