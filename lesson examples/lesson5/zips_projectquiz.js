// in your terminal run the following
// $ mongo < zips_projectquiz.js 
use zips
db.zips.aggregate([ 
    {$project: 
     { 
         _id:0, 
         'city' : {$toLower : "$city"},
         'pop' : 1,
         'state' : 1,            
         'zip' : "$_id"
     }
    }
])