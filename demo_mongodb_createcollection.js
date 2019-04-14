demo_mongodb_findone.jsvar MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://newuser:newusers@cluster0-m3jmz.mongodb.net/mdbatlass?retryWrites=true";

MongoClient.connect(url,{useNewUrlParser: true },function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.createCollection("customers", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});
