var mongoose=require('mongoose')

const exam=new mongoose.Schema({

    //_id:{type:Number,unique:true,required:true},
    time:{type:Number},
    room_number:{type:mongoose.Types.ObjectId,
    ref:"rooms"
    }
})
module.exports=mongoose.model('exam',exam)