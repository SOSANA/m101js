// in your terminal run the following
// $ mongo < blog_tags.js
// $ mongo < blog_tags.js | more 
use blog;
db.posts.aggregate([
    /* unwind by tags */
    {"$unwind":"$tags"},
    /* now group by tags, counting each tag */
    {"$group":
      {"_id": "$tags",
       "count": {$sum:1}   
     }        
    },
    /* sort by popularity */
    {"$sort": {"count": -1}},
    /* show me the top 10 */
    {"$limit": 10},
    /* change the name of _id to be tag */
    {"$project":
     {_id:0,
      'tag': '$_id',
      'count': 1
     }
    }
])
