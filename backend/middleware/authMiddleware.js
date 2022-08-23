const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

const protect = asyncHandler(async (req, res, next) => {
    let token
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try {
            // get token
            token = req.headers.authorization.split(' ')[1]

            // Verify Token
            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            // get user from token
            req.user = await User.findById(decoded.id).select('-password')

            next()
        } catch (error) {
            console.log(error)
            res.status(401)
            throw new Error('Not Authorized!, this message is from auth middleware')
        }
    }
    if(!token) {
        res.status(400)
        throw new Error('Not Authorized!, NO TOKEN,  this message is from auth middleware')
    }
})

// Token formate is Bearer token

module.exports = {protect}