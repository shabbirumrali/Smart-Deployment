const asyncHandler = require('express-async-handler')
const Profile = require('../models/profileModel')
const User = require('../models/userModel')

// @desc    Get Profile Info
// @route   GET /api/profile
// @access  Public

const getProfile = asyncHandler(async (req, res) => {
    const profile = await Profile.find({user: req.user.id})
    res.json(profile).status(200)
})

// @desc    Create Profile Info
// @route   POST /api/profile
// @access  Private
const createProfile = asyncHandler(async (req, res) => {
    const { name } = req.body
    if(!name){
        res.status(400)
        throw new Error('please Enter name field in profile section')    
    }
    const profile = await Profile.create({
        name: req.body.name,
        surname: req.body.surname,
        description: req.body.description,
        user: req.user.id
    })
    res.json(profile).status(200)
})

// @desc    Update Profile Info
// @route   PUT /api/profile
// @access  Private
const updateProfile = asyncHandler(async (req, res) => {
    const profile = await Profile.findById(req.params.id)
    if(!profile) {
        res.status(400)
        throw new Error('id not found!')
    }
    const user = await User.findById(req.user.id)
    // check for user
    if(!user) {
        res.status(401)
        throw new Error('User not found!, this message is from profile controller')
    }

    // make sure the logged in user mataches the profile
    if(profile.user.toString() !== user.id) {
        res.status(401)
        throw new Error('User not Authorised!, this message is from profile controller')
    }

    const updateProfile = await Profile.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.json(updateProfile).status(200)
})

// @desc    Delete Profile Info
// @route   DELETE /api/profile
// @access  Private
const deleteProfile = asyncHandler(async (req, res) => {
    const profile = await Profile.findById(req.params.id)
    if(!profile) {
        res.status(400)
        throw new Error('ID not found')
    }
    const user = await User.findById(req.user.id)
    // check for user
    if(!user) {
        res.status(401)
        throw new Error('User not found!, this message is from profile controller')
    }

    // make sure the logged in user mataches the profile
    if(profile.user.toString() !== user.id) {
        res.status(401)
        throw new Error('User not Authorised!, this message is from profile controller')
    }
    await Profile.findByIdAndRemove(req.params.id)
    res.json({id: req.params.id}).status(200)
})

module.exports = {
    getProfile,
    createProfile,
    updateProfile,
    deleteProfile
}