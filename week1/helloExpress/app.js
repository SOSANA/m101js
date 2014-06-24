/**
* Created with m101js.
* User: sosana
* Date: 2014-06-24
* Time: 06:22 PM
* To change this template use Tools | Templates.
*/
var express = require('express'),
    app = express();

app.get('/', function (req, res){
    res.send("Hello, Beautiful World!");
});

app.get('*', function (req, res){
    res.send("Page Not Found YO!", 404);
});

app.listen(8080);
console.log("Express server started on port 8080 Yo!");