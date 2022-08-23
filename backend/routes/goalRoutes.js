const express = require('express')
const router = express.Router()
const { getGoals, createGoal, updateGoal, deleteGoal } = require('../controllers/goalController')
const { protect } = require('../middleware/authMiddleware')

// Get  Goals
// router.get('/', getGoals)

// Create Goal
// router.post('/', createGoal)

router.route('/').get(protect, getGoals).post(protect, createGoal)

// Update Goal
// router.put('/:id', updateGoal)

// Delete Goal
// router.delete('/:id', deleteGoal)

router.route('/:id').put(protect, updateGoal).delete(protect, deleteGoal)

module.exports = router