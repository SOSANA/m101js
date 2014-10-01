// in your terminal run the following
// $ mongo < using_addToSet.js 
use agg
db.products.aggregate([ 
    {$group: 
     { 
         _id: { 
             "maker" : "$manufacturer" 
         }, 
         categories:{ $addToSet : "$category" } 
     } 
    } 
])