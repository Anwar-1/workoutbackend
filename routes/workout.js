const express = require('express')
const router = express.Router()

const Workout = require('../model/workoutModel')
const { default: mongoose } = require('mongoose')
const {getWorkouts,getWorkout,createWorkout,updateWorkout,deleteWorkout} = require('../controllers/workoutController')

///get all work 
router.get('/',getWorkouts)

/// get a single workout
router.get('/:id',getWorkout)

/// post a new work 
router.post('/',createWorkout)

/// delete a workout
router.delete('/:id',deleteWorkout)

/// update a workout 
router.patch('/:id',updateWorkout)


module.exports = router




























/*const express = require('express')

const router = express.Router()
const Workout = require('../model/workoutModel')
const mongoose = require('mongoose')
const {getworkoutes,getworkoute,createworkout,updateworkout,deletworkout} = require('../controllers/workoutController')


// GET all workouts

router.get('/',)

// GET a single workout
router.get('/:id', )

// POST a new workout
router.post('/', )

// DELETE a workout
router.delete('/:id', )

// UPDATE a workout
router.patch('/:id', )

module.exports = router
*/