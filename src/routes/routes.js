const express = require('express');
const routes = express.Router();

const DataAccessObject = require('../../server/dataAccessObject');
const Comment = require('../../server/comment');

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
      response.redirect('/getComments');
    });
  } catch(err) {
    response.status(500).send({ message: err.message })
  }
  });
  
  routes.get('/getComment', function(request, response) {

  try {
    const { body } = request;
    const { id } = body;
    comment.getComment(id).then(result => {
      response.send({ name: result.message });
    });
  } catch(err) {
    response.status(500).send({ message: err.message })
  }
  
  });
  
  routes.get('/getComments', function(request, response) {
    try {
      comment.getComments().then(result => {
        response.render('main', {userComment: result, name: result.name, message: result.message, created: result.created });
      });
    } catch(err) {
      response.status(500).send({ message: err.message })
    }
    
  });
  
  routes.delete('/deleteComments', function(request, response) {
    try {
      comment.deleteComments().then(result => {
       
        response.redirect('/getComments');
      });
    } catch(err) {
      response.status(500).send({ message: err.message })
    }
   
  });

  module.exports = routes;