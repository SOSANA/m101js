// in your terminal run the following
// $ mongo < hw5-2a.js 
use zips;
db.zips.aggregate([
    {$match: 
     {
         state: {$in: ['CA','NY']}
     }
    },
    {$group: 
     {
         _id: {state:"$state",city:"$city"}, 
         pop: {$sum: "$pop"}}},
    {$match: 
     {
         pop: {$gt:25000}
     }
    },
    {$group: 
     {
         _id:null, 
         avg_pop:{$avg:"$pop"}
     }
    }
])