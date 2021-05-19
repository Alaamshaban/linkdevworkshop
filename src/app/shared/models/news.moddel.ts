export interface ArticlModel {
    sourceID: number;
    id: number;
    showOnHomepage: boolean;
    title: string;
    description: string;
    urlToImage: string;
    publishedA: string;
    content: string;
}

export interface SourceCategoryModel {
    id: number;
    name: string;
}
