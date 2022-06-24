const asyncHandler = require('express-async-handler');
const Goal = require('../models/goalModel');
const User = require('../models/userModel')


//@description - Get a single goal
//@route - GET /api/goals/:id
//@access - Private
const getGoal = asyncHandler(async (req, res) => {
    const goals = await Goal.find({ user: req.user.id });
    res.status(200).json(goals);
});

//@description - Set a single goal
//@route - POST /api/goals
//@access - Private
const setGoal = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400);
        throw new Error('Please add text field')
    }
    const goal = await Goal.create({
        text: req.body.text,
        user: req.user.id
    });
    res.status(200).json(goal);
})

//@description - Put a single goal
//@route - PUT /api/goals/:id
//@access - Private
const updateGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id);
    if (!goal) {
        res.status(404);
        throw new Error('Goal not found');
    }
    const user = await User.findById(req.user.id)
    //check if user exist
    if (!user) {
        res.status(401)
        throw new Error('User not found')
    }
    //Make sure the logged in user matches the goal user
    if(goal.user.toString() !== user.id){
        res.status(401)
        throw new Error('User not authorised')
    }
    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedGoal);
})

//@description - Get a single goal
//@route - GET /api/goals/:id
//@access - Private
const deleteGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id);
    if (!goal) {
        res.status(404);
        throw new Error('Goal not found');
    }
    const user = await User.findById(req.user.id)
    //check if user exist
    if (!user) {
        res.status(401)
        throw new Error('User not found')
    }
    //Make sure the logged in user matches the goal user
    if(goal.user.toString() !== user.id){
        res.status(401)
        throw new Error('User not authorised')
    }
    //const deletedGoal = await Goal.findByIdAndDelete(goal)
    await goal.remove()
    res.status(200).json(`ID: ${req.params.id}`);
})



module.exports = {
    getGoal,
    setGoal,
    updateGoal,
    deleteGoal
}