"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const date_1 = require("./plugins/date");
const ArticleSchema = new mongoose_1.Schema({
    title: String,
    content: String,
    tags: String,
    create_at: { type: Date, default: Date.now },
    update_at: { type: Date, default: Date.now }
});
ArticleSchema.plugin(date_1.default(false));
const ArticleModel = mongoose_1.default.model('Article', ArticleSchema);
exports.default = ArticleModel;
//# sourceMappingURL=article.js.map