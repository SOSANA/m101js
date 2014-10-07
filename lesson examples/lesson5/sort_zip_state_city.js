// in your terminal run the following
// $ mongo < sort_zip_state_city.js
// $ mongo < sort_zip_state_city.js | more 
use zips
db.zips.aggregate([ 
    {$sort: 
     { 
         city : 1,
         state : 1           
     }
    }
]).pretty()
