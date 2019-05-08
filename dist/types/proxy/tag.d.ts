import { TagInterface } from '../types/model';
export default class TagProxy {
    static newAndSave(name: string): Promise<TagInterface>;
    static find(): Promise<TagInterface[]>;
}
