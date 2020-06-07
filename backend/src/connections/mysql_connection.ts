import { Sequelize } from 'sequelize';
import IDbConnection from '../interfaces/db_connection_interface';

export default class MysqlConnection implements IDbConnection {

    private connection: any;

    /**
     * 
     * @param configs Database configuration
     */
    constructor(configs: object) {
        this.connection = new Sequelize(configs);
    }

    connect(): void {
        this.connection.authenticate()
        .then(() => {
          console.log('Connection has been established successfully.');
        })
        .catch( (err: any) => {
          console.error('Unable to connect to the database:', err);
        });
    }

    getConnection() {
      return this.connection;
    }
}