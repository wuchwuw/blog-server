import { BaseContext } from 'koa';
export default class ArticleController {
    static create(ctx: BaseContext): Promise<void>;
    static getArticleById(ctx: BaseContext): Promise<void>;
    static getArticles(ctx: BaseContext): Promise<void>;
}
