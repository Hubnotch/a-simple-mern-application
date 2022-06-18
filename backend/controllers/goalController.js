const asyncHandler = require('express-async-handler');

//@description - Get a single goal
//@route - GET /api/goals/:id
//@access - Private
const getGoal = asyncHandler(async (req, res) => {
    res.status(200).json({ 'Get Goals': 'Success' });
});

//@description - Set a single goal
//@route - POST /api/goals
//@access - Private
const setGoal = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400);
        throw new Error('Please adda text field')
    }
    res.status(200).json({ 'Set Goals': 'Success' });
})

//@description - Put a single goal
//@route - PUT /api/goals/:id
//@access - Private
const updateGoal = asyncHandler(async (req, res) => {
    res.status(200).json({ 'Update Goals': `${req.params.id} Updated successfully` });
})

//@description - Get a single goal
//@route - GET /api/goals/:id
//@access - Private
const deleteGoal = asyncHandler(async (req, res) => {
    res.status(200).json({ 'Delete Goals': `${req.params.id} Updated successfully` });
})



module.exports = {
    getGoal,
    setGoal,
    updateGoal,
    deleteGoal
}