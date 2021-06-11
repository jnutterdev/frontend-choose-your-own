const express = require('express');
const routes = express.Router();

const DataAccessObject = require('../../server/dataAccessObject');
const Comment = require('../../server/comment');
const bodyParser = require('body-parser');

const dataAccessObject = new DataAccessObject('../../database.sqlite3');
const comment = new Comment(dataAccessObject);

comment.createTable().catch(error => {
  console.log(`Error: ${JSON.stringify(error)}`);
});

routes.get('/', function(request, response) {
    response.render('main');
  });

routes.post('/createComment', function(request, response) {
  try {
    const { body } = request;
    comment.createComment(body).then(result => {
      // response.render('main', {comments: result});
      response.redirect('/getComments');
      
    });
  } catch(err) {
    response.status(500).send({ message: err.message })
  }
  });
  
  routes.get('/getComment', function(request, response) {
    const { body } = request;
    const { id } = body;
    comment.getComment(id).then(result => {
      response.send({ name: result.message });
    });
  });
  
  routes.get('/getComments', function(request, response) {
    comment.getComments().then(result => {
      response.render('main', {userComment: result, name: result[1], message: result[1], time: result[1] });
      
      for (item in result) {
        console.log(result)
      }
      
    });
  });
  
  routes.delete('/deleteComments', function(request, response) {
    comment.deleteComments().then(result => {
      response.send(result);
    });
  });

  module.exports = routes;