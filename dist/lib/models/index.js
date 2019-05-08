"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const config_1 = require("../config");
// import UserModel from './user'
const article_1 = require("./article");
exports.ArticleModel = article_1.default;
const tag_1 = require("./tag");
exports.TagModel = tag_1.default;
mongoose_1.default.connect(config_1.default.db, {
    poolSize: 20,
    useNewUrlParser: true
}, function (err) {
    if (err) {
        console.log('connect to' + config_1.default.db + 'error:' + err.message);
        process.exit(1);
    }
});
//# sourceMappingURL=index.js.map