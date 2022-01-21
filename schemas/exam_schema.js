var mongoose=require('mongoose')

const exam=new mongoose.Schema({

    _id:{type:Number,unique:true,required:true},
    time:{type:Date},
    room_number:{type:mongoose.Types.ObjectId,
    ref:'room'
    }
})
module.exports=mongoose.model('exams',exam)