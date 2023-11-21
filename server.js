const express = require('express');
require('dotenv').config()
const mongoose = require('mongoose')
const cors = require('cors')

const workoutRoutes  = require('./routes/workout');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/workout',workoutRoutes);


mongoose.connect(process.env.MONGO_URL).then(()=>{
  /*
const userSchmea = new mongoose.Schema({name:String,age:Number})
const userModal = mongoose.model('user',userSchmea)
app.get('/user',(req,res)=>{
  userModal.find().then((u)=>{
    res.json(u)
  })
  
})
*/
  
 


app.listen(process.env.PORT, () => {
  console.log('listening on port', process.env.PORT)
})
})

.catch((error) =>{
  console.log(error)
})
/*
app.listen(process.env.PORT, () => {
    console.log('listening on port', process.env.PORT)
  })
  */
