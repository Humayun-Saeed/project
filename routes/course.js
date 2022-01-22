var mongoose=require('mongoose')
var express=require('express')
var course=require('../controlers/course_controler.js')

var router=express.Router()

router.post('/add_course',course.add_course)
module.exports=router