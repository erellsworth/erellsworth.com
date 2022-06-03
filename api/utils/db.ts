import { Sequelize } from 'sequelize';

const { DB_NAME, DB_USER, DB_PASS, DB_HOST, DB_PORT, CA_CERT } = process.env;

const db = new Sequelize(DB_NAME as string, DB_USER as string, DB_PASS as string, {
    host: DB_HOST,
    dialect: 'postgres',
    port: parseInt(DB_PORT as string),
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
            ca: CA_CERT
        }
    }
});

export {
    db
}