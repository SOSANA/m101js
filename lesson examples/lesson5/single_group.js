// in your terminal run the following
// $ mongo < single_group.js 
use agg
db.grades.aggregate([
    {'$group':{_id:{class_id:"$class_id", student_id:"$student_id"}, 'average':{"$avg":"$score"}}}])