import { DataTypes, Model } from 'sequelize';
import getConnexion from './index.js';

export default class Activity extends Model { }

Activity.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    image: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            isUrl: true,
        }
    },
    link: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            isUrl: true,
        }
    },
    mainContent: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    startDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    endDate: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    technology: {
        type: DataTypes.STRING,
        allowNull: false,
    },

},
    {
        sequelize: getConnexion,
        modelName: 'activities',
        createdAt: false,
        updatedAt: false
    });


