import { baseInterface } from "./base";

export interface TaxonomyInterface extends baseInterface {
    name: string;
    description: string;
    metaData: {
        text: string;
        media_id: string;
    }
}