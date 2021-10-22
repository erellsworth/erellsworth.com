import { DataTypes, Model, ModelAttributes, ModelCtor, Optional } from "sequelize";
import { MediaInterface } from "~/interfaces/media";
import { contentResults } from "~/interfaces/misc";
import { ContentInterface, ContentQuery } from "../../interfaces/content";
import { db } from "../utils";
// import { BaseAttributes } from "./BaseAttributes";
import { Media } from "./Media";
import { TaxonomyModel } from "./Taxonomy";


// Some fields are optional when calling UserModel.create() or UserModel.build()
interface ContentCreationAttributes extends Optional<ContentInterface, "id"> { }

// We need to declare an interface for our model that is basically what our class would be
interface ContentInstance
    extends Model<ContentInterface, ContentCreationAttributes>,
    ContentInterface { }

const attributes: ModelAttributes<ContentInstance, ContentInterface> = {
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
    html: {
        type: DataTypes.TEXT,
    },
    metaData: {
        type: DataTypes.JSONB
    },
    seo: {
        type: DataTypes.JSON
    },
    thumbnail: {
        type: DataTypes.VIRTUAL
    },
    // standard attributes:
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER.UNSIGNED,
    },
    createdAt: {
        type: DataTypes.DATE,
        get() {
            const rawValue = this.getDataValue('createdAt');
            return new Date(rawValue).toDateString();
        }
    },
    updatedAt: {
        type: DataTypes.DATE,
        get() {
            const rawValue = this.getDataValue('updatedAt');
            return new Date(rawValue).toDateString();
        }
    }
}

const ContentModel = db.define<ContentInstance>('Content', attributes);

const attachThumbnails = async (contents: ContentInterface[]) => {
    return Promise.all(contents.map(async (content: ContentInterface): Promise<ContentInterface> => {
        return await attachThumbnail(content)
    }));
}

const attachThumbnail = async (content: ContentInterface) => {
    if (content.metaData.media_id) {
        const media: MediaInterface = await Media.findByPk(content.metaData.media_id, { logging: false }) as unknown as MediaInterface;
        content.thumbnail = `${process.env.ASSETS_URI}${media.path}/${media.filename}`;
    }
    return content;
}

const Content = {
    findAll: async (query: ContentQuery): Promise<contentResults> => {
        const { type, limit, page } = query;
        const offset = (parseInt(page.toString()) - 1) * limit;

        console.log('offset', offset);

        const { count, rows } = await ContentModel.findAndCountAll({
            where: {
                status: 'published',
                type
            },
            include: TaxonomyModel,
            order: [['createdAt', 'DESC']],
            limit,
            logging: false,
            distinct: true,
            offset
        });

        const results = await attachThumbnails(rows);

        return {
            results,
            count,
            perPage: limit
        };

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

        return await attachThumbnail(content);
    }
};

export {
    Content,
    ContentModel
}
