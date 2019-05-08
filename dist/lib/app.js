"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config");
const koa_1 = require("koa");
const router_1 = require("./router");
const koa_bodyparser_1 = require("koa-bodyparser");
const error_1 = require("./middlewares/error");
// import render from './middlewares/render'
const logger_1 = require("./common/logger");
// import path from 'path'
// import views from 'koa-views'
const app = new koa_1.default();
app.use(koa_bodyparser_1.default());
app.use(error_1.default);
app.use(router_1.default.routes());
app.use(router_1.default.allowedMethods());
// app.use(render)
app.on('error', (err) => {
    // todo error log
    logger_1.default.error(err);
});
app.listen(config_1.default.port, () => {
    logger_1.default.info('listening on port:' + config_1.default.port);
});
// module.exports = app
//# sourceMappingURL=app.js.map