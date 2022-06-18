//@description - Get a single goal
//@route - GET /api/goals/:id
//@access - Private
const getGoals = (req, res) => {
    res.status(200).json({ 'Get Goals': 'Success' });
}
//@description - Set a single goal
//@route - POST /api/goals
//@access - Private
const setGoal = (req, res) => {
    (req, res) => {
        res.status(200).json({ 'Set Goals': 'Success' });
    }
}
//@description - Put a single goal
//@route - PUT /api/goals/:id
//@access - Private
const editGoal = (req, res) => {
    res.status(200).json({ 'Update Goals': `${req.params.id} Updated successfully` });
}
//@description - Get a single goal
//@route - GET /api/goals/:id
//@access - Private
const deleteGoal = (req, res) => {
    res.status(200).json({ 'Delete Goals': `${req.params.id} Updated successfully` });
}



module.exports = {
    getGoals,
    setGoal,
    editGoal,
    deleteGoal
}