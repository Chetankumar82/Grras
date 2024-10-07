const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if(req.url === "/"){
    fs.readFile("index.html");
    res.end;
  } else if(req.url === "/about"){
    res.write("<h1>About<h1>");
    res.end;
  }
});

server.listen(2056,(err)=>{
    if(err){
        throw err;
    }
    console.log("Server is running on port 2056");
});