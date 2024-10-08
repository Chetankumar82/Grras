var http = require('http');
var fs = require('fs');

http.createServer((req,res)=>{
    if(req.url == '/'){
        fs.readFile('./index.html','utf-8',(err,data)=>{
            if(err)throw err;
            else res.write(data);
        })
    }else if(req.url == '/about'){
        res.write('<h1>About Page</h1>');
        res.end();
    }else{
        res.write('404');
        res.end();
    }
}).listen(4010,(err)=>{
    if(err)throw err;
    else console.log('Server is running on http://localhost:4010');
});