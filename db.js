// responsible for connection with mongodb and node js
const mongoose=require('mongoose');
const url='mongodb://localhost:27017/res'//replace mydatabase with your database name
// set conenction
mongoose.connect(url)
const db=mongoose.connection;
db.on('connected',()=>{
    console.log("Connected to MongoDb Server");
})
db.on('error',(err)=>{
    console.error("error",err);
})
db.on('disconnected',()=>{
    console.log("disconnected");
})
module.exports=db;