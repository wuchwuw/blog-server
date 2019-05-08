"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
class TagProxy {
    static async newAndSave(name) {
        let tag = new models_1.TagModel({
            name
        });
        tag = await tag.save();
        return tag;
    }
    static async find() {
        let tags = await models_1.TagModel.find({});
        return tags;
    }
}
exports.default = TagProxy;
//# sourceMappingURL=tag.js.map