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
    var passw = '67eydh'
    var q = `insert into user(uname,passw) values("${uname}","${passw}")`;
    db.query(q,(err)=>{
        if(err) throw err;
        console.log('Inserted!!!')
    })
})