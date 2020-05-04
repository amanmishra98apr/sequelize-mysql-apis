const express=require('express')
const router=express.Router()
const User=require('../connect')




//get api for fetching all employee details
router.get('/',function(req,res){
  User.findAll().then(users => {
    console.log("All users:", JSON.stringify(users, null, 4));
    res.send(JSON.stringify(users, null, 4))
  });
});







module.exports=router;
