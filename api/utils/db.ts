import { Sequelize, Options } from 'sequelize';

const dbOptions: Options = {
    dialect: 'postgres',
    logging: false
};

if (process.env.APP_ENV === 'prod') {
    dbOptions.ssl = true;
    dbOptions.dialectOptions = {
        ssl: {
            require: true,
            rejectUnauthorized: true,
            ca: process.env.CA_CERT
        }
    };
}

const db = new Sequelize(process.env.DATABASE_URL as string, dbOptions);

export {
    db
}