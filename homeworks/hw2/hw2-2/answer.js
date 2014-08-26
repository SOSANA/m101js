var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/weather', function(err, db) {
    if(err) throw err;

    var query = {},
		fields={"State":1, "Temperature":1, "_id":1},
		sort_opt={"State":1, "Temperature":-1};
	var state_max_temp;

    db.collection('data').find(query,fields).sort(sort_opt).each(function(err, doc) {
        if(err) throw err;

        if(doc == null) {
            return db.close();
        }

		var current_state=doc.State;

		if ( current_state !== state_max_temp) {
			state_max_temp = current_state; 
			var high_id=doc._id;

			MongoClient.connect('mongodb://localhost:27017/weather', function(err, dbw) {

			dbw.collection('data').find({_id: high_id}).each(function(err, pdoc) {
		        if(pdoc == null) { return dbw.close(); }
				console.dir(pdoc);
				});

			dbw.collection('data').update({_id: high_id}, {$set: {'month_high': true}},
				function(err, updated){
					if(err) throw err;
					return db.close();
				});
			
		});
		}
    });
});
