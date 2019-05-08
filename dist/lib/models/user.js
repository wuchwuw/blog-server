"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const date_1 = require("./plugins/date");
const Schema = mongoose_1.default.Schema;
const UserSchema = new Schema({
    name: { type: String },
    password: { type: String },
    create_at: { type: Date, default: Date.now },
    update_at: { type: Date, default: Date.now }
});
UserSchema.plugin(date_1.default(false));
const UserModel = mongoose_1.default.model('User', UserSchema);
exports.default = UserModel;
//# sourceMappingURL=user.js.map