import { ArticleData, ArticleInterface, ArticleFindParams } from '../types/model';
export default class ArticleProxy {
    static newAndSave({ title, content, tag }: ArticleData): Promise<ArticleInterface>;
    static findById(id: string): Promise<ArticleInterface | null>;
    static find({ tag, page, pageSize }: ArticleFindParams): Promise<ArticleInterface[]>;
}
