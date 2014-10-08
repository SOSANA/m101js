// in your terminal run the following
// $ mongo < hw5-3.js 
use agg;
db.grades.aggregate([
    //unwind the scores
    {$unwind: "$scores"},
    // use a filter to remove quiz
    {$match:
     {
         //could use it this way to filter
         //"scores.type": {$nin:["quiz"]}
         "scores.type": {$ne:"quiz"}
     }   
    },
    // calculate a grade for each student in each class
    {$group:
     {
         _id: {class:"$class_id", student:"$student_id"},
         average: {$avg:"$scores.score"}
     }
    },
    // now calculate the average in each class
    {$group:
     {
         _id: "$_id.class",
         class_avg: {$avg:"$average"}
     }
    },
    {$sort:{class_avg:-1}},
    {$limit:1}
])
