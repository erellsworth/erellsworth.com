import { Sequelize } from 'sequelize';

const db = new Sequelize(process.env.DB_CONNECTION_STRING as string, { dialect: 'postgres' });

export {
    db
}