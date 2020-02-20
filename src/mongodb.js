const MongoClient = require('mongodb').MongoClient;
const service = require('feathers-mongodb');

module.exports = function (app) {
  const connection = app.get('mongodb');
  const database = "NRPDD";
  const mongoClient = MongoClient.connect(connection, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(client => {
      client.db(database);
      app.service('users').Model = client.db('NRPDD').collection('users');
      
    })
    .catch(error => {
      console.log('promise error: ', error);
    })
  
  
};


