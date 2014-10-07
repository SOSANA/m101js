// in your terminal run the following
// $ mongo < using_max.js 
use agg
db.products.aggregate([ 
    {$group: 
     { 
         _id: {
             "maker" : "$manufacturer"
         },  
         maxprice : { $max : "$price" } 
     } 
    } 
])