//var mongosose=require('mongoose')
var express=require('express')
var exam=require('../controlers/exam_controler.js')
var app=express()
var router=express.Router()

router.post('/add_exam',exam.add_exam)
router.post('/show_exam',(req,res)=>{
    exam.show}
    )

module.exports=router