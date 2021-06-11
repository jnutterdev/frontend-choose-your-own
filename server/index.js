const express = require('express');
const exphbs = require('express-handlebars');

const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// templating engines
app.set('views', path.join(__dirname, '../src/views/'));
app.set('view engine', 'hbs');
app.engine('hbs', exphbs({
 
    layoutsDir: 'src/views/layouts',
    extname: 'hbs',
    defaultLayout: 'index',
    partialsDir: 'src/views/partials'
}));

app.use(express.static('public'));

// routes for comments
const commentRouter = require('../src/routes/routes.js');

app.use('/', commentRouter);

app.listen(port, () => console.log(`Listening on port http://localhost:${port}`));

