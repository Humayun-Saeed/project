
const express = require('express')
const mongoose=require('mongoose')
var room=require('./routes/room')
var exam=require('./routes/exam')
var section=require('./routes/section')
var course=require('./routes/course')
var app=express()
app.use(express.json())
const mongo=mongoose.connect('mongodb+srv://Humayun-Saeed:s12345678@cluster0.p48xj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
.then(()=>{
    console.log("connected to the database successfully: ");
})
.catch((err)=>{
    console.log(err);
})
app.use('/',course)
app.use('/',room)
app.use('/',exam)
app.use('/',section)
app.listen(3000,()=>{
    console.log("connected to the server successfuly: ");
})
