var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://newuser:newusers@cluster0-m3jmz.mongodb.net/mdbatlass?retryWrites=true";

MongoClient.connect(url,{useNewUrlParser: true},function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myquery = { address: 'Mountain 21' };
  dbo.collection("customers").deleteOne(myquery, function(err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    db.close();
  });
});
