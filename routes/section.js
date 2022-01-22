var mongoose=require('mongoose')
var express = require('express')
var section=require('../controlers/section_controler.js')
var router=express.Router()

router.post('/add_section',section.add_section)
router.post('/show_section',section.show)
module.exports=router
