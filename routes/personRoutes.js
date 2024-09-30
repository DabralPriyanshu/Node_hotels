const express=require('express')
const router=express.Router();
const Person=require('./../models/person')

router.post('/',async(req,res)=>{
    try{
     const Data=req.body   
     const newPerson=new Person(Data);
      const response=await newPerson.save();
      console.log('Data Saved');
      res.status(200).json(response)
      
     
    }catch(err)
    {
     console.log(err);
     res.status(500).json(err,'Internal Server Error')
    }
     
 })
 
router.get('/',async(req,res)=>{
    try{
        const data= await Person.find();
        console.log('Data Fetched')
        res.status(200).json(data);

    }catch(err)
    {
        console.log(err);
        res.status(500).json(err,'Internal Server Error')

    }
})
router.get('/:workType',async(req,res)=>{
    try{
  const  workType=req.params.workType; //extract the work type from url parameter
  if(workType=='chef'||workType=='manager'||workType=='waiter')
    {
       const response=await Person.find({Work:workType});
       res.status(200).json(response);

    }
    else{
        res.status(404).json({error: 'Invalid Work Type'});
    }
  

    }
    catch(err)
    {
        console.log(err);
        
        res.status(500).json({error: 'Internal Server Error'});
    }
})
// To Update
router.put('/:id',async(req,res)=>{
try{
const personId=req.params.id;
const updatedPersonData=req.body;
const response=await Person.findByIdAndUpdate(personId,updatedPersonData,{
    new:true,  //return the update version
    runValidators:true  // run mongoose validators  jo validation lgayi hai unke check krega
}
)
if(!response){
    return res.status(404).json({error:'Person not found'});
}
console.log('Data Updated');
res.status(200).json(response)

}
catch(err){
    console.log(err);
    res.status(500).json({err:'Internal Server Error'})
}
})
//To Delete
router.delete('/:id',async(req,res)=>{
    try{
    const personId=req.params.id;
    const response=await Person.findByIdAndDelete(personId)
    if(!response){
        return res.status(404).json({error:'Person not found'});
    }
    console.log('Data Deleted');
    res.status(200).json({message:'deleted'})
    
    }
    catch(err){
        console.log(err);
        res.status(500).json({err:'Internal Server Error'})
    }
    })

module.exports=router;
