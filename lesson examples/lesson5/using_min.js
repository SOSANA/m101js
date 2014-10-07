// in your terminal run the following
// $ mongo < using_min.js 
use agg
db.products.aggregate([ 
    {$group: 
     { 
         _id: {
             "maker" : "$manufacturer"
         },  
         minprice : { $min : "$price" } 
     } 
    } 
])