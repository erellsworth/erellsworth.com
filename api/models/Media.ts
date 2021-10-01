import { DataTypes, Model, ModelCtor } from "sequelize";
import { db } from "../utils/db";
import { BaseAttributes } from "./BaseAttributes";

const MediaModel: ModelCtor<Model<any, any>> = db.define('Media', Object.assign({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    alt: {
        type: DataTypes.STRING,
        allowNull: false
    },
    filename: {
        type: DataTypes.STRING,
        allowNull: false
    },
    path: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: '/uploads'
    },
    mimetype: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, BaseAttributes));

class Media extends MediaModel {
    // something: () => {}
}

export {
    Media
}