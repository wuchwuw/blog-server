"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moment = require("moment");
moment.locale('zh-cn');
function formatDate(date, friendly) {
    let d = moment(date);
    if (friendly) {
        return d.fromNow();
    }
    else {
        return d.format('YYYY-MM-DD HH:mm');
    }
}
exports.formatDate = formatDate;
//# sourceMappingURL=tools.js.map