// in your terminal run the following
// $ mongo < hw5-2.js 
use zips;
db.zips.aggregate([
    // match CA and NY
    {"$match":
       {
           state: {$in: ['CA', 'NY']}
       } 
    },
    // group by state and city
    {$group:
     {
         _id:{state:"$state", city:"$city"},
         pop:{$sum:"$pop"}
     }
    },
    // only look at cities over 25000
    {$match:
        {
            pop: {$gt:25000}
        }
    },
    // get the average population across those cities
    {$group:
        {
            _id:null,
            avg_pop:{$avg:"$pop"}
        }
    }
])