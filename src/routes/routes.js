const express = require('express');
const routes = express.Router();

const DataAccessObject = require('../../server/dataAccessObject');
const Comment = require('../../server/comment');

const dataAccessObject = new DataAccessObject('../../database.sqlite3');
const comment = new Comment(dataAccessObject);

comment.createTable().catch(error => {
  console.log(`Error: ${JSON.stringify(error)}`);
});

routes.post('/createComment', function(request, response) {
  try {
    const { body } = request;
    comment.createComment(body).then(result => {
      response.send(result);
    });
  } catch(err) {
    response.status(500).send({ message: err.message })
  }
  });
  
  routes.get('/getComment', function(request, response) {
    const { body } = request;
    const { id } = body;
    comment.getComment(id).then(result => {
      response.send({ name: result.name });
    });
  });
  
  routes.get('/getComments', function(request, response) {
    comment.getComments().then(result => {
      response.render('../views/partials/comments', {comments: comments });
    });
  });
  
  routes.delete('/deleteComments', function(request, response) {
    comment.deleteComments().then(result => {
      response.send(result);
    });
  });

  module.exports = routes;