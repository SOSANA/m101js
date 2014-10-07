// in your terminal run the following
// $ mongo < match.js 
use zips
db.zips.aggregate([ 
    {$match: 
     { 
         'state' : "NY",           
     }
    }
]).pretty()