const express = require('express');
//var express=require('express')
var app=express();

var add=require('../controlers/room_controler.js')

var router=express.Router()
//router.use(express.json())

router.get('/add_room',add.add_room);
module.exports=router;
