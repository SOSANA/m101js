// in your terminal run the following
// $ mongo < zip_avg.js 
use agg
db.products.aggregate([ 
    {$group: 
     { 
         _id: { 
             "category" : "$category" 
         }, 
         avg_price:{ $avg : "$price" } 
     } 
    } 
])