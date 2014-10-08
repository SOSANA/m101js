// in your terminal run the following
// $ mongo < hw5-4a.js 
use zips;
db.zips.aggregate([
    { $project:{ _id:0, first_char:{ $substr:[ "$city", 0, 1 ] }, zip:'$_id', population:'$pop' } },
    { $match:{ 'first_char':{ $regex:'^[0-9]$' } } },
    { $group:{ _id:null, total:{ $sum:'$population' } } }
])