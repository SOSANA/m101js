// in your terminal run the following
// $ mongo < reshape_products.js 
use agg
db.products.aggregate([ 
    {$project: 
     { 
         _id:0, 
         'maker' : {$toLower : "$manufacturer"},
         'details' : {'category' : "$category",
                      'price' : {$multiply : ["$price", 10]}
                     },
         'item' : '$name'
     }
    }
]).pretty()