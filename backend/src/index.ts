import express, { Request, Response, Application} from 'express';
const app: Application = express();
const PORT: number = 3030;

import DbConnectionFactory from './factories/db_connection_factory';
import MysqlConnection from './connections/mysql_connection';
import DatabaseConfiguration from './configs/database';

const mysqlConnection = new MysqlConnection(DatabaseConfiguration['mysql']);
DbConnectionFactory.storeConnection('mysql', mysqlConnection);

app.use(express.static(__dirname + '/../../frontend/public'));
app.set('views', __dirname + '/../../frontend/public/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

import User from './models/user';
User.findAll();

app.get('*', (req: Request, res: Response) => {
    const connection = DbConnectionFactory.getConnection('mysql');
    connection.connect();
    res.render('index.html');
});

app.listen(PORT, () => {
    console.info(`Server started on port ${PORT}`);
});