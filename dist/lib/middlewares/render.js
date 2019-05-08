"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("react-dom/server");
const entry_server_1 = require("../../client/entry-server");
exports.default = async (ctx, next) => {
    try {
        let component = entry_server_1.createApp({}, ctx.url);
        const reactHtml = server_1.default.renderToString(component);
        await ctx.render('../views/index.html', {
            html: reactHtml
        });
    }
    catch (err) {
        console.log(err);
    }
};
//# sourceMappingURL=render.js.map