import express, { Request, Response, Application} from 'express';
const app: Application = express();
const PORT: number = 3030;

app.use(express.static(__dirname + '/../../frontend/public'));
app.set('views', __dirname + '/../../frontend/public/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('*', (req: Request, res: Response) => {
    res.render('index.html');
});

app.listen(PORT, () => {
    console.info(`Server started on port ${PORT}`);
});