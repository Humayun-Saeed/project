
var mongoose=require('mongoose')
var express=require('express')
var course=require('../schemas/course_schema.js')

module.exports.add_course=(req,res)=>{

const add=new course()
add.name=req.body.name
add.Number=req.body.Number
add.department=req.body.department

add.save().then((data)=>{
    console.log(data);
})
.catch((err) => {
    console.log(err);
})

}