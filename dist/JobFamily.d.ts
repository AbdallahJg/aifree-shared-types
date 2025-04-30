export interface ITranslation {
    locale: string;
    translation: string;
}
export interface IJobCategory {
    _id: string;
    jobs: string[];
    tags: string[];
    translations: ITranslation[];
}
export interface IJobFamily {
    _id: string;
    categories: IJobCategory[];
    index: number;
    translations: ITranslation[];
}
