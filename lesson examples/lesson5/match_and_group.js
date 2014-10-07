// in your terminal run the following
// $ mongo < match_and_group.js 
use zips
db.zips.aggregate([ 
    {$match: 
     { 
        'state' : "NY",           
     }
    },
    {$group:
     {
         _id : "NEW YORK",
         population : {$sum : "$pop"},
         zip_codes : {$addToSet : "$_id"}
     }
    }
]).pretty()