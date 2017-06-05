var http = require('http');

// http.createServer(function (req, res) {
    
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.end('Hello, world!');
    
// }).listen(process.env.PORT || 8080);
var express = require('express');
var app = express();
app.get('/',function(req,res){
    res.send('Hello World!');
    res.end();
}
