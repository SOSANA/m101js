/**
* Created with m101js.
* User: sosana
* Date: 2014-06-24
* Time: 06:22 PM
* To change this template use Tools | Templates.
*/
var express = require('express'),
    app = express(),
	cons = require('consolidate'),
	MongoClient = require('mongodb').MongoClient,
    Server = require('mongodb').Server;

app.engine('html', cons.swig);
app.set('view engine', 'html');
app.set('views', __dirname + "/views");

var mongoclient = new MongoClient(new Server('localhost', 27017,
                                             { 'native_parser' : true }));
var db = mongoclient.db('course');

app.get('/', function (req, res){
    
    db.collection('course').findOne({}, function (err, doc) {
    	res.render('hello', doc);                                           
    });
});

app.get('*', function (req, res){
    res.send("Page Not Found YO!", 404);
});

mongoclient.open(function (err, mongoclient){
	
    if (err) throw err;
    
    app.listen(8080);
    console.log("Express server started on port 8080 Yo!"); 
});
