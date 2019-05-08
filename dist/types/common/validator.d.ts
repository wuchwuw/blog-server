interface Validator {
    (data: any, rules: Rules): Promise<any>;
}
interface Rules {
    [propName: string]: {
        rule: string;
        errorMsg: string;
    }[];
}
export declare const ArticleFieldRule: {
    title: {
        rule: string;
        errorMsg: string;
    }[];
    content: {
        rule: string;
        errorMsg: string;
    }[];
    tag: {
        rule: string;
        errorMsg: string;
    }[];
    id: {
        rule: string;
        errorMsg: string;
    }[];
};
export declare const TagFieldRule: {
    id: {
        rule: string;
        errorMsg: string;
    }[];
    tag: {
        rule: string;
        errorMsg: string;
    }[];
};
export declare const defaultRule: {
    page: {
        rule: string;
        errorMsg: string;
    }[];
    pageSize: {
        rule: string;
        errorMsg: string;
    }[];
};
export declare const validator: Validator;
export {};
