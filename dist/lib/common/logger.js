"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const log4js_1 = require("log4js");
const path_1 = require("path");
log4js_1.default.configure({
    appenders: {
        file: { type: 'file', filename: path_1.default.join(__dirname, '../error.log') },
        console: { type: 'console' }
    },
    categories: {
        default: { appenders: ['console'], level: 'debug' },
        file: { appenders: ['file'], level: 'error' }
    }
});
const debug = true;
const logger = log4js_1.default.getLogger(debug ? '' : 'file');
exports.default = logger;
//# sourceMappingURL=logger.js.map