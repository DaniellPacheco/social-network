const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/dist'));
// app.use(express.static(__dirname + '/dist'));
app.set('views', __dirname + '/public/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');


app.get('*', (req, res) => {
    res.render('index.html');
})

app.listen(3001, () => {
    console.info('Sever started');
})