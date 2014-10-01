// in your terminal run the following
// $ mongo < using_sum.js 
use agg
db.products.aggregate([ 
    {$group: 
     { 
         _id: {
             "maker" : "$manufacturer"
         },  
         sum_prices : { $sum : "$price" } 
     } 
    } 
])