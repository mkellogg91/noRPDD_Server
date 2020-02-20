const MongoClient = require('mongodb').MongoClient;
const service = require('feathers-mongodb');

module.exports = function (app) {
  const connection = app.get('mongodb');
  const database = "NRPDD";
  const mongoClient = MongoClient.connect(connection, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(client => {
      client.db(database);
      app.service('users').Model = client.db('NRPDD').collection('users')
      
    })
    .catch(error => {
      console.log('promise error: ', error)
    })
  //app.set('mongoClient', mongoClient);
  
};


// module.exports = function (app) {
//   const MongoClient = require('mongodb').MongoClient;
//   const uri = "mongodb+srv://user:altec1991@cluster0-a1j7v.mongodb.net/test?retryWrites=true&w=majority";
//   const client = new MongoClient(uri, { useNewUrlParser: true });
//   client.connect(err => {
//     const collection = client.db("NRPDD").collection("users");
//     // perform actions on the collection object

//     // var myObj = {email: 'testuser2@test.com', password: 'mysecretpassycode2'};

//     // collection.insertOne(myObj, (err, res) =>{
//     //   if (err) throw err;
//     //   console.log('here is res ', res)
//     // })
//     app.set('mongoClient', client)
//   });
// }

