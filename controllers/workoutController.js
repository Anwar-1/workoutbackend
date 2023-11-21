const Workout = require('../model/workoutModel')
const mongoose = require('mongoose')


const getWorkouts = async(req, res) => {
      
    const work = await Workout.find().sort({createdAt:-1})
    res.status(200).json(work)
    //res.json({mssg:'get all workout'})
}

const getWorkout = async(req, res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"no such work "})
    }
    const work = await Workout.findById(id)
    if(!work){
        return res.status(404).json({error:"no such workout"})
    }
    res.status(200).json(work)
   /// res.json({mssg:'get a single workout'})
}

const createWorkout = async(req, res) => {
    //res.json({mssg:'post a new work '})
    const{title,load,reps} = req.body

    try{
        const workout = await Workout.create({title,load,reps})
        res.status(200).json(workout)
    }
    catch(error){
        res.status(400).json({error:error.message})
    }
}

const updateWorkout = async(req, res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"no such work "})
    }
    const work = await Workout.findOneAndUpdate({_id:id},{
        ...req.body
    })
    if(!work){
        return res.status(404).json({error:"no such workout"})
    }
    res.status(200).json(work)

   // res.json({mssg:'update the '})
}

const deleteWorkout = async(req, res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"no such work "})
    }
    const work = await Workout.findOneAndDelete({_id:id})
    if(!work){
        return res.status(404).json({error:"no such workout"})
    }
    res.status(200).json(work)


   // res.json({mssg:'delete the as'})
}

module.exports = {getWorkouts,getWorkout,createWorkout,updateWorkout,deleteWorkout}






















































/*const Workout = require('../model/workoutModel')
const mongoose = require('mongoose')


const getworkoutes = async(req, res) => {
      
    const work = await Workout.find().sort({createdAt:-1})
    res.status(200).json(work)
    //res.json({mssg:'get all workout'})
  }

  const getworkoute = async(req, res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
     return res.status(404).json({error:"no such work"})
    }
   
    const work = await Workout.findById(id)
    if(!work){
     return res.status(404).json({error:"no such work"})
    }
    res.status(200).json(work)
   }

   const createworkout = async (req, res) => {
    const{title,load,reps} = req.body
  
    try{
      const work = await Workout.create({title,load,reps})
      res.status(200).json(work)
    }
    catch(error){
         res.status(400).json({error:error.message})
    }
   // res.json({mssg: 'POST a new workout'})
  }


  const updateworkout = async(req, res) => {
    const { id } = req.params
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({error: 'No such workout'})
    }
  
    const workout = await Workout.findOneAndUpdate({_id: id}, {
      ...req.body
    })
  
    if (!workout) {
      return res.status(400).json({error: 'No such workout'})
    }
  
    res.status(200).json(workout)
  }


  const deletworkout = async(req, res) => {
    const { id } = req.params
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({error: 'No such workout'})
    }
  
    const workout = await Workout.findOneAndDelete({_id: id})
  
    if(!workout) {
      return res.status(400).json({error: 'No such workout'})
    }
  
    res.status(200).json(workout)
  }

  module.exports = {getworkoutes,getworkoute,createworkout,updateworkout,deletworkout}

*/


