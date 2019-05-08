"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const strategies = {
    required(val, errorMsg) {
        if (val === '') {
            return errorMsg;
        }
    }
};
exports.ArticleFieldRule = {
    title: [
        { rule: 'required', errorMsg: '请输入文章标题' }
    ],
    content: [
        { rule: 'required', errorMsg: '请输入文字内容' }
    ],
    tag: [
        { rule: 'required', errorMsg: '请输入文章标签' }
    ],
    id: [
        { rule: 'required', errorMsg: '请输入正确的文章id' }
    ]
};
exports.TagFieldRule = {
    id: [
        { rule: 'required', errorMsg: '请输入正确的文章id' }
    ],
    tag: [
        { rule: 'required', errorMsg: '请输入文章标签' }
    ]
};
exports.defaultRule = {
    // todo number
    page: [
        { rule: 'required', errorMsg: '请输入正确的文章id' }
    ],
    pageSize: [
        { rule: 'required', errorMsg: '请输入正确的文章id' }
    ]
};
exports.validator = (data, rules) => {
    return new Promise((resolve, reject) => {
        let formKeys = Object.keys(data);
        let err;
        for (let i = 0; i < formKeys.length; i++) {
            let rule = rules[formKeys[i]];
            let val = data[formKeys[i]];
            for (let i = 0; i < rule.length; i++) {
                let arr = rule[i].rule.split(':');
                let strategy = arr.shift();
                arr.push(rule[i].errorMsg);
                arr.unshift(val);
                err = strategies[strategy].apply(null, arr);
                if (err) {
                    break;
                }
            }
            if (err) {
                break;
            }
        }
        if (err) {
            reject(err);
        }
        else {
            resolve();
        }
    });
};
//# sourceMappingURL=validator.js.map