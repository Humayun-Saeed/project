
var mongoose=require('mongoose')
var room=require('../schemas/Room_schema.js')

module.exports.add_room=(req,res)=>{

var add=new room()
add.number=req.body.number;
add.capacity=req.body.capacity;
add.building=req.body.building;
 add.save().then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);
})

}