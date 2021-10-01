import { DataTypes, Model, ModelCtor } from "sequelize";
import { ContentInterface } from "../../interfaces/content";
import { db } from "../utils";
import { BaseAttributes } from "./BaseAttributes";
import { TaxonomyModel } from "./Taxonomy";

const ContentModel: ModelCtor<Model<any, any>> = db.define('Content', Object.assign({
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    slug: {
        type: DataTypes.STRING,
        allowNull: false
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.TEXT,
    },
    text: {
        type: DataTypes.TEXT,
    },
    metaData: {
        type: DataTypes.JSONB
    },
    seo: {
        type: DataTypes.JSON
    }
}, BaseAttributes));

const Content = {
    findAll: async (type: string = 'post', limit: number = 10): Promise<ContentInterface[]> => {
        const content = await ContentModel.findAll({
            where: {
                status: 'published',
                type
            },
            include: TaxonomyModel,
            order: [['createdAt', 'DESC']],
            limit,
            logging: false
        }) as unknown as ContentInterface[];

        return content;
    },
    findBySlug: async (slug: string): Promise<ContentInterface> => {
        const content = await ContentModel.findOne({
            where: {
                status: 'published',
                slug,
            },
            include: TaxonomyModel,
            logging: false
        }) as unknown as ContentInterface;

        return content;
    }
};

export {
    Content,
    ContentModel
}
