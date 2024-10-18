let mongo = require('mongoose');

mongo.connect("mongodb://localhost:27017/mwf_3_30");
var db = mongo.connection;

async function data(){
    var data = await db.collection('node').findOne({"name":"grras"})
    console.log(data);
}

data();