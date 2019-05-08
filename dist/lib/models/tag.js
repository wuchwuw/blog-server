"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const date_1 = require("./plugins/date");
const TagSchema = new mongoose_1.Schema({
    name: { type: String },
    // articles: [Schema.Types.ObjectId],
    create_at: { type: Date, default: Date.now },
    update_at: { type: Date, default: Date.now }
});
TagSchema.plugin(date_1.default(false));
const TagModel = mongoose_1.default.model('Tag', TagSchema);
exports.default = TagModel;
//# sourceMappingURL=tag.js.map