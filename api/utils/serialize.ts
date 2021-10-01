import { Model } from "sequelize/types";

export const serializeItems = <T>(modelItems: Model[], props: string[]): T[] => {
    return modelItems.map((item: Model) => serializeItem(item, props));
}

export const serializeItem = <T>(modelItem: Model, props: string[]): T => {
    const json: any = modelItem.toJSON();

    props.forEach((prop: string) => json[prop] = JSON.parse(JSON.stringify(json[prop])));
    return json as T;
}