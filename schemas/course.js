var momgoose=require('mongoose');

var course=new momgoose.Schema({

    Number:{type:Number,required:true,unique:true},
    name:{type:String,reuqired:true},
    department:{type:String,required:true}
})
module.exports=momgoose.model('course',course)