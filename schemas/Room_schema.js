

var mongoose=require('mongoose')

const room=new mongoose.Schema({
   //_id:{type:Number},
number:{type:Number,unique:true,required:true},
capacity:{type:Number,required:true},
building:{type:String,required:true}
})

module.exports=mongoose.model("rooms",room);