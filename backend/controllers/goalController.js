const asyncHandler = require('express-async-handler')
const Goal = require('../models/goalsModel')
const User = require('../models/userModel')

// @desc   Get Goals
// @route  GET /api/goals
// @access Private
const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find({user: req.user.id})
    res.status(200).json(goals)
})

// @desc    Create Goal
// @route   POST /api/goals
// access   Private
const createGoal = asyncHandler(async (req, res) => {
    const { text } = req.body
    if(!text){
        res.status(400)
        throw new Error('Please Add the text or user field, This message is from controller')
    }
    const goal = await Goal.create({
        text: req.body.text,
        user: req.user.id
    })
    res.status(200).json(goal)
})

// @desc    Update Goal
// @route   PUT /api/goals/:id
// @access  Private
const updateGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id)
    if(!goal){
        res.status(400)
        throw new Error('Goal Not found!, This message is from goal controller')
    }
    
    // Check for user
    if(!req.user) {
        res.status(401)
        throw new Error('User not found!, this message is from goal controller')
    }

    // Make sure the logged in user matches the goal user
    if(goal.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('User not authorized!, this message is from goal controller')
    }
    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {new: true})

    res.status(200).json(updatedGoal)
})

// @desc    Delete Goal
// @route   DELETE /api/goals/:id
// @access  Private
const deleteGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id)
    if(!goal) {
        res.status(400)
        throw new Error('Goal not found in the database, please try again')
    }

    // Check for user
    if(!req.user) {
        res.status(401)
        throw new Error('User not found!, this message is from goal controller')
    }

    // Make sure the logged in user matches the goal user
    if(goal.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('User not authorized!, this message is from goal controller')
    }

    await Goal.findByIdAndRemove(req.params.id)
    res.status(200).json({id: req.params.id})
})

module.exports = {
    getGoals,
    createGoal,
    updateGoal,
    deleteGoal
}