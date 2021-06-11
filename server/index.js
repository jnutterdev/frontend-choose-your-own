const express = require('express');
const cors = require('cors');
const exphbs = require('express-handlebars');
const handlebars = require('handlebars');
const bodyParser = require('body-parser');
const path = require('path');

const { check, validationResult } = require('express-validator');

const app = express();
app.use(cors());
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// templating engines
app.set('views', path.join(__dirname, '../src/views/'));
app.set('view engine', 'hbs');
app.engine('hbs', exphbs({
 
    layoutsDir: 'src/views/layouts',
    extname: 'hbs',
    defaultLayout: 'index',
    partialsDir: 'src/views/partials',
    helpers: {
      formatDate: function (date, format) {
          return moment(date).format(format);
      }}
}));

handlebars.registerHelper('dateformat', require('helper-dateformat'));


app.use(express.static('public'));


// routes for comments
const commentRouter = require('../src/routes/routes.js');
const handlebarsDateformat = require('handlebars-dateformat');
app.use('/', commentRouter);

app.listen(port, () => console.log(`Listening on port http://localhost:${port}`));

