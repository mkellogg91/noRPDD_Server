const MongoClient = require('mongodb').MongoClient;

// module.exports = function (app) {
//   const connection = app.get('mongodb');
//   const database = connection.substr(connection.lastIndexOf('/') + 1);
//   const mongoClient = MongoClient.connect(connection, { useNewUrlParser: true })
//     .then(client => {
//       console.log('here is client: ', client);
//       client.db(database);
//     }, 
//     err => console.log('error: ', err))

//   app.set('mongoClient', mongoClient);
// };


module.exports = function (app) {
  const MongoClient = require('mongodb').MongoClient;
  const uri = "mongodb+srv://user:altec1991@cluster0-a1j7v.mongodb.net/test?retryWrites=true&w=majority";
  const client = new MongoClient(uri, { useNewUrlParser: true });
  client.connect(err => {
    const collection = client.db("NRPDD").collection("users");
    // perform actions on the collection object

    var myObj = {email: 'testuser2@test.com', password: 'mysecretpassycode2'};

    collection.insertOne(myObj, (err, res) =>{
      if (err) throw err;
      console.log('here is res ', res)
    })
    app.set('mongoClient', client)
  });
}

