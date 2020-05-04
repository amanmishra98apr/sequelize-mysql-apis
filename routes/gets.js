const express=require('express')
const router=express.Router()
const User=require('../connect')


//post api
router.post('/',(req,res)=>{
  User.create(req.body,(err,result)=>{
    if(err){
      return res.status(500).send(err);
    }
    else
    return res.send(JSON.stringify(users, null, 4));
  })
})





module.exports=router;
