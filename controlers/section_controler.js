var mongoose=require('mongoose')
var express=require('express')
var section=require('../schemas/section_schema.js')
var exam=require('../schemas/exam_schema.js')
var room=require('../schemas/section_schema.js')
var course=require('../schemas/course_schema.js')

module.exports.add_section=(req,res)=>{
const add=new section()

add.number=req.body.number
add.enrolement=req.body.enrolement
exam.findOne({_id:req.body._id},async(err,data)=>{
if(err){
    console.log(err);
}
else if(!data){
    console.log("there is no data: ");
}
else{

    console.log("here");
    add.exam_id=data._id
    //await add.save().then((data)=>{
        //console.log(data);
   // })
   // .catch((err) => {
      //  console.log(err);
   // })
}


})

course.findOne({_id:req.body.course_id},async(err,data)=>{
if(err){
    console.log(err);
}
else if(!data){
    console.log("there is no one data is ");
}
else{
    console.log("here");
add.course_id=data._id;

await add.save().then((data)=>{
    console.log(data);
})
.catch((err) => {
console.log(err);    
})

}

})


}

module.exports.show=(req,res)=>{

section.findOne({_id:req.body._id}).populate("exam_id").populate("course_id").exec((err,data)=>{
if(err){
    console.log(err);
}
else{
    console.log(data);
}

})



}

