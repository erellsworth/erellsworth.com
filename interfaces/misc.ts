import { ContentInterface } from "./content";

export interface contentResults {
    results: ContentInterface[];
    count: number;
    perPage: number;
}