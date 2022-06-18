const express = require('express');
const router = express.Router();
const {getGoals,setGoal, editGoal, deleteGoal } = require('../controllers/goalController');

//Get request too api/goals route
router.get('/', getGoals)

//Post a request to api/goals route
router.post('/', setGoal)

//Put a request to api/goals route
router.put('/:id', editGoal)

//Delete a request to api/goals route
router.delete('/:id', deleteGoal)



module.exports = router;