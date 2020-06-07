/**
 * Database connections
 */

import dotenv from 'dotenv';
dotenv.config();

export default Object.freeze({

    mysql: {
        username: 'root',
        password: 'root',
        host: 'localhost',
        database: 'cloud',
        dialect: 'mysql'
    }
    
})