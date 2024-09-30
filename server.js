const express=require('express')
const app=express()
const db=require('./db')
const bodyParser=require('body-parser')
app.use(bodyParser.json());
const Person=require('./models/person')
app.get('/',function(req,res){
    res.send('server on')
})
app.get('/panner',(req,res)=>{
    res.send('panner is ready to server')
})
app.get('/pizza',(req,res)=>{
    res.send('pizza is ready to server')
})

const personRoutes=require('./routes/personRoutes')
app.use('/person',personRoutes);
app.listen(3000,()=>{
    console.log('server is running');
})
//