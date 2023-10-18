import Sequelize from 'sequelize';

let getConnexion = new Sequelize(
    process.env.DBNAME,
    process.env.USER,
    process.env.PASSWORD,
    {
        host: process.env.HOST,
        dialect: 'mysql',
    }
)

try {
    await getConnexion.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

export default getConnexion;
