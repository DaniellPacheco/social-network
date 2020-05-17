const express = require('express');
const app = express();
const PORT = 3001;

app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/public/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');


app.get('*', (req, res) => {
    res.render('index.html');
})

app.listen(PORT, () => {
    console.info(`Sever started ${PORT}`);
})