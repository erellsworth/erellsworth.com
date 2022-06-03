import { Options, Sequelize } from 'sequelize';

const { DB_NAME, DB_USER, DB_PASS, DB_HOST, DB_PORT, CA_CERT } = process.env;
// TODO: create a service to provide env vars with default values

const dbOptions: Options = {
    host: DB_HOST,
    dialect: 'postgres',
    port: parseInt(DB_PORT as string)
}

if (process.env.APP_ENV === 'prod') {
    dbOptions.dialectOptions = {
        ssl: {
            require: true,
            rejectUnauthorized: false,
            ca: CA_CERT
        }
    }
}

const db = new Sequelize(DB_NAME as string, DB_USER as string, DB_PASS as string, dbOptions);

export {
    db
}