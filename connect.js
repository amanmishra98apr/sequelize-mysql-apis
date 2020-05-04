const Sequelize=require('sequelize')


const connection=new Sequelize('mydb2','root','',{
  host:'localhost',
  port:'3308',
  dialect: 'mysql'
})

connection.sync({
  force:false
})
.then(()=>{
  console.log('connection established');
})
.catch(err=>{
  console.error("unable to connect with database",err);
})

//create table
const User = connection.define('User', {
  firstName: Sequelize.STRING,
  lastName:Sequelize.STRING
});

module.exports=connection
module.exports=User
