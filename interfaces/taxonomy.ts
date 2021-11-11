import { baseInterface } from "./base";
import { ContentInterface } from "./content";
import { PaginatedResults } from "./misc";

export interface TaxonomyInterface extends baseInterface {
    name: string;
    description: string;
    metaData: {
        text: string;
        media_id: string;
    }
    content?: any;
}

export interface TaxonomyQuery {
    slug: string;
    limit: number;
    page: number;
}