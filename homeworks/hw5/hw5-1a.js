// in your terminal run the following
// $ mongo < hw5-1.js 
use blog;
db.posts.aggregate([
    /* unwind by comments */
    {$unwind: "$comments"},
    /* group by author counting comments */
    {$group: {_id:"$comments.author", num_comments: {$sum:1}}},
     /* sort by count */
    {$sort:{num_comments:-1}},{$limit:1}
])