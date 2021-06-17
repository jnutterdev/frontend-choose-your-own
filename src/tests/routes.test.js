const { getComment } = require('../routes/routes');


test('should return a comment from getComment endpoint and display just the id', done => {
  const response = request(routes).getComment("/getComment").then(id => {
     expect(id).toBe('0')
   })
  });