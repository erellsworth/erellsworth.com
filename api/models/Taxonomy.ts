import { DataTypes, Model, ModelCtor } from "sequelize";
import { db } from "../utils/db";
import { BaseAttributes } from "./BaseAttributes";

const TaxonomyModel: ModelCtor<Model<any, any>> = db.define('Taxonomy', Object.assign({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
    },
    slug: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    metaData: {
        type: DataTypes.JSONB
    }
}, BaseAttributes));

const Taxonomy = {
    findBySlug: (slug: string) => {
        return TaxonomyModel.findOne({
            where: {
                slug
            }
        });
    }
};

export {
    Taxonomy,
    TaxonomyModel
}