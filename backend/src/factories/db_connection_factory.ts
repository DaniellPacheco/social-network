import IDbConnection from '../interfaces/db_connection_interface';

let connections: Array<any> = new Array();

export default class DbConnectionFactory {    

    /**
     * 
     * @param key Key to set connection
     * @param IDbConnection Database connection instance
     */
    static storeConnection(key: any, IDbConnection: any): void {
        connections[key] = IDbConnection;
    }

    static getConnection(key: any) {
        return connections[key];
    }
}