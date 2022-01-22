var mongoose=require('mongoose')
var room=require('../schemas/Room_schema.js')
var exam=require('../schemas/exam_schema.js')

module.exports.add_exam=(req,res)=>{
console.log("working");
var add1=new exam()
//add.id=req.body.id,
add1.time=req.body.time



room.findOne({_id:req.body._id},async(err,data)=>{
    if(err){
        console.log(err);
    }
    else if(!data){
        console.log("there is no data");
    }
    else{
        console.log("data");
         add1.room_number=data._id;
         await add1.save().then((data) => {
        console.log(data);
    })
    .catch((err)=>{
        console.log(err);
    })
    }
    
})
}

module.exports.show=(req,res)=>{
    console.log("working");
    exam.findOne({_id:req.body._id}).populate("room_number").exec((err,data)=>{
        if(err){
            console.log(err);
        }
            else
            {
                console.log(data);
            }
    })
}



    
