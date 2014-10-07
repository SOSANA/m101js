// in your terminal run the following
// $ mongo < sort.js
// $ mongo < sort.js | more 
use zips
db.zips.aggregate([ 
    {$match: 
     { 
        'state' : "NY",           
     }
    },
    {$group:
     {
        _id : "$city",
        population : {$sum : "$pop"},
        zip_codes : {$addToSet : "$_id"}
      }    
     },
    {$project:
     {
        _id : 0,
        city : "$_id",
        population : 1
     }
    },
    {$sort: 
     { 
        population : -1           
     }
    }
]).pretty()
