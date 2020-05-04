const express=require('express')
const Sequelize=require('sequelize')
const app=express()
const bodyparser=require('body-parser')
app.use(bodyparser.json())
require("./connect")
const connection=require('./connect')
const PostsRout=require('./routes/posts')
const GetsRout=require('./routes/gets')
const User=require('./connect')

app.listen(3000,function(){
  console.log('server is started  port 3000')
})

//get api for fetching all employee details
app.use('/posts',PostsRout)

//post apis
app.use('/gets',GetsRout)
