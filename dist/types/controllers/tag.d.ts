import { BaseContext } from 'koa';
export default class TagController {
    static create(ctx: BaseContext): Promise<void>;
    static getAllTag(ctx: BaseContext): Promise<void>;
}
