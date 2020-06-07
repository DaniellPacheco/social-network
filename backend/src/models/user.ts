import { Sequelize, Model, DataTypes, BuildOptions } from 'sequelize'; 
import DbConnectionFactory from '../factories/db_connection_factory';
const connectionInstance = DbConnectionFactory.getConnection('mysql');

interface IUser {

    id: number;
    name: string;
    email: string;
    password: string;
    age: number;
    birthdate: Date;
}

class User extends Model implements IUser {

    public id!: number;
    public name!: string;
    public email!: string;
    public password!: string;
    public age!: number;
    public birthdate!: Date;
    public readonly createdAt?: Date;
    public readonly updatedAt?: Date;
}

const attributes = {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    name: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    email: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    password: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    age: {
        type: DataTypes.DATE,
        allowNull: false
    },
    birthdate: {
        type: DataTypes.DATE,
        allowNull: false
    }
}

const options = {
    sequelize: connectionInstance.getConnection(),
    timestamps: false,
    modelName: 'User'
}

User.init(attributes, options);

export default User;