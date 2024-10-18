let mongo = require('mongoose');

mongo.connect("mongodb://localhost:27017/mwf_3_30");
var db = mongo.connection;

db.collection('node').deleteOne({'name':'gras'},(err)=>{
    if(err) throw err;
    console.log('deleted!!!');
});