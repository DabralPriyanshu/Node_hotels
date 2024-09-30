const mongoose=require('mongoose')
  // lets make a schema   
  const personSchema=new mongoose.Schema({

     Name:{
        type:String,
        required:true
     },
     Age:{
        type:Number,
        required:true
     },
     Work:{
        type:String,
        enum:['chef','waiter','manager'],
        required:true
     },
     MobileNumber:{
        type :String
     },
     Email:{
        type:String,
        required:true,
        unique:true
     },
     Address:{
        type:String,

     }, 
     Salary:{
        type:Number,
        required:true,
     }
 })
 /// create a person model
 const Person=mongoose.model('Person',personSchema)
 module.exports=Person;