// in your terminal run the following
// $ mongo < using_push.js 
use agg
db.products.aggregate([ 
    {$group: 
     { 
         _id: {
             "maker" : "$manufacturer"
         },  
         categories : { $push : "$category" } 
     } 
    } 
])