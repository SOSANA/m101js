/**
* Created with m101js.
* User: sosana
* Date: 2014-06-24
* Time: 03:21 AM
* To change this template use Tools | Templates.
*/
//console.log("helloworld!!");
var	http = require('http');

var server = http.createServer(function (request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World\n");
});

server.listen(8000);

console.log("Server Running at http//buah:8000");