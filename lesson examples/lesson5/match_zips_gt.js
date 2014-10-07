// in your terminal run the following
// $ mongo < match_zips_gt.js 
use zips
db.zips.aggregate([{$match:{pop:{$gt:100000}}}])
