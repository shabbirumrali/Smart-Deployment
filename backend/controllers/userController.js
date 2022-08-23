const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/userModel')
const asyncHandler = require('express-async-handler')

// @desc    Register User
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body
    if(!name || !email || !password) {
        res.status(400)
        throw new Error('Please add all fields, this message is from Register user controller')
    }
    // check if user exist
    const userExists = await User.findOne({email})
    if(userExists) {
        res.status(400)
        throw new Error('User already Exists, This message is from Register user controller')
    }
    // Hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const user = await User.create({
        name,
        email,
        password: hashedPassword
    })

    if(user) {
        res.status(200).json({
            message: 'User Registerd!',
            user: user,
            token: generateToken(user._id)
        })
    }
})

// @desc    Authenticate a User
// @route   POST /api/users/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
    const {email, password} = req.body
    
    // field is empty
    if(!email || !password) {
        res.status(400)
        throw new Error('Email or Password field is empty, This message is from authenticate user controller')
    }

    const user = await User.findOne({email})
    // Check for the email if not exist
    if(!user) {
        res.status(400)
        throw new Error('User not found!, This message is from authenticate user controller')
    }
    if(user && (await bcrypt.compare(password, user.password))) {
        res.json({
            message: 'login successful!', 
            user: user,
            token: generateToken(user._id)
        }).status(200)
    } else {
        res.status(400)
        throw new Error('Incorrect email or password!, This message is from authenticate user controller')
    }
})

// @desc    Get User Data
// @route   GET /api/users/me
// @access  Private
const getMe = asyncHandler(async (req, res) => {
    res.status(200).json(req.user)
})

// Generate Token
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {expiresIn: '30d'})
}


module.exports = {registerUser, loginUser, getMe}