var mongoose = require('mongoose');
var express = require('express');

mongoose.connect('mongodb://localhost', function(err) {
    if (err) throw err;
    console.log('connected!');
    // this creates a http server that we can use to test out our blog
    var app = express();
    // we are adding the route, the route will take the url that is found in the broswer
    // when you hit enter the request goes to our server, the express server
    // takes that route and finds a match and which ever match is found,the function passed to  
    // route will get executed.
    app.get('/', function (req, res) {
        //200 means http okay
        res.send(200, 'hello mongoose blog');
    
   })
    // to start up our app we need to execute the listen method on it and we need to listen on a port
    app.listen(3000, function() {
        // it accepts a call back, and logs a msg that we are ready to go and where the blog is running
        console.log('now listening on http://localhost:3000');
    })
})