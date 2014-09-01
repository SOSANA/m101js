var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/school', function(err, db) {
    if (err) throw err;
    
    var cursorClosed = false;
    var outstandingUpdates = 0;
    
    db.collection('students').find().each(function(err, doc) {
        if (err) throw err;
        
        if (doc == null) {
            cursorClosed = true;
            return;
        }
        
        var minScore = Number.MAX_VALUE;
        var minIndex = 0;
        
        for(var i=0; i < doc['scores'].length; i++) {
            var score = doc['scores'] [i];
            if ((score.type == "homework") && (score.score < minScore)) {
               minScore = score.score; 
               minIndex = i;
            }
        }
        doc['scores'].splice(minIndex, 1);
        
        db.collection('students').update({ "_id" : doc["_id"] }, doc, function(err, updated) {
      		if (err) throw err;
            
            console.dir("Successfully updated" + updated + " document!");
            
            outstandingUpdates--;
            if (cursorClosed && outstandingUpdates == 0){
                return db.close();
            }
        });
        
        outstandingUpdates++;
	});
});