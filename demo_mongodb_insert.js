var MongoClient = require('mongodb').MongoClient;
var url="mongodb+srv://newuser:newusers@cluster0-m3jmz.mongodb.net/mdbatlass?retryWrites=true";

MongoClient.connect(url,{useNewUrlParser: true},function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myobj = { name: "Company Inc", address: "Highway 37" };
  dbo.collection("customers").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});







