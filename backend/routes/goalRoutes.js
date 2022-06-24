const express = require('express');
const router = express.Router();
const { getGoal, setGoal, updateGoal, deleteGoal } = require('../controllers/goalController');
const { protect } = require('../middleware/authMiddleware')

/* //Get request too api/goals route
router.get('/', getGoals)

//Post a request to api/goals route
router.post('/', setGoal)

//Put a request to api/goals route
router.put('/:id', updateGoal)

//Delete a request to api/goals route
router.delete('/:id', deleteGoal)

 */
router.route('/').get(protect, getGoal).post(protect, setGoal)
router.route('/:id').put(protect, updateGoal).delete(protect, deleteGoal)



module.exports = router;