const express = require('express');
const cors = require('cors');
const exphbs = require('express-handlebars');

const bodyParser = require('body-parser');
const path = require('path');

const { check, validationResult } = require('express-validator');
// const DataAccessObject = require('./dataAccessObject');
// const Comment = require('./comment');

const app = express();
app.use(cors());
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// templating engines
app.engine('hbs', exphbs({ 
  extname: 'hbs',
  layoutsDir: "./src/views/",
  defaultLayout: 'index'    
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '/src/views'));

app.use(express.static('public'));

// const dataAccessObject = new DataAccessObject('./database.sqlite3');
// const comment = new Comment(dataAccessObject);

// comment.createTable().catch(error => {
//   console.log(`Error: ${JSON.stringify(error)}`);
// });

// routes for comments
const commentRouter = require('../src/routes/routes.js');
app.use('/', commentRouter);


app.listen(port, () => console.log(`Listening on port http://localhost:${port}`));


// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(request, response) {
  const rootDir = __dirname.replace('/server', '');
  response.render(`${rootDir}/src/views`);
});

