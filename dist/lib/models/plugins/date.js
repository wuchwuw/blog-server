"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tools_1 = require("../../common/tools");
function default_1(friendly) {
    return function (schema) {
        schema.pre('save', next => {
            this.update_at = new Date();
            next();
        });
        schema.virtual('create_at_format').get(() => {
            return tools_1.formatDate(this.create_at, friendly);
        });
        schema.virtual('update_at_format').get(() => {
            return tools_1.formatDate(this.update_at, friendly);
        });
    };
}
exports.default = default_1;
//# sourceMappingURL=date.js.map