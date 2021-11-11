import { baseInterface } from "./base"
import { TaxonomyInterface } from "./taxonomy";

export type ContentType = 'post' | 'page';
export type ContentStatus = 'published' | 'draft';

export interface ContentInterface extends baseInterface {
    title: string;
    type: ContentType;
    status: ContentStatus;
    text: string;
    html: string;
    content: any;
    seo: {
        description: string;
    };
    metaData: {
        text: string;
        media_id: string;
    };
    Taxonomies?: TaxonomyInterface[];
    Tag?: any;
    thumbnail?: string;
}

export interface ContentQuery {
    type: 'post' | 'page';
    limit: number;
    page: number;
}