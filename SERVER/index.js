const http = require('http');

http.createServer((req,res)=>{
    res.write("<H1>This is the first web server</H1>")
    res.end();
}).listen(4000);