var mongoose=require('mongoose')

const section =new mongoose.Schema({
number:{type:number,required:true},
exam_id:{type:mongoose.Types.ObjectId,
ref:['exams']
},
course_id:{type:mongoose.Types.ObjectId,
ref:'course'
},
enrolement:{type:Number}

})
module.exports=mongoose.model('section',section)