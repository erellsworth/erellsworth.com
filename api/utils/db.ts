import { Sequelize, Options } from 'sequelize';

const dbOptions: Options = {
    dialect: 'postgres',
    logging: false
};

// if (process.env.APP_ENV === 'prod') {

//     dbOptions.dialectOptions = {
//         ssl: {
//             require: true,
//             rejectUnauthorized: false,
//             ca: 'cert.crt'
//         }
//     };
// }

const db = new Sequelize(process.env.DATABASE_URL as string, dbOptions);

export {
    db
}