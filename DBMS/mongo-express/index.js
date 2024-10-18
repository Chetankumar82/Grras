var express = require('express');
var app = express();
var mongo = require('mongoose');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

mongo.connect("mongodb://localhost:27017/mwf_3_30")
var db = mongo.connection;

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/reg.html')
});

app.post('/reg',(req,res)=>{
    var uname = req.body.uname;
    var email = req.body.uemail;
    var passw = req.body.passw;

    var data = {
        "username" : uname,
        "email" : email,
        "password" : passw
    }

    db.collection('express').insertOne(data,(err)=>{
        if(err) throw err;
        res.redirect('/');
    });
});

app.post('/log',async(req,res)=>{
    var uname = req.body.uname;
    var passw = req.body.passw;

    var cl = db.collection('express')

    var user = await cl.findOne({username : uname,password:passw})
    
    if(user){
        res.redirect('/home')
    }
    else{
        res.redirect('/')
    }

});

app.get('/update',(req,res)=>{
    res.sendFile(__dirname+'/update.html')
})

app.post('/upd',(req,res)=>{
    var uname = req.body.uname;
    var email = req.body.uemail;

    var cl = db.collection('express')

    // cl.updateOne({username:uname},{$inc:{likes:2}},(err)=>{
    //         if(err) throw err;
    //         res.send('updates')
    // })
    cl.updateOne({username:uname},{$set:{email:email}},(err)=>{
        if(err) throw err;
        res.send('updates')
   })

})

app.get('/del',(req,res)=>{
    res.sendFile(__dirname+'/delete.html')
})

app.post('/del',async(req,res)=>{
    var uname = req.body.uname;
    var passw = req.body.passw;

    var cl = db.collection('express');
    var user = await cl.findOne({username : uname,password:passw})

    if(user){
        cl.deleteOne({username:uname},(err)=>{
            res.send('deleted')
        })
    }
    else{
        res.send('USer not Found!!!')
    }

})
app.listen(4596,(err)=>{
    if(err) console.log(err);
    console.log('http://localhost:4596/')
})