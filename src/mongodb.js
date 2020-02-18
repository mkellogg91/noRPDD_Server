const MongoClient = require('mongodb').MongoClient;

module.exports = function (app) {
  const connection = app.get('mongodb');
  const database = connection.substr(connection.lastIndexOf('/') + 1);
  //const database = "NRPDD";
  const mongoClient = MongoClient.connect(connection, { useNewUrlParser: true })
    .then(client => {
      console.log('here is client: ', client);
      client.db(database);
    }, 
    err => console.log('error: ', err))
    
  app.set('mongoClient', mongoClient);
};
