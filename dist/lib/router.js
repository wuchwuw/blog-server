"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const koa_router_1 = require("koa-router");
const article_1 = require("./controllers/article");
const tag_1 = require("./controllers/tag");
const router = new koa_router_1.default();
// article
router.post('/article/create', article_1.default.create);
router.get('/article/:id', article_1.default.getArticleById);
router.get('/article/list', article_1.default.getArticles);
// tag
router.post('/tag/create', tag_1.default.create);
router.get('/tag/list', tag_1.default.getAllTag);
exports.default = router;
//# sourceMappingURL=router.js.map