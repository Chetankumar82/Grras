let mongo = require('mongoose');

mongo.connect("mongodb://localhost:27017/mwf_3_30")
var db= mongo.connection;

var data = {
    "name" : "abc",
    "age" : 25,
    "city" : "NYC"
}

db.collection('node').insertOne(data,(err)=>{
    if(err) throw err;
    console.log('data  inserted!!!!')
})