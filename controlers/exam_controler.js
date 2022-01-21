var mongoose=require('mongoose')
var room=require('../schemas/Room_schema.js')
var exam=require('../schemas/exam_schema.js')

module.exports.add_exam=(req,res)=>{

module.exports.add=new exam()
add.id=req.body.id,
add.time=req.body.time,

room.findOne({_id:req.body._id}),async(err,data)=>{
    if(err){
        console.log(err);
    }
    else if(data){
        console.log(here);
        await room.push.data._id;

    }
    await data.save().then((value) => {
        console.log(value);
    })
    .catch((err)=>{
        console.log(err);
    })
}
module.exports.show=(req,res)=>{
    exam.findOne({number:req.body.number}).populate("room_number").then((value) => {
        console.log(value);
    })
    .catch((err) => {
        console.log(err);
    })
}



    
}