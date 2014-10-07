// in your terminal run the following
// $ mongo < match_group_and_project.js 
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
        population : "$population",
        zip_codes : 1 
     }
    }
]).pretty()
