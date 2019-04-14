var MongoClient = require('mongodb').MongoClient;
var url="mongodb+srv://newuser:newusers@cluster0-m3jmz.mongodb.net/mdbatlass?retryWrites=true";

MongoClient.connect(url,{useNewUrlParser: true },function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});