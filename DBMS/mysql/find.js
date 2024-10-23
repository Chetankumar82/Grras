var mysql = require('mysql');

// connection
var db= mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"mwf_3_30"
});

// connection on
db.connect((e)=>{
    if(e) throw e;
    console.log('Connected!!!');

    var uname='opq';
    var q = `select * from user where uname="${uname}"`;
    db.query(q,(err,data)=>{
        if(err) throw err;
        console.table(data)
    })
})